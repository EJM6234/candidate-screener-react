import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './LogInButton.css';

class LogInButton extends Component {
  goToLogin() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <Button
        bsStyle="primary"
        bsSize="large"
        className="btn-margin"
        onClick={() => {this.goToLogin()}}
      >
        Log In
      </Button>
    )
  }
}

export default LogInButton;
