import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent';
import DashboardSliderComponent from '../components/DashboardSliderComponent';
import DashboardEventComponent from '../components/DashboardEventComponent';
import DashboardOptionsComponent from '../components/DashboardOptionsComponent';
import FooterComponent from '../components/FooterComponent';
import api from "../api";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nearUsers:null,
      showUsers:true
    };
  }

  componentDidMount(){
    const { user } = this.props;
    api.getUserListByCities(user.current.city)
      .then(res => this.setState({ nearUsers: res.data }))
  }

  render() {
    const { user } = this.props;
    const { nearUsers, showUsers } = this.state;
    if(user.token === undefined){
      return(
        <Redirect to="/login"/>
      )
    }
    return (
      <div style={nearUsers && nearUsers.length === 0 ? {"height":"100vh"} : null } className="uk-flex uk-flex-between uk-flex-column uk-flex-wrap">
        <NavbarComponent avatar={user.current.avatar}/>
        <div style={{"marginTop":"60px", "minHeight":"370px"}} className="uk-flex uk-flex-center uk-flex-wrap">
          <DashboardOptionsComponent 
            showUsers={() => this.setState({ showUsers: true })}
            showEvents={() => this.setState({ showUsers: false })}
          />
          {showUsers?
              <DashboardSliderComponent users={nearUsers} />
            : 
            <DashboardEventComponent />
          }
        </div>
        <FooterComponent />
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
