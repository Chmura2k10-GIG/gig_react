import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavigationBar from '../NavigationBar';
import api from "../api";

class User extends Component{
  render(){
    return(
      <div className="user-dashboard">
      {this.props.login} is nearby to you! City: {this.props.city}
      </div>
    )
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMyProfile: true,
      nearbyUsersWwa: [],
      nearbyUsersKato: [],
      currUser: []
    };
  }

  async fetchData() {
    api.getUserListByCities("Warszawa").then(({ data }) => {
      this.setState({
        nearbyUsersWwa: data
      })
    })
    .catch((err)=> {})

    api.getUserListByCities("Katowice").then(({ data }) => {
      this.setState({
        nearbyUsersKato: data
      })
    })
    .catch((err)=> {})
  }

  componentDidMount(){
    api.getCurrentUser().then(res => {
      console.log(res.data)
      this.setState({
        currUser: res.data
      })
    })
    this.fetchData()
  }

  render() {
    const currUser = this.state.currUser
    console.log(currUser)
    return (
      <div className="whole-dashboard-screen">
        <NavigationBar login={currUser.login}/>
        <h1>Dashboard</h1>
        <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
          <div className="custom-general">
            <div className="detailed-dashboard-info">
              <h1>These people might be looking for you!</h1>
              <hr></hr>
              {this.state.nearbyUsersWwa.map(user => <User login={user.login} city={user.city}/>)}
            </div>
            <div className="detailed-dashboard-info">
              <h1>Artist with same music taste</h1>
              <hr></hr>
              {this.state.nearbyUsersKato.map(user => <User login={user.login} city={user.city}/>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.user)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(Dashboard)
