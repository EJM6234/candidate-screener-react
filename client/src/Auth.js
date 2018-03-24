import history from './history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './config/auth0-config';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.profileUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.loginWithLinkedIn = this.loginWithLinkedIn.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(username, password) {
    this.auth0.client.login(
      { realm: 'Username-Password-Authentication', username, password },
      (err, authResult) => {
        if (err) {
          alert(`Error: ${err.description}`);
          return;
        }
        this.setSession(authResult);
      }
    );
  }

  signup(email, password) {
    this.auth0.redirect.signupAndLogin(
      { connection: 'Username-Password-Authentication', email, password },
      function(err) {
        if (err) {
          alert(`Error: ${err.description}`);
        }
      }
    );
  }

  loginWithLinkedIn() {
    this.auth0.authorize({ connection: 'google-oauth2' });
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        console.log(`Access token ${authResult.accessToken} has been authenticated!`);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No Access Token found');
    }
    return accessToken;
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  logout() {
    console.log(this.isAuthenticated());
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Logout confirmation
    console.log(`You have been logged out successfully!`);
    // navigate to the home route
    history.replace('/home');
  }
}
