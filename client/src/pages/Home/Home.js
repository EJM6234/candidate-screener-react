import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Here is your profile</h1>
        <Button
          bsStyle="primary"
          className="btn-margin"
        >
          Log Out
        </Button>
      </div>
    );
  }
}

export default Home;
