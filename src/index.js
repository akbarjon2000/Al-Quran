import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root/Root';
import StartContextProvider from "./context/startContext";
import { Provider } from "react-redux"
import store from "./store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StartContextProvider>
        <Root />
      </StartContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

