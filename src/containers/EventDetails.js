import React, { Component } from 'react';
import SidebarComponent from '../components/SidebarComponent';
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { clearToken } from '../actions/user';
import api from '../api';

class EventDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      showSidebar: false,
      eventUsers:[]
    };
  }

  componentDidMount(){
    const { location } = this.props;
      api.getEventUsers(location.event.id)
        .then( res => this.setState({ eventUsers: res.data }))
  }

  render(){
    const { showSidebar, eventUsers } = this.state;
    const { user, location } = this.props;
    if (user.token.length === 0) {
      return (
        <Redirect to="/" />
      )
    }

    return(
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
        <NavbarComponent showSidebar={() => this.setState({ showSidebar: !showSidebar })} avatar={user.current.avatar} />
        <SidebarComponent clearToken={clearToken} user={user.current} showSidebar={showSidebar} />
        <div style={{ "marginTop": "100px" }} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
          <div style={{ "padding": "0 25px" }} className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1">
            <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center">{location.event.name}</h3>
            <hr />
            <span className="uk-display-block text--orange uk-margin-small-top">Data: {location.event.date}</span>
            <span className="uk-display-block text--orange uk-margin-small-top">Lokalizacja: {location.event.localization}</span>
            <span className="uk-display-block text--orange uk-margin-small-top">Biorą udział:</span>
            {
              eventUsers.map((user, key) => {
                return(
                  <Link key={key} to={{ pathname: "/profile", clickedUser: user }}>
                    <p className="text--orange">{user.login}</p>
                  </Link>
                )
              })
            }
            <h4 className="text--orange uk-margin-small-top">
              {location.event.description}
            </h4>
          </div>
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

export default connect(mapStateToProps, { clearToken })(EventDetails)