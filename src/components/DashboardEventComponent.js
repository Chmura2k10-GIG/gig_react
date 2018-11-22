import EventComponent from '../components/EventComponent';
import React, { Component } from "react";
import api from '../api';

class DashboardEventComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      isCreateEvent:false,
      eventsList:[]
    }
  }
  componentDidMount() {
    api.getEvents()
      .then( res => this.setState({ eventsList: res.data }))
  }


  render(){
    const { eventsList } = this.state;
    console.log(this.state)
    return(
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
        {eventsList.map((event, key) => {
          return(
            <EventComponent event={event} key={key} />
          )
        })}
      </div>
    )
  }

}

export default DashboardEventComponent;