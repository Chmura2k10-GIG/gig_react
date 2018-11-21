import React from 'react'
import avatar from ".././assets/images/User_Avatar2.png";
import placeholder from '../assets/images/placeholder-user.png';

const BandProfileDetailsComponent = props => {
 // const { user } = props;
 // const { clickedUser } = props;
 // const currentUser = clickedUser || user;
  return(
    <div style={{ "marginTop": "60px" }} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
    {/* {
      //currentUser.avatar  ? <img src={currentUser.avatar || avatar} alt="user-avatar" className="uk-margin-medium-top avatar avatar--rounded avatar--large" />:
    } */}
            <img src={placeholder} alt="band-placeholder" className="uk-margin-medium-top avatar avatar--rounded avatar--large" />

      <div style={{ "padding": "0 25px" }} className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1">
        <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center">Nazwa Zespołu</h3>
        <hr />
        <span className="uk-display-block text--orange uk-margin-small-top">Lider Zespołu</span>
        <span className="uk-display-block text--orange uk-margin-small-top">Miasto</span>
        <span className="uk-display-block text--orange uk-margin-small-top uk-margin-bottom">Czas działalności</span>
        <hr />
        <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center">O zespole:</h3>
        <span className="uk-display-block text--orange uk-margin-small-top">TU BEDZIE OPISfsdfsdfsd</span>
        <span className="uk-display-block text--orange uk-margin-small-top">TU BEDZIE OPISfsdfsdfsd</span>
      </div>
    </div>
  )
}

export default BandProfileDetailsComponent;