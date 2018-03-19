import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
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
    <BrowserRouter>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/profile" render={(props) => {
          handleAuthentication(props);
          return <App auth={auth} {...props} />
        }}/>
      </div>
    </BrowserRouter>
  );
}
