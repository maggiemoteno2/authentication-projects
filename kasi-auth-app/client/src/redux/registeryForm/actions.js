import {REGISTER } from './../actionsTypes'
import axios from "axios"
import jwt from 'jwt-decode'
import * as jwt_decode from 'jwt-decode';

export const register=(firstName,password) =>{
    return async dispatch => {
        try {
    
          const { data } = await axios.post("http://localhost:3001/register", {
            firstName,
              password
            });
            const token = data.token;
            const user = jwt_decode(token); 
            localStorage.setItem('token', token);
   
          dispatch({
            type: REGISTER,
            payload:{...data,token,user}
          });
        } catch (e) {
          console.log(e);
        }
      };
}
