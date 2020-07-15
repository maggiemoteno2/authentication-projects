import React, { Component } from "react";
import { Route, Switch, Router, NavLink } from "react-router-dom";
import LoggedInMessage from './../container/LoggedInMessage'
import LogInForm from './../container/LogInForm/index'
import history from './../history/index'
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
    </Router>
  );
};
