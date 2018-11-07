import axios from "axios";

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
    return this.api.post("user_token", userData);
  }

  createUser(params){
    this.setHeaders();
    return this.api.post('users/create', params);
  }

  getInstruments(){
    this.setHeaders();
    return this.api.get('/instruments');
  }

  getUserListByCities(city){
    this.setHeaders();
    return this.api.get("users?city=" + city);
  }
}

export default Api;