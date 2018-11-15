import React from 'react';
import usersLogo from '../assets/images/users.svg';
import eventLogo from '../assets/images/event.svg';

const DashboardOptionsComponent = props => {
  return(
    <div className="uk-flex bg--black uk-width-1-1 uk-flex-wrap">
      <div onClick={props.showUsers} style={{ "maxHeight": "60px" }} className="uk-width-1-2 uk-flex uk-flex-center box-border-right--small">
        <img className="icon--medium margin-small-vertical" src={usersLogo} alt="users-logo" />
      </div>
      <div onClick={props.showEvents} className="uk-width-1-2 uk-flex uk-flex-center">
        <img className="icon--medium margin-small-vertical" src={eventLogo} alt="event-logo" />
      </div>
    </div>
  )
}

export default DashboardOptionsComponent