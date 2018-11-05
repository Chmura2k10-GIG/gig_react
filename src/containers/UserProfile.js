import React, { Component } from 'react'
import NavigationBar from "../NavigationBar";
import Notifications, { notify } from 'react-notify-toast';
import api from "../api";
import {Redirect} from 'react-router-dom';
import { timingSafeEqual } from 'crypto';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isMyProfile:true,
          isEditing:false,
          sideBarOpen:false
        };
    }

    handleSidebarToggle=()=>{
      console.log("toggle");
      this.setState((prevState) => {
        return {sideBarOpen: !prevState.sideBarOpen};
      });
    };

    onClickEditData=()=>
    {
        this.setState({ isEditing : true })
        notify.show("Now you can edit your data",'success');
    };
    onClickSavedData=()=>
    {
        this.setState({ isEditing : false })
        notify.show("New data saved successfully",'success');
    };
    onClickSendMessage=()=>
    {
      console.log("OPENING CONVERSATION TOOL");
      console.log(this.state);
    };

    CheckIfMyProfile(){
      let { isMyProfile,isEditing } = this.state;
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
      let sidebar;

      if(this.state.sideBarOpen)
      {
        
      }

      return (
        <div className="whole-user-screen">
            { <NavigationBar sidebarOpenHandler={this.handleSidebarToggle}/> }
              <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
              <div className="custom-sidebar">

              </div>

                <div className ="custom-general">
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
        )
    }
}




{/*   <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
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
                              <li>Piano</li>
                              <li>{this.CheckIfMyProfile()}</li>
                          </ul>
                      </div>
                    </div>
                </div> */}