import React, { Component } from "react";
import { Route, Switch, Router, NavLink } from "react-router-dom";
import LoggedInMessage from './../container/LoggedInMessage'
import LogInForm from './../container/LogInForm/index'
import history from './../history/index'
import Dashboard from './../container/Dashboard/dashboard'
import Register from './../container/Register/registerForm'
export const createRoutes = () => {
  return (
    <Router history={history}>
     
      <Route
        path="/"
        exact
        strict
        render={(props) => <LoggedInMessage {...props} />}
      />
        <Route
        path="/login"
        exact
        strict
        render={(props) => <LogInForm {...props} />}
      />
      <Route
          exact
          path="/dashboard"
          render={props => <Dashboard{...props} />}
        />
         <Route
          exact
          path="/register"
          render={props => <Register{...props} />}
        />


    </Router>
  );
};
