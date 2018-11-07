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
        <Route exact path="/register" component={Register}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/userprofile" component={UserProfile}></Route>
        <Route path="/" component={Login}></Route>

      </Switch>
    </div>
  )
}

export default App;
