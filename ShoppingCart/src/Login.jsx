import React, { Component } from "react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }
  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="form-group form-row">
          <label className="col-lg-4 m-1">Email:</label>
          <input
            type="text"
            className="form-control m-1"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4 m-1">Password:</label>
          <input
            type="password"
            className="form-control m-1"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
        </div>
        <div className="float-end">
          {this.state.message}
          <button className="btn btn-primary m-3" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
  onLoginClick = async () => {
    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );
    var body = await response.json()
    console.log(body);
    if (body.length > 0) {
      this.setState({
        message: (
          <span className="text-success">Successfully Logged-in!👍</span>
        ),
      });
    } else {
      this.setState({
        message: (
          <span className="text-danger">
            Invalid Login, please try again!👎
          </span>
        ),
      });
    }
  };
}
