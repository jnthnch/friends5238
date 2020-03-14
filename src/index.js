import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './components/App'
import AuthExample from './components/AuthExample'

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <AuthExample></AuthExample>,
  document.getElementById('app')
);
