import React, { Component } from 'react';
import LoggedInMessage from './../LoggedInMessage'
import history from './../../history/index'
import { connect } from "react-redux";
import {NavLink } from 'react-router-dom';
import {register} from './../../redux/registeryForm/actions'
import userDetails from '../../redux/logInForm/reducer';
 
 class registeryForm extends Component {
     constructor(){
         super()
         this.state ={
             firstName:"",
             password:""
         }
     }

    //  userInformation =(firstName,password)=>{
        
    //  }
     change=(firstName,password)=>{
        history.push("/register") 
        this.props.register(firstName,password)
       }
     
  render() {
    return (
      <div className="App-header">
      <i class="fa fa-user"></i>
       <div className ="Log-in-form">
      <input type ="text" placeholder="User Name" required/>
      <br/>
      <input type ="text" placeholder="password" required/>

      <NavLink  to={<LoggedInMessage/>}> 
     <div >
     <button className="log-in-button" onClick={() => this.change()}>register</button>
     </div>
     </NavLink>
      </div>
       </div>

    );
  }
  
}
console.log(userDetails);
const mapStateToProps = state => ({
    
});


const mapDispatchToProps = dispatch => {
  return {
    register: (firstName,password) => {
        dispatch(register(firstName,password));
      },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(registeryForm);










 