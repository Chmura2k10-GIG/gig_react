import axios from "axios";
import store from "../store";

const url = "https://gigapi.herokuapp.com/";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: url,
      created:false
    });
  }

  setHeaders() {
    this.api.defaults.headers.common['authorization'] = `Bearer ${store.getState().user.token}`;
  }

  setToken(userData) {
    this.setHeaders();
    return this.api.post("user_token", userData);
  }

  createUser(params){
    this.setHeaders();
    return this.api.post('users/create', params);
  }

  getInstruments(){
    this.setHeaders();
    return this.api.get('instruments');
  }

  getUserListByCities(city){
    this.setHeaders();
    return this.api.get("users?city=" + city);
  }

  getCurrentUser(){
    this.setHeaders();
    return this.api.get("users/current");
  }
}

export default Api;