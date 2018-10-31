import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';

import Register from "./components/Register";
import Login from "./components/Login";
import Notifications from "react-notify-toast";
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      username: ""
    };
    this.setAuth = this.setAuth.bind(this);
  }

  setAuth(email) {
    this.setState({ username: email, isRegistered: true });
  }

  render() {
    const { isRegistered, username } = this.state;
    return (
      <Provider store={store}>
        <div>
          <Notifications />
          <Login />
        </div>
      </Provider>
      // <div>
      //   <Notifications></Notifications>

      //   {isRegistered ? <Login></Login>: <Register username={username} isRegistered={this.setAuth}></Register>  }
      // </div>
    );
  }
}

export default App;
