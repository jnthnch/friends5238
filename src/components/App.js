import React, { Component } from 'react';
import "@babel/polyfill";
import '../../public/style.css';
import { Route, Link, Switch, withRouter } from "react-router-dom";

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import UserPage from '../components/UserPage/UserPage';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Sign In Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/user-page" component={UserPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div >
    );
  }
}

export default App;
