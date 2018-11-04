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
          isMyProfile:true,
          isEditing:false
        };
    }

    onClickEditData=()=>
    {
        this.setState({isEditing : true})
        notify.show("Now you can edit your data",'success');
    }
    onClickSavedData=()=>
    {
        this.setState({isEditing : false})
        notify.show("New data saved successfully",'success');
    }
    onClickSendMessage=()=>
    {
      console.log("OPENING CONVERSATION TOOL");
      console.log(this.state);
    }

    CheckIfMyProfile(){
      let {isMyProfile,isEditing} = this.state;
        if(!isMyProfile){
          return(<button className="uk-button uk-button-default message-button uk-margin-top" onClick={this.onClickSendMessage} type="submit">
          Message</button>)
        }else if(isMyProfile){
          if(!isEditing){
            return(<button className="uk-button uk-button-default message-button uk-margin-top" onClick={this.onClickEditData}>
          Edit</button>)
          }
          else{
            return(<button className="uk-button uk-button-default message-button uk-margin-top" onClick={this.onClickSavedData} type="submit">
          Save</button>)
          }
        }
    }

    render() {
        return (
            <div className="whole-user-screen">
                <nav className="uk-navbar-container uk-margin" uk-navbar>
                    <div className="uk-navbar-left">
                        <img className="uk-navbar-item uk-logo" src={logo}/>
                        <ul className="uk-navbar-nav">
                        <li><a uk-toggle="target: #offcanvas-overlay" uk-close>NICKNAME</a></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                        <li><button className="uk-navbar-item uk-logo my-notifications">Notifications</button></li>
                        <li><img className="uk-navbar-item uk-logo my-avatar" src={avatar}/></li>
                        </ul>
                    </div>
                </nav>
                <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
                    <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar">
                        <div className="uk-container uk-container-expand uk-vertical-align-middle">
                            <ul className="user-names">
                              <li><img className="uk-navbar-item uk-logo my-profile-picture" src={avatar}/></li>
                              <li>First Name</li>
                              <li>Last Name</li>
                              <li>Band Name</li>
                              </ul>
                              <h1 className="my-instruments">My Instruments:</h1>
                              <ul className="uk-list uk-list-striped uk-margin-bottom">
                                  <li>Piano</li>
                                  <li>Guitar</li>
                                  <li>Flute</li>
                              </ul>
                              {this.CheckIfMyProfile()}
                          </div>
                        </div>
                    </div>
                    <div className ="my-padding-right">
                      <div className ="general-info">
                        <div className="detailed-user-info">
                          <h1>About Me</h1>
                          <hr></hr>
                          <textarea class="uk-textarea detailed-user-info" rows="5" disabled={!this.state.isEditing} placeholder="Textarea">IM FROM LODZ I AM PLAYING GUITAR SINCE 8, ALSO I AM TAKING PIANO LESSONS FOR 4YEARS NOW.</textarea>
                        </div>
                        <div className="detailed-user-info">
                          <h1>Favourite Artists</h1>
                          <hr></hr>
                          <textarea class="uk-textarea detailed-user-info" rows="5" disabled={!this.state.isEditing} placeholder="Textarea">My favourite band is Black Sabbath</textarea>
                        </div>
                        <div className="detailed-user-info">
                          <h1>My Plans</h1>
                          <hr></hr>
                          <textarea className="uk-textarea detailed-user-info" rows="5" disabled={!this.state.isEditing} placeholder="Textarea">My plans are PLAYING ON OPENER</textarea>
                        </div>
                        <div className="detailed-user-info">
                          <h1>My Experience</h1>
                          <hr></hr>
                          <textarea className="uk-textarea detailed-user-info" rows="5" disabled={!this.state.isEditing} placeholder="Textarea">My plans are PLAYING ON OPENER</textarea>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
        )
    }
}