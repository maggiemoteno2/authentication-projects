import {LOG_IN } from './../actionsTypes'
const initialState = {
  user: [],
};

export default function userDetails( state = initialState , action) {
  switch (action.type) {
      case  LOG_IN: {
          return {
              ...state,
              user: [...state.userDetails, action.payload],
            };
        }
        default: {
            return state;
        }
  }
}