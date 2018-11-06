import React from "react";
import "./assets/scss/navigation_bar.scss";
import logo from './assets/images/GigLogoBlack.png';
import avatar from './assets/images/User_Avatar2.png';

const NavigationBar = props => (
    <div className="custom-nav-bar">
      <nav className="uk-margin" uk-navbar>
        <div className="uk-navbar-left">
            <img className="uk-navbar-item uk-logo" src={logo}/>
            <ul className="uk-navbar-nav">
            <li><a onClick={props.sidebarOpenHandler}>NICKNAME</a></li>
            </ul>
        </div>
        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
            <li><button className="uk-navbar-item uk-logo my-notifications">Notifications</button></li>
            <li><img className="uk-navbar-item uk-logo my-avatar" src={avatar}/></li>
            </ul>
        </div>
      </nav>
    </div>
  )

export default NavigationBar;
