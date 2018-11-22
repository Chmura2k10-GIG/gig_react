import React from 'react'

const UserProfileActivityComponent = props => {
  const { user, clickedUser } = props;
  const currentUser = clickedUser || user;
  return (
    <div style={{ "marginTop": "60px" }} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">    
      <h3 className="uk-text-bold text--orange uk-text-uppercase uk-margin-medium-top">Wydarzenia: </h3>
    </div>
  )
}

export default UserProfileActivityComponent;