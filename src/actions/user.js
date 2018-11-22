import api from "../api";

export function setUser(params){
  return dispatch => {
    return api.setToken(params)
      .then(res => {
        dispatch(setToken(res.data["jwt"]))
      })
      .then(() => {
        api.getCurrentUser()
        .then(res => {
          dispatch(setCurrentUser(res.data))
        })
      })
  }
}

export function updateUser(params, id){
  return dispatch => {
    return api.updateUser(params, id)
    .then( res => dispatch(setCurrentUser(res.data)))
  }
}

export function updateUserInstruments(params, id){
  return dispatch => {
    return api.updateUserInstruments(params, id)
      .then( res => dispatch(setUserInstruments(res.data)))
  }
}

export function setCurrentUser(params){
  return {
    type:"SET_CURRENT_USER",
    payload:params
  }
}

export function setUserInstruments(params){
  return {
    type:"SET_USER_INSTRUMENT",
    payload:params
  }
}

export function setToken(params){
  return{
    type:"SET_TOKEN",
    payload:params
  }
}

export function clearToken(){
  return {
    type:"CLEAR_TOKEN",
  }

}