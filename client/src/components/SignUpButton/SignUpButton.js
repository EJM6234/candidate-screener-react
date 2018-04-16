import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SignUpButton.css';

class SignUpButton extends Component {
  goToSignup() {
    this.props.history.push('/signup');
  }

  render() {
    return (
      <Button
        bsStyle="primary"
        bsSize="large"
        className="btn-margin"
        onClick={() => {this.goToSignup()}}
      >
        Sign Up
      </Button>
    )
  }
}

export default SignUpButton;
