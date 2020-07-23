import React, { Component } from 'react';
import {NavLink, Redirect } from 'react-router-dom';
import LoggedInMessage from './../LoggedInMessage';
import { connect } from "react-redux";
import history from './../../history/index'
import {logIn} from './../../redux/logInForm/actions'

class logInForm extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      password:"",
      email:""

    }
  }

  userLoggedInInformation =(firstName,password,email)=>{

      return this.props.logIn(firstName,password,email) 
    
  }
 
  change=()=>{
   history.push("/logIn") 
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
   
  };


  render() {
    const { firstName, password,email} = this.state;
    return (
      <div>  <h1>
      Log in page
    </h1>{" "}
    <div className="App-header">
   <i class="fa fa-user"></i>
    <div className ="Log-in-form">
   <input type ="text"name="firstName" onChange={this.handleChange} placeholder="firstName" required/>
   <br/>
   <input type ="text" name="password" onChange={this.handleChange} placeholder="password" required/>
   <br/>
   <input type ="text" name="email" onChange={this.handleChange} placeholder="email" required/>
   </div>
  

     <div >
     <button className="log-in-button" onClick={() => this.userLoggedInInformation(firstName,password,email)}>Login</button>
     </div>
   
   </div>
  
   </div>
    );
  }
};
const mapStateToProps = (state) => ({
  user: state.logInForm.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (firstName, password,email) => {
      dispatch(logIn(firstName, password,email));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(logInForm );