import React, { Component } from 'react';
import Register from "./components/Register"
import Login from "./components/Login"
import Notifications from 'react-notify-toast';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isRegistered:false,
      username:''
    }
    this.setAuth= this.setAuth.bind(this);
  }

  setAuth(email){
    this.setState({ username:email, isRegistered : true })
  }

  render() {
    const { isRegistered, username } = this.state;
    return (
      <div>
        <Login email2="xD"></Login>
      </div>
      // <div>
      //   <Notifications></Notifications>

      //   {isRegistered ? <Login email2={username}></Login>: <Register username={username} isRegistered={this.setAuth}></Register>  }
      // </div>
    );
  }
}

export default App;
