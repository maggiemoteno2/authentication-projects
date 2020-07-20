import {LOG_IN} from "./../actionTypes";
const initialState = {
  userDetails:[],
};

export default function details( state = initialState , action) {
  switch (action.type) {
      case LOG_IN :{
          return {
              ...state,
              userDetails:[...state.userDetails, action.payload],
              
            };
        }
        default: {
            return state;
        }
  }
}