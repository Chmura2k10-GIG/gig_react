import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent';
import SliderComponent from '../components/SliderComponent';
import api from "../api";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMyProfile: true,
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
    // api.getCurrentUser().then(res => {
    //   this.setState({
    //     currUser: res.data
    //   })
    // })
    // this.fetchData()
  }

  render() {
    const { currUser } = this.state;
    return (
      <div>
        <NavbarComponent login="test"/>
        <div style={{"marginTop":"60px"}} className="uk-flex uk-flex-center uk-flex-wrap">
          <SliderComponent />
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
