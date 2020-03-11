import React from 'react';
import store from 'store';

import isLoggedIn from '../helpers/isLoggedIn'

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
      <h1>User Page!!!!</h1>
      <iframe
        src="https://giphy.com/embed/VvQvOFqPjZLi"
        width="100"
        height="100"
      />
      <p>So tasty!</p>
      <button onClick={handleLogout}>
        Sign Out
    </button>
    </div>
  )
};

export default UserPage;
