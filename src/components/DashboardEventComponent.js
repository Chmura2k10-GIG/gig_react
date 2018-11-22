import EventComponent from '../components/EventComponent';
import React, { Component } from "react";


class DashboardEventComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      isCreateEvent:false,
      eventsList:[]
    }
  }

  showEvents = () =>{
    let {eventsList} = this.state;
      for(let i = 0;i<5;i++)
      {
        eventsList.push(<div><EventComponent isEdited={false}/><hr /></div>);
      }
      return eventsList
  }

  createEvent=()=>{
    this.setState(prevState => ({
      isCreateEvent: !prevState.isCreateEvent
    }));
  }

  render(){
    const {isCreateEvent} = this.state;
    return(
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-wrap">
          {!isCreateEvent?
          <button className="custom-button uk-margin-top uk-margin-bottom" onClick={this.createEvent}>Utwórz wydarzenie</button>:
          ""}
          {isCreateEvent?<EventComponent isEdited={isCreateEvent}/>:""}
          {this.showEvents()}
      </div>
    )
  }

}

export default DashboardEventComponent;