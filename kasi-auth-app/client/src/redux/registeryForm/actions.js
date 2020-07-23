import {REGISTER } from './../actionsTypes'
import axios from "axios"
import jwt from 'jwt-decode'
import * as jwt_decode from 'jwt-decode';
import history from './../../history'
export const register=(firstName,password,email) =>{
    return async dispatch => {
        try {
    
          const { data } = await axios.post("http://localhost:3001/register", {
            firstName,
              password,
              email
            });
            const token = data.token;
            const user = jwt_decode(token); 
            localStorage.setItem('token', token);
            history.push('/logIn')
   
          dispatch({
            type: REGISTER,
            payload:{...data,token,user}
          });
        } catch (e) {
          console.log(e);
        }
      };
}
