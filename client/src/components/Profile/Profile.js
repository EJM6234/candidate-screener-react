import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Profile extends Component {
  render() {
    return (
      <Button
        bsStyle="primary"
        className="btn-margin"
        onClick={this.logout.bind(this)}
      >
        Log Out
      </Button>
    )
  }
}

export default Profile;
