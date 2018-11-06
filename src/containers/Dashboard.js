import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavigationBar from '../NavigatorBar';
import avatar from '.././assets/images/User_Avatar2.png';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMyProfile: true,
      isEditing: false,
      sideBarOpen: false
    };
  }


  render() {
    console.log(this.props)
    return (
      <div className="whole-dashboard-screen">
        <NavigationBar />
        <h1>Dashboard</h1>
        <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
          <div className="custom-general">
            <div className="detailed-dashboard-info">
              <h1>These people might be looking for you!</h1>
              <hr></hr>
            </div>
            <div className="detailed-dashboard-info">
              <h1>Artist with same music taste</h1>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(Dashboard)
