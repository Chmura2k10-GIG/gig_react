import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit.js'
import "./assets/scss/app.scss";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
