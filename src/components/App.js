import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import store from 'store';
import "regenerator-runtime/runtime.js";

import HomePage from './HomePage'
import UserPage from './UserPage/UserPage';
import LoginPage from './LoginPage/LoginPage'

function App() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/user-page">User Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage userAuth={userAuth} />
          </Route>
          <PrivateRoute path="/user-page">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const userAuth = {
  isAuthenticated: store.get('isLoggedIn'),
  authenticate(cb) {
    userAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    userAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  console.log('store isLoggedIn ==>', store.get('isLoggedIn'))
  let history = useHistory();

  return userAuth.isAuthenticated ? (
    <div>
      Welcome!{" "}
      <button
        onClick={() => {
          userAuth.signout(() => {
            store.set('isLoggedIn', false)
            history.push("/")
          });
        }}
      >
        Sign out
      </button>
    </div>
  ) : (
      <p>You are not logged in.</p>
    );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function ProtectedPage() {
  return <UserPage></UserPage>
}

export default App;