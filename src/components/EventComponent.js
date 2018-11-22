import React from 'react';

const EventComponent = props => {
  const { event } = props;
    return(
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
        <div style={{ "padding": "0 25px"}} className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1 custom-box">
          <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center custom-title">{event.name}</h3>
          <span className="uk-display-block text--orange uk-text-center uk-margin-bottom">{event.localization}</span>
          <hr />
          <div className="uk-flex uk-flex-column uk-flex-wrap">
              <span className="uk-display-block text--orange uk-margin-small-top">{event.date}</span>
          </div>
          <button className="custom-button uk-margin-top">Lista uczestników</button>
          <button className="custom-button uk-margin-top uk-margin-bottom">Weź udział</button>
        </div>
      </div>
    )
}

export default EventComponent;