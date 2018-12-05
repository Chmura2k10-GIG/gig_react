import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';

class DashboardEventComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      eventsList:[],
      eventUsers:[],
      activeEventsId:[],
      displayForm:false,
      form:{
        name:'',
        localization:'',
        description:'',
        date:''
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { user } = this.props;
    let activeEvents = []

    api.getEvents()
      .then( res => this.setState({ eventsList: res.data }))
      .then(() => {
        api.getUserEvents(user.current.id)
          .then(res => res.data.map( event => activeEvents.push(event.id) ))
          .then(() => { this.setState({ activeEventsId: activeEvents })})
      })
  }

  onSubmit(e){
    e.preventDefault();
    const { name, localization, description, date } = this.state.form;
    const { user } = this.props;
    let activeEvents = []
    const params = {
      event:{
        name:name,
        localization:localization,
        description:description,
        date:date
      }
    }

    api.createEvent(user.current.id,params)
      .then(() => {
        api.getEvents()
          .then(res => this.setState({ eventsList: res.data }))
          .then(() => {
            api.getUserEvents(user.current.id)
              .then(res => res.data.map(event => activeEvents.push(event.id)))
              .then(() => { this.setState({ activeEventsId: activeEvents }) })
              .then(() => this.setState({ displayForm: false }))
          })
      })
  }

  onChange(e){
    this.setState({ form: { ...this.state.form, [e.target.name]:e.target.value }})
  }

  addUserToEvent(eventId){
    const { user } = this.props;
    const { eventUsers, activeEventsId } = this.state;
    let activeEvents = activeEventsId;
    let eventUsersArr = eventUsers;

    api.addUserToEvent(user.current.id, eventId)
      .then( res => {
        activeEvents.push(eventId);
        eventUsersArr.push(res.data);
        this.setState({ activeEventsId: activeEvents, eventUsers:eventUsersArr})
      })
  }
  
  removeUserFromEvent(eventId){
    const { user } = this.props;
    const { eventUsers, activeEventsId } = this.state;
    let activeEvents = activeEventsId;
    let eventUsersArr = eventUsers;
    api.removeUserFromEvent(user.current.id, eventId)
      .then(() => {
        activeEvents = activeEvents.filter( id => id !== eventId);
        eventUsersArr = eventUsersArr.filter( id => id !== user.current.id);
        this.setState({ activeEventsId: activeEvents, eventUsers:eventUsersArr });
      })
  }

  render(){
    const { eventsList, activeEventsId, displayForm, form } = this.state;
    if(displayForm){
      return(
        <form onSubmit={this.onSubmit} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
          <button onClick={() => this.setState({ displayForm: false })} className="custom-button uk-margin-top">Pokaż wydarzenia</button>
          <div className="uk-flex uk-flex-center uk-flex-wrap">
            <div className="uk-inline uk-margin-top">
              <input className="uk-input" type="text" placeholder="Nazwa wydarzenia" name="name" value={form.name} onChange={e => this.onChange(e)} />
            </div>
            <div className="uk-inline uk-margin-top">
              <input className="uk-input" type="text" placeholder="Lokalizacja" name="localization" value={form.localization} onChange={e => this.onChange(e)} />
            </div>
            <div className="uk-inline uk-margin-top">
              <input className="uk-input" type="text" placeholder="Data" name="date" value={form.date} onChange={e => this.onChange(e)} />
            </div>
            <div className="uk-inline uk-margin-top">
              <textarea style={{ "minHeight": "150px" }} className="uk-input" type="text" placeholder="Opis" name="description" value={form.description} onChange={e => this.onChange(e)} />
            </div>
          </div>
          <div className="uk-flex uk-flex-wrap uk-flex-center uk-margin-bottom uk-margin-top">
            <button className="custom-button" type="submit">Stwórz wydarzenie</button>
          </div>
        </form>
      )
    }
    return(
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
        <button onClick={() => this.setState({ displayForm: true })} className="custom-button uk-margin-top">Stwórz wydarzenie</button>
        {eventsList.map((event, key) => {
          return(
            <div key={key} className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
              <div style={{ "padding": "0 25px" }} className="uk-flex uk-flex-column uk-flex-wrap uk-width-1-1 custom-box">
                <h3 className="text--orange uk-text-bold uk-margin-small-top uk-text-center custom-title">{event.name}</h3>
                <span className="uk-display-block text--orange uk-text-center">{event.localization}</span>
                <span className="uk-display-block text--orange uk-text-center uk-margin-small-top uk-margin-bottom">{event.date}</span>
                <hr />
                <Link className="uk-flex uk-flex-center" to={{ pathname: `/event/${event.id}`, event: event }}>
                  <button className="custom-button uk-margin-top">Szczegóły</button>
                </Link>
                {activeEventsId.includes(event.id) ?
                  <button onClick={() => this.removeUserFromEvent(event.id)}className="custom-button uk-margin-top uk-margin-bottom">
                    Bierzesz udział
                  </button>
                  :
                  <button onClick={() => this.addUserToEvent(event.id)} className="custom-button uk-margin-top uk-margin-bottom">
                      Weź udział
                  </button>
                }
              </div>
            </div>
          )
        })}
      </div>
    )
  }

}

export default DashboardEventComponent;