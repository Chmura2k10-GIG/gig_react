import axios from "axios";
import Notifications, { notify } from "react-notify-toast";


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
}

export default Api;
