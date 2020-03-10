import React from 'react';
import "@babel/polyfill";
import '../../public/style.css';
import { Route, Link } from "react-router-dom";

import SignInPage from './SignInPage'

const Eat = (props) => (
  <div>
    <h1>NOM NOM NOM</h1>
    <pre>{JSON.stringify(props, null, 4)}</pre>
    <iframe
      src="https://giphy.com/embed/VvQvOFqPjZLi"
      width="480"
      height="480"
    />
    <p>So tasty!</p>
  </div>
);

const Drink = () => (
  <div>
    <h1>SO REFRESHING</h1>
    <iframe
      src="https://giphy.com/embed/DbD6EnlEQmjTi"
      width="480"
      height="461"
    />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/eat">Eat</Link>
          </li>
          <li>
            <Link to="/drink">Drink</Link>
          </li>
        </ul>
        <Route exact path="/" component={SignInPage} />
        <Route path="/eat" component={Eat} />
        <Route path="/drink" component={Drink} />
      </div >
    );
  }
}

export default App;
