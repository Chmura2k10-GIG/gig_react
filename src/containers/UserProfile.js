import React, { Component } from 'react'
import logo from './../assets/images/GigLogoBlack.png';
import avatar from './../assets/images/User_Avatar2.png';
import Notifications, { notify } from 'react-notify-toast';
import api from "../api";
import {Redirect} from 'react-router-dom';
import { timingSafeEqual } from 'crypto';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="whole-user-screen">
                <nav class="uk-navbar-container uk-margin" uk-navbar>
                    <div class="uk-navbar-left">
                        <img class="uk-navbar-item uk-logo" src={logo}/>
                        <ul class="uk-navbar-nav">
                        <li><a uk-toggle="target: #offcanvas-overlay" uk-close>NICKNAME</a></li>
                        </ul>
                    </div>
                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                        <li><button class="uk-navbar-item uk-logo my-notifications">Notifications</button></li>
                        <li><img class="uk-navbar-item uk-logo my-avatar" src={avatar}/></li>
                        </ul>
                    </div>
                </nav>
                <div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
                    <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                        <div class="uk-offcanvas-bar">
                        <div className="uk-container uk-container-expand uk-vertical-align-middle">
                            <ul className="user-names">
                              <li><img class="uk-navbar-item uk-logo my-profile-picture" src={avatar}/></li>
                              <li>First Name</li>
                              <li>Last Name</li>
                              <li>Band Name</li>
                              </ul>
                              <h1 className="my-instruments">My Instruments:</h1>
                              <ul class="uk-list uk-list-striped uk-margin-bottom">
                                  <li>Piano</li>
                                  <li>Guitar</li>
                                  <li>Flute</li>
                              </ul>
                              <button className="uk-button uk-button-default message-button uk-margin-top" type="submit">Message</button>
                          </div>
                        </div>
                    </div>
                    <div class ="my-padding-right">
                      <div class="detailed-user-info">
                      <h1>About Me</h1>
                      <hr></hr>
                        IM FROM LODZ I AM PLAYING GUITAR SINCE 8, ALSO I AM TAKING PIANO LESSONS FOR 4YEARS NOW.
                      </div>
                      <div class="detailed-user-info">
                      <h1>Favourite Artists</h1>
                      <hr></hr>
                        MY FAVOURITE TRACKS
                      </div>
                      <div class="detailed-user-info">
                      <h1>My Plans</h1>
                      <hr></hr>
                        MY PLAAAAAAAAAAAAAAAAAAAAAANS
                      </div>
                    </div>
                </div>
              </div>
        )
    }
}