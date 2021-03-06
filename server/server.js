import Express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import path from 'path';
import IntlWrapper from '../client/modules/Intl/IntlWrapper';
import favicon96 from './favicon/favicon96.png';
import favicon144 from './favicon/favicon144.png';
import favicon192 from './favicon/favicon192.png';

// Initialize the Express App
const app = new Express();
const passport = require('./util/passport/passport');

// Set Development modes checks
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  const webpack = require('webpack');
  // eslint-disable-next-line global-require
  const config = require('../webpack.config.dev');
  // eslint-disable-next-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware');
  // eslint-disable-next-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup
import { configureStore } from '../client/store';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';


// Import required modules
import routes from '../client/routes';
import { fetchComponentData } from './util/fetchData';
import auth from './routes/auth.routes';
import currentUser from './routes/currentUser.routes';
import travel from './routes/travel.routes';
import user from './routes/user.routes';
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }
  });
}

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(corsPrefetch);
app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [serverConfig.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(Express.static(path.resolve(__dirname, '../dist/client')));
app.use('/auth', auth);
app.use('/api', currentUser);
app.use('/api', travel);
app.use('/api', user);

const accountSid = 'ACd24751f50dd2fc77ff2a7f23e1e8d629'; // Your Account SID from www.twilio.com/console
const authToken = 'c43e640c087b9646a7d5c39ce1599c25';   // Your Auth Token from www.twilio.com/console
import Twilio from 'twilio';
const client = new Twilio(accountSid, authToken);
client.messages.create({
  body: 'Holita de Tobcity!!!',
  to: '+573053386099',  // Text this number
  from: '+573015999375', // From a valid Twilio number
})
// eslint-disable-next-line
.then((message) => console.log(message.sid));

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();

  // Import Manifests
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
  return `
    <!doctype html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}

        ${isProdMode ? `<link rel='stylesheet' href='${assetsManifest['/main.css']}' />` : ''}
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        <link rel="icon" type="image/png" href=${favicon96} sizes="96x96" />
        <link rel="icon" type="image/png" href=${favicon144} sizes="144x144" />
        <link rel="icon" type="image/png" href=${favicon192} sizes="192x192" />
        <title>Tobcity Viajes Compartidos!</title>
        <meta name="description" content="Tobcity te permite ahorrar dinero, ayudar el medio ambiente y llegar donde quieras." />
        <link href="https://fonts.googleapis.com/css?family=Baloo+Tammudu|Quicksand|Raleway" rel="stylesheet">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
      </head>
      <body>
        <div id="root">${process.env.NODE_ENV === 'production' ? html : `<div>${html}</div>`}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          ${isProdMode ?
          `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>` : ''}
        </script>
        <script src='${isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${isProdMode ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `;
};

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = isProdMode ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return res.status(404);
    }

    const store = configureStore();

    return fetchComponentData(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
            <IntlWrapper>
              <RouterContext {...renderProps} />
            </IntlWrapper>
          </Provider>
        );
        const finalState = store.getState();

        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState));
      })
      .catch((error) => next(error));
  });
});

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Tobcity is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
