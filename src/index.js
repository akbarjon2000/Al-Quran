import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root/Root';
import StartContextProvider from "./context/startContext";

ReactDOM.render(
  <React.StrictMode>
    <StartContextProvider>
      <Root />
    </StartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

