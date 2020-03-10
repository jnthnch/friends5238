import React from 'react';
import "@babel/polyfill";
import '../../public/style.css';

import GoogleLoginButton from './GoogleLoginButton.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };

    this.setIsSignedIn = this.setIsSignedIn.bind(this);
  }

  setIsSignedIn() {
    this.setState({ isSignedIn: true }, () => { console.log('isSignedIn ==> ', this.state.isSignedIn) })
  }

  render() {
    return (
      <div className='main'>
        <div>
          <h1 className='header-1'>52.38</h1>
        </div>
        <div>
          <GoogleLoginButton setIsSignedIn={this.setIsSignedIn}></GoogleLoginButton>
        </div>
      </div >
    );
  }
}

export default App;
