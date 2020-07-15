import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default class LoggedInMessage extends Component {
  render() {
    return (
      <div className="land-in-page">
       <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
 <a class="nav-link" href="http://localhost:3000/login"><button class="btn btn-lg btn-outline-success" type="button">Log in</button></a>
 <a class="nav-link" href="http://localhost:3000/dashboard"><button class="btn btn-lg btn-outline-secondary" type="button">Dashboard</button></a>
  </form>
</nav>
      </div>
    );
  }
}
