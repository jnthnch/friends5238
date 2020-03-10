import React from 'react';
import '../../public/style.css';

import MyButton from './GoogleLogin.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='main'>
        <div>
          <h1 className='header-1'>Friends5238</h1>

        </div>
        <div>
          <MyButton></MyButton>
        </div>
      </div>
    );
  }
}

export default App;
