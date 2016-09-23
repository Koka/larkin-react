import React, { PropTypes } from 'react';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import {isAuthenticated, isUnauthenticated} from '../api/api';
import Main from '../containers/Main';
import Login from '../containers/Login';
import Delivery from '../containers/Delivery';
import Unauthorized from '../components/Unauthorized';

const Larkin = (props, context) => {
  const { store } = context;
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path="/app" component={Main}>
        <IndexRedirect to="delivery" />
        <Route path="unauthorized" component={Unauthorized} />

        <Route path="login" component={Login} />
        <Route path="delivery" component={Delivery} />
      </Route>
    </Router>
  );
};

Larkin.contextTypes = {store: React.PropTypes.instanceOf(Object).isRequired};

export default Larkin;
