import React from 'react';
import store from 'store';
import './UserPage.css';

import isLoggedIn from '../../helpers/isLoggedIn'
import GamesList from './GamesList';

const UserPage = (props) => {
  const { history } = props

  if (!isLoggedIn()) {
    history.push('/login');
  }

  const handleLogout = async () => {
    await store.set('isLoggedIn', false)
    history.push('/login');
  };

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
      <button onClick={handleLogout} style={{ width: '5%' }}>
        Sign Out
      </button>
    </div>
  )
};

export default UserPage;
