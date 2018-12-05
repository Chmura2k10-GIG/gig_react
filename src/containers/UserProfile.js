import React, { Component } from "react";
import api from "../api";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { clearToken } from '../actions/user';
import Carousel from 'nuka-carousel';
import NavbarComponent from '../components/NavbarComponent';
import UserProfileDetailsComponent from '../components/UserProfileDetailsComponent';
import UserProfileActivityComponent from '../components/UserProfileActivityComponent';
import SidebarComponent from '../components/SidebarComponent';
import FooterComponent from '../components/FooterComponent';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instruments: [],
      showSidebar:false,
      userEvents:[]
    };
  }

  componentDidMount(){
    const { user } = this.props
    const { clickedUser } = this.props.location;
    const currentUser = clickedUser || user;
    api.getUserInstruments(currentUser.id)
      .then(res => this.setState({ instruments: res.data}))
      .then(() => {
        api.getUserEvents(currentUser.id)
          .then( res => this.setState({ userEvents: res.data }))
      })
  }

  render() {
    const { showSidebar, instruments, userEvents } = this.state;
    const { user, token, clearToken } = this.props;
    const { clickedUser } = this.props.location;
    if (token.length === 0) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="uk-flex uk-flex-column uk-flex-wrap uk-flex-between uk-scroll">
        <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })}  avatar={user.avatar} />
        <SidebarComponent clearToken={clearToken} user={user} showSidebar={showSidebar} />
        <Carousel>
          <UserProfileDetailsComponent user={user} clickedUser={clickedUser} instrument={instruments} />
          <UserProfileActivityComponent user={user} clickedUser={clickedUser} userEvents={userEvents} />
        </Carousel>
        <FooterComponent/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    user:state.user.current,
    token:state.user.token
  }
}

export default connect(mapStateToProps, {clearToken})(UserProfile)