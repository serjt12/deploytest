const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  cookieKey: process.env.cookieKey || 'asdasdasdasdsadsadsad',
};

export default config;
