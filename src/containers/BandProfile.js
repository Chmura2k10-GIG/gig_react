import React, { Component } from "react";
import api from "../api";
import { connect } from 'react-redux';
import { clearToken } from '../actions/user';
import Carousel from 'nuka-carousel';
import NavbarComponent from '../components/NavbarComponent';
import BandProfileDetailsComponent from '../components/BandProfileDetailsComponent';
import BandProfileActivityComponent from '../components/BandProfileActivityComponent';
import SidebarComponent from '../components/SidebarComponent';
import FooterComponent from '../components/FooterComponent';

class BandProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // bandMembers: [],
      showSidebar:false
    };
  }

  componentDidMount(){
    const { user } = this.props
    api.getUserInstruments(user.id)
      .then(res => this.setState({ bandMembers: res.data }))
  }

  render() {
    const { showSidebar } = this.state;
    const { user } = this.props;
    return (
      <div className="uk-flex uk-flex-column uk-flex-wrap uk-flex-between">
        <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })} avatar={user.avatar}  />
        <SidebarComponent showSidebar={showSidebar} user={user}  />
        <Carousel>
          <BandProfileDetailsComponent />
          <BandProfileActivityComponent />
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

export default connect(mapStateToProps, {})(BandProfile)