import {LOG_IN } from './../actionsTypes'
import axios from "axios"

export const register=(firstName,password) =>{
    return async dispatch => {
        try {
    
          const { data } = await axios.post("http://localhost:3001/register", {
            firstName,
              password
            });
   
          dispatch({
            type: LOG_IN,
            payload:{ ...data} 
          });
        } catch (e) {
          console.log(e);
        }
      };
}