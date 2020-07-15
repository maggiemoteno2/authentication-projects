import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import LoggedInMessage from './../LoggedInMessage'
import history from './../../history/index'

export default class index extends Component {

  change=()=>{
   history.push("/dashboard") 
  }

  render() {
    return (
      <div>  <h1>
      Log in page
    </h1>{" "}
    <div className="App-header">
   <i class="fa fa-user"></i>
    <div className ="Log-in-form">
   <input type ="text" placeholder="User Name" required/>
   <br/>
   <input type ="text" placeholder="password" required/>
   </div>
  
     <NavLink  to={<LoggedInMessage/>}> 
     <div >
     <button className="log-in-button" onClick={() => this.change()}>Login</button>
     </div>
     </NavLink>
   </div>
  
   </div>
    );
  }
}
