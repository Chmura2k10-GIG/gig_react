import React from "react";
import Login from "./containers/Login";
import Dashboard from './containers/Dashboard';
import Notifications from "react-notify-toast";
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return(
    <div>
      <Notifications />
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </div>
  )
}

export default App;
