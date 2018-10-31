import axios from "axios";
import Notifications, { notify } from "react-notify-toast";
import { networkInterfaces } from "os";


const url = "http://localhost:8080/";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: url
    });
  }

  setHeaders() {
    this.api.defaults.headers = {
      "Content-Type": "application/json"
    };
  }

  postLogin(userData) {
    this.setHeaders();
    this.api.post("users/login", userData).then(res => console.log);
    console.log("success");
  }

  createUser(userData) {
    this.setHeaders();
    this.api.post("users", userData).then(res => notify.show)
    .catch((error) =>{
      if(error.res)
      {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        notify.show(error.response,'error');
      }else if(error.request)
      {
        console.log(error.request.data);
        console.log(error.request.status);
        console.log(error.request.headers);
        notify.show(error.request,'error');
      }
       console.log(error.config);
    });
    //notify.show("succes",'success');
  }

  // createUser2(userData)
  // {
  //   return new Promise((resolve, reject) => {
  //     axios({
  //         method: 'POST',
  //         url,
  //         headers: {'Content-Type': 'application/json'},
  //         userData
  //     }).then(({ status, data }) => {
  //         if (status === 200) {
  //             resolve(data);
  //         } else {
  //             reject(new Error('error'));
  //         }
  //     });
  //   });
  //  }
}

export default Api;