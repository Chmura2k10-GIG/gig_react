import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { clearToken } from '../actions/user';
import NavbarComponent from '../components/NavbarComponent';
import DashboardSliderComponent from '../components/DashboardSliderComponent';
import DashboardEventComponent from '../components/DashboardEventComponent';
import DashboardOptionsComponent from '../components/DashboardOptionsComponent';
import SidebarComponent from '../components/SidebarComponent';
import FooterComponent from '../components/FooterComponent';
import api from "../api";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nearUsers:null,
      showUsers:true,
      showSidebar:false
    };
  }

  componentDidMount(){
    const { user } = this.props;
    api.getUserListByCities(user.current.city)
      .then(res => this.setState({ nearUsers: res.data }))
  }

  render() {
    const { user, clearToken } = this.props;
    const { nearUsers, showUsers, showSidebar } = this.state;
    if(user.token.length === 0){
      return(
        <Redirect to="/"/>
      )
    }
    return (
      <div style={nearUsers && nearUsers.length === 0 ? {"height":"100vh"} : null } className="uk-flex uk-flex-between uk-flex-column uk-flex-wrap">
        <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })} avatar={user.current.avatar}/>
        <div style={{"marginTop":"70px", "minHeight":"370px"}} className="uk-flex uk-flex-center uk-flex-wrap">
          <DashboardOptionsComponent 
            showUsers={() => this.setState({ showUsers: true })}
            showEvents={() => this.setState({ showUsers: false })}
          />
          <SidebarComponent clearToken={clearToken} user={user.current} showSidebar={showSidebar} />
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

export default connect(mapStateToProps, { clearToken })(Dashboard)
