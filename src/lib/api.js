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

  getUsers(){
    this.setHeaders();
    return this.api.get('/users')
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

  getEvents(){
    this.setHeaders();
    return this.api.get("events");
  }

  searchUser(login){
    this.setHeaders();
    return this.api.get("users/search?login=" + login);
  }

  addUserToEvent(userId, eventId){
    this.setHeaders();
    return this.api.post(`/events/${eventId}/user/${userId}`)
  }

  removeUserFromEvent(userId, eventId){
    this.setHeaders();
    return this.api.delete(`/events/${eventId}/user/${userId}`)
  }

  getUserEvents(userId){
    this.setHeaders();
    return this.api.get(`/user/${userId}/events`)
  }

  getEventUsers(eventId){
    this.setHeaders();
    return this.api.get(`/events/${eventId}/users`)
  }

  createEvent(userId,params){
    this.setHeaders();
    return this.api.post(`/events/user/${userId}`, params)
  }

  getUserConversations(){
    this.setHeaders();
    return this.api.get('/conversations')
  }

  createConversation(params){
    this.setHeaders();
    return this.api.post('/conversations', params)
  }

  showConversation(id){
    this.setHeaders();
    return this.api.get(`/conversations/${id}`)
  }
}

export default Api;