import React from 'react';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';

import { CLIENT_ID } from '../../constants';

const responseGoogle = (response) => {
  console.log(response);
}

const MyButton = () => {
  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in to Google</button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  )
}

export default MyButton

