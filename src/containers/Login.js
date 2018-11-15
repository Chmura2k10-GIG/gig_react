import React, { Component } from "react";
import { notify } from "react-notify-toast";
import logo from '../assets/images/GigLogoOrange.png';
import { connect } from 'react-redux';
import { setUser } from '../actions/user';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-spinkit';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
      redirect: false,
      isFetchingData:false
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
    const { setUser } = this.props;
    const data = {
      "auth": {
        "email": email,
        "password": password
      }
    };

    if (email && password) {
      if (this.validateEmail(email)) {
          this.setState({ isFetchingData: true }, () => {
            setUser(data)
          })
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
    const { email, password, redirect, isFetchingData } = this.state;
    const { user } = this.props;

    if (Object.keys(user).length > 0) {
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
        {
          isFetchingData ?
            <Spinner name="circle" color="orange" />
          :
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
                      placeholder="Hasło"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="uk-container">
                <div className="uk-margin-top uk-flex uk-flex-center uk-margin-bottom">
                  <button className="custom-button" type="submit">
                    Zaloguj się
              </button>
                </div>
                <hr />
                <div className="uk-margin-top uk-flex uk-flex-middle uk-flex-wrap uk-flex-column uk-margin-bottom">
                  <span className="uk-margin-top uk-text-bold uk-display-block">Nie masz konta?</span>
                  <button className="custom-button uk-margin-top" onClick={() => this.setState({ redirect: true })}>
                    Zarejestruj się
                  </button>
                </div>
              </div>
            </form>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user:state.user.current
  }
}


export default connect(mapStateToProps, { setUser })(Login)