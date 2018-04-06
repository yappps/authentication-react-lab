import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./utils/AuthService";
import SecretStuff from "./SecretStuff";

const PrivateRoute = () => (
  <Route
    render={props =>
      isAuthenticated() ? (
        <div>
          <SecretStuff />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/signin"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
