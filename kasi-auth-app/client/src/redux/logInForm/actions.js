import {LOG_IN } from './../actionsTypes'
import axios from "axios"
import jwt from 'jwt-decode'
import * as jwt_decode from 'jwt-decode';
import history from './../../history'

export const logIn=(firstName,password,email) =>{
    return async dispatch => {
        try {
    
          const {data}  = await axios.post("http://localhost:3001/logIn", {
            firstName,
              password,
              email,
            });
            const token = data.token;
            const user = jwt_decode(token); 
            localStorage.setItem('token', token);
            history.push('/dashboard')
          dispatch({
            type: LOG_IN,
            payload:[...data,token,user] 
          });
        } catch (e) {
          console.log(e);
         
        }
      };
      
}