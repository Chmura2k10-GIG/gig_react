import React from "react";
import "./assets/scss/navigation_bar.scss";
import logo from "./assets/images/GigLogoBlack.png";
import avatar from "./assets/images/User_Avatar2.png";
import  { Link } from 'react-router-dom'


const NavigationBar = props => (
  <div className="custom-nav-bar">
    <nav className="uk-margin" uk-navbar>
      <div className="uk-navbar-left">
      <Link to="/dashboard"><img className="uk-navbar-item uk-logo" src={logo} /></Link>
        <ul className="uk-navbar-nav">
          <li>
            <a onClick={props.sidebarOpenHandler}>NICKNAME</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <button className="uk-navbar-item uk-margin-top uk-logo my-notifications">
              Notifications
            </button>
          </li>
          <li>
            <Link to="/userprofile"><img className="uk-navbar-item uk-logo my-avatar" src={avatar} /></Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavigationBar;
