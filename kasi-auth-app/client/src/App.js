import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import LogInForm from "./container/LogInForm/index";
import LoggedInMessage from "./container/LoggedInMessage";
import  {createRoutes} from './routes/index'

class App extends Component {
  render() {
    return (
      <div>
        {createRoutes()}
      </div>
    );
  }
}
export default App;
