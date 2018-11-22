import React, { Component } from "react";
import avatar from "../assets/images/User_Avatar2.png";
import searchIcon from '../assets/images/search.svg';
import notificationIcon from '../assets/images/notification.svg';

class NavbarComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      searchValue:'Szukaj muzyków...'
    }
  }

  render(){
    const { searchValue } = this.state;
    const { showSidebar } = this.props;
    return(
      <nav className="custom-navbar">
          <form className="custom-navbar__container">
            <img onClick={showSidebar} className="avatar" src={this.props.avatar || avatar} alt="avatar-logo"/>
            <img className="icon--small uk-margin-left" src={searchIcon} alt="search-icon"/>
            <input onChange={e => this.setState({ searchValue: e.target.value })} className="input__search uk-text-bold uk-margin-small-left" type="text" value={searchValue}/>
            <div style={{"maxWidth":"35px", "maxHeight":"35px"}} className="uk-display-inline-block uk-position-relative">
              <img style={{"width":"100%"}} className="uk-margin-left" src={notificationIcon} alt="notification"/>
              <span className="uk-text-bold notification-number">4</span>
            </div>
          </form>
      </nav>
    )
  }
}


export default NavbarComponent;
