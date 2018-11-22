const initialState = {
    token:'',
    current:{},
    userInstruments:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
          ...state,
          current:action.payload
      }
    case "SET_USER_INSTRUMENT":
      return {
          ...state,
          userInstruments:action.payload
      }
    case "SET_TOKEN":
      return {
          ...state,
          token:action.payload
      }
    case "CLEAR_TOKEN":
      return initialState;
    default:
      return state;
  }
}
