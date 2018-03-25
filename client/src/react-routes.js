import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Callback from './pages/Callback';
import Auth from './Auth';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const appRoutes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={(props) => <Landing auth={auth} {...props} /> } />
        <Route path="/home" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/" />
          ) : (
            <Home auth={auth} {...props} />
          )
        )} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>
    </Router>
  );
}
