import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div id="container"></div>
    <div id="buttons">
      <button id="toTop">Move yellow box to top</button>
      <button id="toBottom">Move yellow box to bottom</button>
      <button id="up">Move yellow box up</button>
      <button id="down">Move yellow box down</button>
      <button id="zIndex">Set yellow box zIndex to 3</button>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
