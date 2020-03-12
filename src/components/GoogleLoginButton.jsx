import React from 'react';
import store from 'store';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';

import { GOOGLE_CLIENT_ID } from '../../constants';

const successResponseGoogle = async (response) => {
  await console.log(response);
  await console.log(`hello ${response.Qt.vW}!!!`)
  store.set('isLoggedIn', true)
}

const failureResponseGoogle = async (response) => {
  await console.log('failed', response);
  store.set('isLoggedIn', false)
}

const GoogleLoginButton = (props) => {
  const { setIsSignedIn } = props;
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in to Google</button>
      )}
      buttonText="Login"
      onSuccess={(response) => { successResponseGoogle(response).then(setIsSignedIn()) }}
      onFailure={failureResponseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  )
}

export default GoogleLoginButton

