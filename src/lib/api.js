import axios from "axios";
import Notifications, { notify } from "react-notify-toast";
import { networkInterfaces } from "os";

const url = "https://gigapi.herokuapp.com/";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: url,
      created:false
    });
  }

  setHeaders() {
    this.api.defaults.headers = {
      "Content-Type": "application/json"
    };
  }

  setToken(userData) {
    this.setHeaders();
    this.api.post("users/login", userData).then(res => console.log);
  }

  createUser(params){
    this.setHeaders();
    return this.api.post('users/create', params);
  }

  getInstruments(){
    this.setHeaders();
    return this.api.get('/instruments');
  }
}

//   createUser(userData) {
//     let created = this.state;
//     this.setHeaders();
//     this.api.post("users/create", userData)
//     .then(res => {created = true; console.log(created)})
//     .catch((error) =>{
//       if(error.res)
//       {
//         notify.show(error.response,'error');
//       }else if(error.request)
//       {
//         notify.show(error.request,'error');
//       }
//     });
//   }
// }

export default Api;