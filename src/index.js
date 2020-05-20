import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from "./server";
import { initialState } from "./sesion/initialState";
import { StateProvider } from "./sesion/store";
import { mainReducer } from './sesion/reducers';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>
  </FirebaseContext.Provider>
  , document.getElementById('root')
);
serviceWorker.unregister();
