import React, { Component } from 'react';
import LogInButton from '../../components/LogInButton';
import SignUpButton from '../../components/SignUpButton';
import './Landing.css'

class Landing extends Component {

  render() {
    return (
      <div id="background" style={{backgroundImage: 'url("img/office-background.jpg")'}}>
        <div id="landing-content-div" className="container text-center">
          <h1 className="header">Candidate Screener</h1>
          <div id="login-button-div" className="row">
            <LogInButton className="text-center" history={this.props.history} />
          </div>
          <div className="row">
            <SignUpButton className="text-center" history={this.props.history} />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
