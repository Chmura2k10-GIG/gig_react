import React, { Component } from "react";
import { notify } from "react-notify-toast";
import api from "../api";
import logo from '../assets/images/GigLogoOrange.png';
import { connect } from 'react-redux'
import { setToken } from '../actions/user'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
      isLogged: false,
      redirect: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { setToken } = this.props;
    let { errors } = this.state;
    const data = {
      "auth": {
        "email": email,
        "password": password
      }
    };

    if (email && password) {
      if (this.validateEmail(email)) {
          api.setToken(data)
            .then(res => {
              setToken(res.data["jwt"])
              this.setState({ isLogged: true })
            })
            .catch(err => {
              notify.show("invalid password or email", "error");
            });
        } 
        else {
          notify.show("Invalid email", "error");
      }
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const { email, password, isLogged } = this.state;
    const { redirect } = this.state;

    if (isLogged) {
      return (
        <Redirect to="/dashboard" />
      )
    }
    if (redirect) {
      return <Redirect to="/register" />;
    }
    return (
      <div>
        <div className="uk-container">
          <img
            className="app-logo"
            src={logo}
            alt=""
          />
        </div>
        <form
          className="uk-panel uk-panel-box uk-form"
          onSubmit={this.onSubmit}
        >
          <h1 className="text--orange uk-text-center">Login</h1>
          <hr />
          <div className="uk-container">
            <div className="uk-flex uk-flex-center uk-flex-wrap">
              <div className="uk-inline uk-margin-bottom uk-margin-top">
                <input
                  className="uk-input"
                  name="email"
                  type="text"
                  value={email}
                  required={true}
                  onChange={e => this.onChange(e)}
                  placeholder="E-mail"
                />
              </div>
              <div className="uk-inline uk-margin-bottom">
                <input
                  className="uk-input"
                  name="password"
                  type="password"
                  value={password}
                  required={true}
                  onChange={e => this.onChange(e)}
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="uk-container">
            <div className="uk-margin-top uk-flex uk-flex-center uk-margin-bottom">
              <button className="custom-button" type="submit">
                LOGIN
              </button>
            </div>
            <hr />
            <div className="uk-margin-top uk-flex uk-flex-middle uk-flex-wrap uk-flex-column uk-margin-bottom">
              <span className="uk-margin-top uk-text-bold uk-display-block">Are you new here?</span>
              <button className="custom-button uk-margin-top" onClick={() => this.setState({ redirect: true })}>
                REGISTER
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}



export default connect(null, { setToken })(Login)