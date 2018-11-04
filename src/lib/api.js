import axios from "axios";
import Notifications, { notify } from "react-notify-toast";


const url = "http://localhost:3000/";

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

  setToken(userData) {
    this.setHeaders();
    return this.api.post("users/login", userData)
  }
}

export default Api;
