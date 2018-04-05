import React from "react";
import { Route } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm";
import NavBar from "./NavBar";
import PrivilegedComponent from "./PrivilegedComponent";

const MyApp = () => (
  <div>
    <NavBar />
    <br />
    <Route exact path="/" render={() => <h1>Welcome to My React App.</h1>} />
    <Route
      path="/signup"
      render={() => (
        <AuthenticationForm title="Sign up" auth_endpoint="/api/users" />
      )}
    />
    <Route
      path="/signin"
      render={() => (
        <AuthenticationForm title="Sign in" auth_endpoint="/api/users/login" />
      )}
    />
    <PrivilegedComponent isAuthenticated={false} />
  </div>
);

export default MyApp;
