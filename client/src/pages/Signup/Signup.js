import React, { Component } from 'react';
import { FormGroup, FormControl, Radio, Button } from 'react-bootstrap';
import { Auth } from "../../auth.js";
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userName: '',
      password: '',
      verifyPassword: ''
    }
  }

  handleChange(e) {
    let stateObj = {};
    stateObj[e.target.name] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {

  }

  render() {
    return (
      <div id="background" style={{backgroundImage: 'url("img/office-background.jpg")'}}>
        <div id="landing-content-div" className="container text-center">
          <h1 className="header">Candidate Screener</h1>
          <FormGroup>
            <FormControl
              type="text"
              name="userName"
              value={this.state.userName}
              placeholder="Username"
              onChange={this.handleChange}
            />
            <FormControl
              type="text"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <FormControl
              type="text"
              name="verifyPassword"
              value={this.state.verifyPassword}
              placeholder="Verify password"
              onChange={this.handleChange}
            />
            <Radio name="candOrManager" inline>
              Candidate
            </Radio>
            <Radio name="candOrManager" inline>
              Hiring Manager
            </Radio>
            <Button
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </FormGroup>
        </div>
      </div>
    )
  }
}

export default Signup;
