import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

const Routes = (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    { routes }
  </Router>
)

const app = document.getElementById('app');
render(Routes, app);