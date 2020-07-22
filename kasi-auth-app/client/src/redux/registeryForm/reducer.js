import {REGISTER} from './../actionsTypes'
const initialState = {
  userDetails:[],
};

export default function details( state = initialState , action) {
  switch (action.type) {
      case REGISTER :{
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