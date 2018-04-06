import React, { Component } from "react";
import { Route } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm";
import NavBar from "./NavBar";
import PrivilegedComponent from "./PrivilegedComponent";
import PrivateRoute from "./PrivateRoute";

class MyApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <Route
          exact
          path="/"
          render={() => <h1>Welcome to My React App.</h1>}
        />
        <Route
          path="/signup"
          render={props => (
            <AuthenticationForm
              title="Sign up"
              auth_endpoint="/api/users"
              {...props}
            />
          )}
        />
        <Route
          path="/signin"
          render={props => (
            <AuthenticationForm
              title="Sign in"
              auth_endpoint="/api/users/login"
              {...props}
            />
          )}
        />

        <PrivilegedComponent />
        <PrivateRoute />
      </div>
    );
  }
}

export default MyApp;
