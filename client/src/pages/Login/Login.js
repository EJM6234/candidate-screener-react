import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div id="background" style={{backgroundImage: 'url("img/office-background.jpg")'}}>
        <div id="landing-content-div" className="container text-center">
          <h1 className="header">Candidate Screener</h1>
        </div>
      </div>
    )
  }
}

export default Login;
