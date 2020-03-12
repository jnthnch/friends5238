import React from 'react';
import store from 'store';
import './UserPage.css';

import isLoggedIn from '../helpers/isLoggedIn'
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

  return (
    <div>
      <h1>User Page</h1>
      <div className="action-main">
        <h1>Jon's picks</h1>
        <GamesList></GamesList>
        <div>results summary</div>
        <div>pending picks</div>
      </div>
      <button onClick={handleLogout}>
        Sign Out
    </button>
    </div>
  )
};

export default UserPage;
