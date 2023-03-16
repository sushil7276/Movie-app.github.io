import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore } from 'redux';
import movies from "./reducers/index"

const store = legacy_createStore(movies)

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"SuperMan"}]
// })
// console.log("After State", store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
