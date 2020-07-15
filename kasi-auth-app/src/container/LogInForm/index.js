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
      <div>  <h1 className="App-header">
      Log in page
    </h1>{" "}
   <i class="fa fa-user"></i>
    <div className ="Log-in-form">
   <input type ="text" placeholder="User Name"/>
   <br/>
   <input type ="text" placeholder="password"/>
   </div>
  
     <NavLink  to={<LoggedInMessage/>}> 
     <button onClick={() => this.change()}>Log in</button>
     </NavLink>
  
   </div>
    );
  }
}
