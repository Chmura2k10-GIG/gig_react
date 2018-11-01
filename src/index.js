import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import registeredServiceWorker from './serviceWorker'
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit.js'
import "./assets/scss/app.scss";

ReactDOM.render(
  <Provider store={store} ><Router><App /></Router></Provider>, document.getElementById('root')
);
registeredServiceWorker();