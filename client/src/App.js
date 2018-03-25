// import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
// import Landing from './components/Landing';
// import Home from './pages/Home';
// import './App.css';
//
// class App extends Component {
//   goTo(route) {
//     this.props.history.replace(`/${route}`)
//   }
//
//   login() {
//     this.props.auth.login();
//   }
//
//   logout() {
//     this.props.auth.logout();
//   }
//
//   render() {
//     const { isAuthenticated } = this.props.auth;
//
//     return (
//       <div>
//         {
//           !isAuthenticated() && (
//             <Landing auth={this.props.auth} />
//           )
//         }
//         {
//           isAuthenticated() && (
//             <div>
//               <Home />
//               <Button
//                 bsStyle="primary"
//                 className="btn-margin"
//                 onClick={this.logout.bind(this)}
//               >
//                 Log Out
//               </Button>
//             </div>
//           )
//         }
//       </div>
//     );
//   }
// }
//
// export default App;
