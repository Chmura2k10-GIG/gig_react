import React, { Component } from "react";
import api from "../api";
import { connect } from 'react-redux';
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
      showSidebar:false
    };
  }

  componentDidMount(){
    const { user } = this.props
    api.getUserInstruments(user.id)
      .then(res => this.setState({ instruments: res.data }))
  }

  render() {
    const { showSidebar } = this.state;
    const { user } = this.props;
    const { clickedUser } = this.props.location;
    return (
      <div className="uk-flex uk-flex-column uk-flex-wrap uk-flex-between">
        <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })} avatar={user.avatar} />
        <SidebarComponent clearToken={clearToken} user={user} showSidebar={showSidebar} />
        <Carousel>
          <UserProfileDetailsComponent user={user} clickedUser={clickedUser} />
          <UserProfileActivityComponent />
        </Carousel>
        <FooterComponent/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    user:state.user.current
  }
}

export default connect(mapStateToProps, {})(UserProfile)