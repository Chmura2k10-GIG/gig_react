import { SIGN_IN } from "../actions/user";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
