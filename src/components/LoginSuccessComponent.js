import React from 'react';

const LoginSuccessComponent = props => {
  return(
    <div className="uk-container">
      <div className="uk-margin">
        <span>Login succesful!</span>
        <button className="uk-button uk-button-default" onClick={props.redirectToLogin}>Go to Login screen</button>
      </div>
    </div>
  )
}

export default LoginSuccessComponent;