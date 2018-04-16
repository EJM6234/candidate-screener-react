import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

export const reactRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}
