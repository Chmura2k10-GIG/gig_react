import api from '../api';

export function setToken(params){
  return {
    type:"SET_TOKEN",
    payload:params
  }
}