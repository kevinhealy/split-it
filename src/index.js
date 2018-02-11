import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './fonts/material-icons.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
