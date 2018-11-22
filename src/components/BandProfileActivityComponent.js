import React from 'react'
import placeholder from '../assets/images/placeholder-user.png';
import { Link } from 'react-router-dom';

const BandProfileActivityComponent = props => {

  let number = [];
  number.push(<div>BAND MEMBER</div>);
  number.push(<div>BAND MEMBER</div>);
  number.push(<div>BAND MEMBER</div>);
  number.push(<div>BAND MEMBER</div>);

  return (
    <div style={{ "marginTop": "60px" }} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
      <h3 className="uk-text-bold text--orange uk-text-uppercase uk-margin-medium-top">Członkowie Zespołu: </h3>
      {number.map(number => {
        return(
          <div>{number}</div>
          // <Link to="/profile" key={key} user={user} >
          // {
          // user.avatar ?  <img key={key} src={user.avatar} alt="user-avatar" />  :<img key={key} src={placeholder}
          //  alt="user-placeholder" />
          // }
          // </Link>
        )
      })}
      <hr />      
      <h3 className="uk-text-bold text--orange uk-text-uppercase uk-margin-medium-top">Wydarzenia: </h3>
      <hr />      
      <h3 className="uk-text-bold text--orange uk-text-uppercase uk-margin-medium-top">Nagrania: </h3>
    </div>
  )
}

export default BandProfileActivityComponent;