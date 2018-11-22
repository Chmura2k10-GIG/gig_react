import axios from "axios";
import store from "../store";

// const url = "https://gigapi.herokuapp.com/";
const url = "http://localhost:3000/";

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

  updateUser(params, id){
    this.setHeaders();
    return this.api.patch(`/user/${id}`, params)
  }

  getInstruments(){
    this.setHeaders();
    return this.api.get('instruments');
  }

  getUserInstruments(id){
    this.setHeaders();
    return this.api.get(`users/${id}/instruments`)
  }

  updateUserInstruments(params,id){
    this.setHeaders();
    return this.api.patch(`users/${id}/instruments`, params)
  }

  getUserListByCities(city){
    this.setHeaders();
    return this.api.get("users?city=" + city);
  }

  getCurrentUser(){
    this.setHeaders();
    return this.api.get("users/current");
  }

  searchUser(login){
    this.setHeaders();
    return this.api.get("users/search?login=" + login);
  }
}

export default Api;