import React from "react";
import { Switch, Route } from 'react-router-dom';
import Notifications from "react-notify-toast";
import Login from "./containers/Login";
import Register from "./containers/Register";
import UserProfile from "./containers/UserProfile";
import Dashboard from './containers/Dashboard';
import BandProfile from './containers/BandProfile';

// import EventCreator from './containers/EventCreator';

const App = () => {
  return(
    <div>
      <Notifications />
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/profile" component={UserProfile}></Route>
        <Route path="/bandprofile" component={BandProfile}></Route>
        {/* <Route path="/eventcreator" component={EventCreator}></Route> */}
      </Switch>
    </div>
  )
}

export default App;
