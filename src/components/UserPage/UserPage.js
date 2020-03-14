import React from 'react';
import store from 'store';
import './UserPage.css';

import isLoggedIn from '../../helpers/isLoggedIn'
import { useGoogleLogout, GoogleLogout } from 'react-google-login'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_ID_BAD } from '../../../constants'




import GamesList from './GamesList';

const UserPage = (props) => {
  const { history } = props

  const { signOut } = useGoogleLogout({
    clientId: GOOGLE_CLIENT_ID,
    onFailure: () => { 'failed logout' },
    onLogoutSuccess: () => { console.log('hook logout') }
  })

  // console.log('signOut is', signOut)
  // if (!isLoggedIn()) {
  //   history.push('/login');
  // }

  // const handleLogout = async () => {
  //   await store.set('isLoggedIn', false)
  //   history.push('/login');
  // };

  const userName = store.get('user') ? store.get('user').name : 'user';

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <h1>User Page - Welcome {userName}</h1>
      <div className="user-page__main">
        <GamesList></GamesList>
        <div>results summary</div>
        <div>pending picks</div>
        <div>friends list</div>
      </div>
      {/* <button onClick={handleLogout} style={{ width: '5%' }}>
        Sign Out
      </button> */}
      {/* <GoogleLogout
        clientId='2533117684-dtmgnuekchkibat950i2tbm07loa4vpo.apps.googleusercontent.com'
        onClick={signOut}
        buttonText="Logout"
        onLogoutSuccess={() => { console.log('onLogoutSuccess logout!') }}
        onFailure={() => { console.log('onfailure !') }}
        cookiePolicy={'single_host_origin'}
      >
      </GoogleLogout> */}
    </div>
  )
};

export default UserPage;
