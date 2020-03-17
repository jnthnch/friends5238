import React from 'react';
import store from 'store';
import './UserPage.css';

import GamesList from './GamesList';

const UserPage = (props) => {
  const { history } = props

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
    </div>
  )
};

export default UserPage;
