import React from 'react';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';

import { CLIENT_ID } from '../../constants';

const successResponseGoogle = async (response) => {
  await console.log(response);
}

const failureResponseGoogle = async (response) => {
  await console.log('failed', response);
}

const GoogleLoginButton = (props) => {
  const { setIsSignedIn } = props;
  return (
    <GoogleLogin
      clientId={CLIENT_ID}
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

