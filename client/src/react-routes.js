import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import Callback from './pages/Callback';
import Auth from './Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const appRoutes = () => {
  return (
    <BrowserRouter history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/login" render={(props) => <Login auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
      </div>
    </BrowserRouter>
  );
}
