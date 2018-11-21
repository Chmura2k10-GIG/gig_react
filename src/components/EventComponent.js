import React from 'react';

const EventComponent = props => {
  const { isEdited } = props;

  if(!isEdited)
  {
    return(
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
        <div style={{ "padding": "0 25px"}} className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1 custom-box">
          <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center custom-title">Nazwa Wydarzenia</h3>
          <span className="uk-display-block text--orange uk-text-center uk-margin-bottom">KTO STWORZYL</span>
          <span className="uk-display-block text--orange uk-text-center uk-margin-bottom">LOKALIZACJA</span>
          <hr />
          <div className="text--orange uk-margin-small-top uk-text-center custom-text-box">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.</div>
          <hr />
          <div className="uk-flex uk-flex-column uk-flex-wrap">
              <span className="uk-display-block text--orange uk-margin-small-top">data rozpoczecia: DATA </span>
              <span className="uk-display-block text--orange uk-margin-small-top">data zakonczenia: DATA </span>
          </div>
          <button className="custom-button uk-margin-top">Lista uczestników</button>
          <button className="custom-button uk-margin-top uk-margin-bottom">Weź udział</button>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
        <div style={{ "padding": "0 25px"}} className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1 custom-box">
          <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center custom-title">Tworzenie wydarzenia</h3>
          <hr />
          <form>
            <fieldset class="uk-fieldset">
            <div class="uk-margin uk-display-block">
              <input class="uk-input uk-margin-small-top custom-input--event" type="text" placeholder="Tytuł"/>
              <input class="uk-input uk-margin-small-top custom-input--event" type="text" placeholder="Lokalizacja"/>
            </div>
            <hr />
            <div class="uk-margin uk-display-block">
              <textarea class="uk-textarea custom-input--event" rows="5" placeholder="Opis"></textarea>
            </div>
            <hr />
            <div class="uk-margin uk-display-block">
              <input class="uk-input custom-input--event" type="text" placeholder="Data Zakonczenia"/>
            </div>
            <hr />
            <div class="uk-text-center uk-grid-small custom-grid uk-margin-bottom">
            <div class="uk-width-1-2@s"><button className="custom-button uk-margin-top">Anuluj</button></div>
            <div class="uk-width-1-2@s"><button className="custom-button uk-margin-top">Zapisz</button></div>
            </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default EventComponent;