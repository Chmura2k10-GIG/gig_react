import React from 'react'
import avatar from ".././assets/images/User_Avatar2.png";

const UserProfileDetailsComponent = props => {
  const { user } = props;
  console.log(props)
  return(
    <div style={{ "marginTop": "60px" }} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
      <img src={user.avatar || avatar} alt="user-avatar" className="uk-margin-medium-top avatar avatar--rounded avatar--large" />
      <div style={{ "padding": "0 25px" }} className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1">
        <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center">{user.login}</h3>
        <hr />
        <span className="uk-display-block text--orange uk-margin-small-top">Imię: {user.firstname}</span>
        <span className="uk-display-block text--orange uk-margin-small-top">Nazwisko: {user.lastname}</span>
        <span className="uk-display-block text--orange uk-margin-small-top">Miasto: {user.lastname}</span>
        <span className="uk-display-block text--orange uk-margin-small-top uk-margin-bottom">Wiek: {user.lastname}</span>
        <hr />
        <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center">O mnie:</h3>
        <span className="uk-display-block text--orange uk-margin-small-top">TU BEDZIE OPISfsdfsdfsd</span>
        <span className="uk-display-block text--orange uk-margin-small-top">TU BEDZIE OPISfsdfsdfsd</span>
      </div>
    </div>
  )
}

export default UserProfileDetailsComponent;