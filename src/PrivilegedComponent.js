import React, { Component } from "react";
import { isAuthenticated } from "./utils/AuthService";
import "./PrivilegedComponent.css";

class PrivilegedComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      data: null
    };
  }

  render() {
    return (
      <div className="privileged-content-body">
        <h2>Privileged Content</h2>
        {isAuthenticated() ? (
          <h3>here's your privileged content</h3>
        ) : (
          <h3>please log in to see privileged content</h3>
        )}
      </div>
    );
  }

  getPrivilegedContent() {
    fetch("http://localhost:3000/api/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + sessionStorage.accessToken
      }
    })
      .then(data => data.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.log(err));
  }
}

export default PrivilegedComponent;
