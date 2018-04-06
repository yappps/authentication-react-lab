import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./AuthenticationForm.css";

class AuthenticationForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="authentication-form">
        <h2>{this.props.title}</h2>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="bob@example.com"
              value={this.state.email}
              onChange={this.handleEmailChange.bind(this)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const body = {
      user: {
        username: this.state.email.split("@")[0],
        email: this.state.email,
        password: this.state.password
      }
    };

    fetch(
      `${process.env.REACT_APP_EXPRESS_SERVER_URL}${this.props.auth_endpoint}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    )
      .then(data => data.json())
      .then(data => {
        sessionStorage.accessToken = data.user.token;
        console.log(this.props.history);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));

    this.setState({
      email: "",
      password: ""
    });
  }
}

export default AuthenticationForm;
