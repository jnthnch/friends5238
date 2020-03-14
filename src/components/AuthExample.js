import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import store from 'store';


import UserPage from '../components/UserPage/UserPage';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_ID_BAD } from '../../constants'

export default function AuthExample() {
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
            <LoginPage />
          </Route>
          <PrivateRoute path="/user-page">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: store.get('isLoggedIn'),
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  console.log('store isLoggedIn ==>', store.get('isLoggedIn'))
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <div>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => {
            store.set('isLoggedIn', false)
            history.push("/")
          });
        }}
      >
        Sign out
      </button>
      {/* <GoogleLogout
        clientId={GOOGLE_CLIENT_ID}
        onClick={() => { console.log('clicked') }}
        buttonText="Logout"
        onLogoutSuccess={() => { console.log('successful logout!') }}
        onFailure={() => { console.log('successful logout!') }}
        cookiePolicy={'single_host_origin'}
      >
      </GoogleLogout> */}
    </div>
  ) : (
      <p>You are not logged in.</p>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
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

function HomePage() {
  return <h3>Home</h3>;
}

function ProtectedPage() {
  return <UserPage></UserPage>
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  const setUserName = async (name) => {
    await store.set('user', { name })
  }

  const successResponseGoogle = async (response) => {
    // await console.log(response);
    await setUserName(response.Qt.vW)
    store.set('isLoggedIn', true)
  }

  const failureResponseGoogle = async (response) => {
    // await console.log('failed', response);
    // store.set('isLoggedIn', false)
    console.log('failed')
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
        )}
        buttonText="Login"
        onSuccess={(response) => { successResponseGoogle(response).then(() => login()) }}
        onFailure={failureResponseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}
