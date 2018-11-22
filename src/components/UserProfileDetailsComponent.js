import React from 'react'
import avatar from ".././assets/images/User_Avatar2.png";
import placeholder from '../assets/images/placeholder-user.png';

const UserProfileDetailsComponent = props => {
  const { user, clickedUser, instrument } = props;
  const currentUser = clickedUser || user;
  return(
    <div style={{ "marginTop": "60px" }} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
      <img src={currentUser.avatar || avatar} alt="user-avatar" className="uk-margin-medium-top avatar avatar--rounded avatar--large" />
      <div style={{ "padding": "0 25px" }} className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1">
        <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center">{currentUser.login}</h3>
        <hr />
        <span className="uk-display-block text--orange uk-margin-small-top">Imię: {currentUser.firstname}</span>
        <span className="uk-display-block text--orange uk-margin-small-top">Nazwisko: {currentUser.lastname}</span>
        <span className="uk-display-block text--orange uk-margin-small-top">Miasto: {currentUser.city}</span>
        <span className="uk-display-block text--orange uk-margin-small-top">Wiek: {currentUser.age}</span>
        <div className="text--orange uk-margin-small-top uk-margin-bottom">Instrument: 
          {instrument[0] ?
              <span className="text--orange uk-margin-small-left">{instrument[0]["name"]}</span>
            :
            <span className="text--orange uk-margin-small-left">Brak przypisanych instrumentów</span>
          }
        </div>
        <hr />
        <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center">O mnie:</h3>
        <span className="uk-display-block text--orange">{`${currentUser.description}`||`Brak opisu...`}</span>
      </div>
    </div>
  )
}

export default UserProfileDetailsComponent;