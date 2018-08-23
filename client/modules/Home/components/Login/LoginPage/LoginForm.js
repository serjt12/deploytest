import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      cellphone: '',
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    this.props._login(this.state.username, this.state.password);
    this.setState({
      redirectTo: '/',
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="LoginForm">
          <h1>Login form</h1>
          <form>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="cellphone">Numero celular: </label>
            <input
              type="number"
              name="cellphone"
              value={this.state.cellphone}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Login</button>
          </form>
          <p>Si no estas registrado haz click <Link to="/signup">AQUI</Link></p>
        </div>
		);
    }
  }
}

export default LoginForm;
