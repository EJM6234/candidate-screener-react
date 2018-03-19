import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Landing.css'

class Landing extends Component {
  render() {
    {console.log(this.props)}
    return (
      <div id="background" style={{backgroundImage: 'url("img/office-background.jpg")'}}>
        <div className="container not-auth-container">
          <h1 className="header">Candidate Screener</h1>
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.props.auth.login}
          >
            Log In
          </Button>
        </div>
      </div>
    )
  }
}

export default Landing;
