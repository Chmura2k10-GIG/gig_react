import React from 'react';
import avatar from "../assets/images/User_Avatar2.png";
import { Link } from 'react-router-dom';

const SidebarComponent = props => {
  const { user } = props;
  return(
    <div className={`${props.showSidebar ? 'sidebar--active' : null} uk-flex uk-flex-column uk-flex-wrap sidebar text--orange`}>
      <div className="uk-flex uk-flex-middle uk-flex-wrap uk-flex-column">
        <img className="avatar" src={user.avatar || avatar} alt="user-avatar" />
        <span className="uk-text-bold text--medium uk-margin-small-top">{user.login}</span>
        <Link className="uk-margin-top" to="/profile">
          <span className="uk-text-bold text--medium">Mój profil</span>
        </Link>
        <Link className="uk-margin-top" to="/edit">
          <span className="uk-text-bold text--medium">Edytuj profil</span>
        </Link>
        <Link className="uk-margin-top" to="/dashboard">
          <span className="uk-text-bold text--medium">Dashboard</span>
        </Link>
        <Link className="uk-margin-top" to="/bandprofile">
          <span className="uk-text-bold text--medium">Mój Zespół</span>
        </Link>
        <span onClick={props.clearToken} className="uk-text-bold text--medium uk-margin-top text--orange">Wyloguj się</span>
      </div>
    </div>
  )
}

export default SidebarComponent;