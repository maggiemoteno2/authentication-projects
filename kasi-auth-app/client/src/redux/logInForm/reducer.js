import {LOG_IN } from './../actionsTypes'
const initialState = {
  userDetails: [],
};

export default function userDetails( state = initialState , action) {
  switch (action.type) {
      case  LOG_IN: {
          return {
              ...state,
              userDetails: [...state.userDetails, action.payload],
            };
        }
        default: {
            return state;
        }
  }
}