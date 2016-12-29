import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';

require('../css/main_style.css');

const app = document.getElementById('app');

ReactDOM.render(<Router history={browserHistory} routes={Routes} />, app);
