import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import LogInForm from './container/LogInForm/index'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App-header">
          Log in page
        </h1>{" "}
       <i class="fa fa-user"></i>
        <div className ="Log-in-form">
       <input type ="text" placeholder="User Name"/>
       <br/>
       <input type ="text" placeholder="password"/>
       </div>
       <button>Log in</button>
          </div>
      
    );
  }
}
export default App;
