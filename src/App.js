import React from "react";
import { Switch, Route } from 'react-router-dom';
import Notifications from "react-notify-toast";
import Login from "./containers/Login";
import Register from "./containers/Register";
import UserProfile from "./containers/UserProfile";
import Dashboard from './containers/Dashboard';
import EditProfile from './containers/EditProfile'
import Messenger from './containers/Messenger';
import Conversation from './containers/Conversation';
import EventDetails from './containers/EventDetails';

const App = () => {
  return(
    <div>
      <Notifications />
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/profile" component={UserProfile}></Route>
            <Route path="/edit" component={EditProfile}></Route>
            <Route path="/messenger" component={Messenger}></Route>
            <Route path="/conversation/:id" component={Conversation}></Route>
            <Route path="/event/:id" component={EventDetails}></Route>
        </Switch>
    </div>
  )
}

export default App;
