import React from 'react';
import "@babel/polyfill";
import '../../public/style.css';

import SignInPage from './SignInPage'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main'>
        <SignInPage></SignInPage>
      </div >
    );
  }
}

export default App;
