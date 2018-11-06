import React from "react";
import Login from "./containers/Login";
import Register from "./containers/Register";
import UserProfile from "./containers/UserProfile";
import Dashboard from './containers/Dashboard';
import Notifications from "react-notify-toast";
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const App = () => {
  return(
    <div>
      <Notifications />
      <Switch>
        {/* <Route exact path="/" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route> */}
        <Route exact path="/" component={Register}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Dashboard" component={Dashboard}></Route>


      </Switch>
    </div>
  )
}

export default App;
