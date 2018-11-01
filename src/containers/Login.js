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
      isLogged:false
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
      email: email,
      password: password
    };


    // if (email && password) {
    //   if (!this.validateEmail(email)) {
    //     notify.show("Invalid email", "error");
    //     errors.push("invalid email");
    //   } else {
    //     this.setState({ errors: [] });
    //   }
    // }
    api.setToken(data)
      .then(res => {
        setToken(res.data["auth_token"])
        this.setState({ isLogged: true })
      });


      //wrzuć sobie to spowrotem w te ify
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    // brakuje jakiegoś info typu "Nie masz konta, kliknij button aby zarejestrować się lub whatever"
    
    const { email, password, isLogged } = this.state;
    if(isLogged){
      return(
        <Redirect to="/dashboard"/>
      )
    }
    return (
      <div>
        <div className="uk-container uk-container-expand">
          <img
            className="uk-align-left logo-img"
            src={logo}
            alt=""
          />
        </div>
        <form
          className="uk-panel uk-panel-box uk-form"
          onSubmit={this.onSubmit}
        >
          <h1 className="uk-container uk-container-expand uk-vertical-align-middle uk-heading">
            Login
          </h1>
          <hr />
          <div className="uk-container uk-container-expand uk-vertical-align-middle ">
            <div className="uk-margin uk-margin-bottom uk-margin-top">
              <div className="uk-inline">
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
              <div className="uk-inline">
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
          <br />
          <div className="uk-container uk-container-expand uk-vertical-align-middle ">
            <div className="uk-container uk-container-expand uk-vertical-align-middle">
              <div className="uk-margin">
                <button className="uk-button uk-button-default" type="submit">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}



export default connect(null, { setToken })(Login)