import React, { Component } from 'react'
import NavigationBar from "../NavigationBar";
import Notifications, { notify } from 'react-notify-toast';
import api from "../api";
import {Redirect} from 'react-router-dom';
import { timingSafeEqual } from 'crypto';
import avatar from '.././assets/images/User_Avatar2.png';

class Instrument extends Component{
  render(){
    return(
      <div>
      {this.props.name}
      </div>
    )
  }
}

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isMyProfile:true,
          isEditing:false,
          sideBarOpen:false,
          instruments:[]
        };
    }

    handleSidebarToggle=()=>{
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

    showSidebar(){
      let options = [1,2,3];
      let sidebarClass;
      if(!this.state.sideBarOpen){
        sidebarClass = 'custom-sidebar ';
      }else{
        sidebarClass = 'custom-sidebar open';
      }
        return(<nav className={sidebarClass}>
        <div className="uk-container uk-container-expand uk-vertical-align-middle">
          <ul className="user-names">
            <li><img className={this.state.isEditing?"uk-navbar-item uk-logo my-profile-picture custom-edit-avatar":"uk-navbar-item uk-logo my-profile-picture"} src={avatar}/></li>
            <li className={this.state.isEditing?"custom-edit-name":""}>First Name</li>
            <li className={this.state.isEditing?"custom-edit-name":""}>Last Name</li>
            <li className={this.state.isEditing?"custom-edit-name":""}>Band Name</li>
            <li className={this.state.isEditing?"custom-edit-name":""}>Email</li>
            <li className={this.state.isEditing?"custom-edit-name":""}>City</li>
            </ul>
            <h1 className="my-instruments">Instruments</h1>
           <ul className="uk-list custom-list uk-margin-bottom">
           {this.state.instruments.map(instrument => <Instrument name={instrument.name}/>)}
            </ul>
            <div className="uk-button-mini uk-form-select" style={this.state.isEditing?{} : {display:'none'}} onClick={this.loadInstruments}>{}<select></select></div>
            {this.CheckIfMyProfile()}
        </div>
        </nav>)
      }

      loadInstruments=()=>{
        api.getInstruments()
        .then(({ data }) => {
          this.setState({instruments:data});
          console.log(this.state.instruments);
        })
      }

      showInstrumets(){
        
      }
    render() {
      let sidebar;
      return (
        <div className="whole-user-screen">
                    {this.showSidebar()}

            { <NavigationBar sidebarOpenHandler={this.handleSidebarToggle}/> }
              <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
                <div className ={this.state.sideBarOpen ?"custom-general detailed-user-info-small":"custom-general"}>
                    <div className="detailed-user-info">
                      <h1>About Me</h1>
                      <hr></hr>
                      <textarea className={this.state.isEditing ?"uk-textarea detailed-user-info custom-edit":
                       "uk-textarea detailed-user-info"} rows="5" disabled={!this.state.isEditing} placeholder="Textarea">
                       IM FROM LODZ I AM PLAYING GUITAR SINCE 8, ALSO I AM TAKING PIANO LESSONS FOR 4YEARS NOW.
                      </textarea>
                    </div>
                    <div className="detailed-user-info">
                      <h1>Favourite Artists</h1>
                      <hr></hr>
                      <textarea className={this.state.isEditing ?"uk-textarea detailed-user-info custom-edit":
                       "uk-textarea detailed-user-info"} rows="5" disabled={!this.state.isEditing} placeholder="Textarea">My favourite band is Black Sabbath</textarea>
                    </div>
                    <div className="detailed-user-info">
                      <h1>My Plans</h1>
                      <hr></hr>
                      <textarea className={this.state.isEditing ?"uk-textarea detailed-user-info custom-edit":
                       "uk-textarea detailed-user-info"} rows="5" disabled={!this.state.isEditing} placeholder="Textarea">My plans are PLAYING ON OPENER</textarea>
                    </div>
                    <div className="detailed-user-info">
                      <h1>My Experience</h1>
                      <hr></hr>
                      <textarea className={this.state.isEditing ?"uk-textarea detailed-user-info custom-edit":
                       "uk-textarea detailed-user-info"} rows="5" disabled={!this.state.isEditing}  placeholder="Textarea">My plans are PLAYING ON OPENER</textarea>
                    </div>
                  </div>
                </div>
              </div>
        )
    }
}