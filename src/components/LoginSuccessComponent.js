import React from 'react';

const LoginSuccessComponent = props => {
  return(
    <div className="uk-container">
      <div className="uk-margin-top uk-flex uk-flex-center uk-flex-column uk-flex-wrap">
        <div className="uk-text-bold uk-text-center">Konto utworzone pomyślnie</div>
        <button className="custom-button uk-margin-top" onClick={props.redirectToLogin}>Zaloguj się</button>
      </div>
    </div>
  )
}

export default LoginSuccessComponent;