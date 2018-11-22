import React from 'react';

const SuccessInfoComponent = props => {
  return(
    <div className="uk-container">
      <div style={{"marginTop":"90px"}} className="uk-flex uk-flex-center uk-flex-column uk-flex-wrap">
        <div className="uk-text-bold uk-text-center">{props.message}</div>
        <button className="custom-button uk-margin-top" onClick={props.handler}>{props.buttonText}</button>
      </div>
    </div>
  )
}

export default SuccessInfoComponent;