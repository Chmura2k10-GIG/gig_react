import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileActivityComponent = props => {
  const { user, clickedUser, userEvents } = props;
  const currentUser = clickedUser || user;
  return (
    <div style={{ "marginTop": "60px" }} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">    
      <h3 className="uk-text-bold text--orange uk-text-uppercase uk-margin-medium-top">Wydarzenia: </h3>
      {userEvents.map((event, key) => {
        return(
          <Link className="uk-flex uk-flex-center" to={{ pathname: `/event/${event.id}`, event: event }}>
            <p key={key} className="text--orange">{event.name}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default UserProfileActivityComponent;