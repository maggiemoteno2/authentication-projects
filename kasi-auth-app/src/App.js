import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import LogInForm from './container/LogInForm/index'
import { Route, Switch,NavLink } from 'react-router-dom';
import LoggedInMessage from './container/LoggedInMessage'

class App extends Component {
  render() {
    return (
      <div>
        
     <LogInForm/>
     
          </div>
      
    );
  }
}
export default App;
