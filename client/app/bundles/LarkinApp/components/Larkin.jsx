import React, { PropTypes } from 'react';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import {isAuthenticated, isUnauthenticated} from '../api/api';
import Main from '../components/Main';
import Login from '../containers/Login';
import Delivery from '../components/Delivery';
import Unauthorized from '../components/Unauthorized';

function checkUnauthenticated(nextState, replace, callback) {
  isAuthenticated().then(bool => {
    if (bool) {
      replace(`/app/delivery`);
    }
    callback();
  });
}

function checkAuthenticated(nextState, replace, callback) {
  isUnauthenticated().then(bool => {
    if (bool) {
      replace(`/app/login`);
    }
    callback();
  });
}

const Larkin = (props, context) => {
  const { store } = context;
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path="/app" component={Main}>
        <IndexRedirect to="delivery" />
        <Route path="unauthorized" component={Unauthorized} />

        <Route path="login" component={Login} onEnter={checkUnauthenticated}/>
        <Route path="delivery" component={Delivery} onEnter={checkAuthenticated}/>
      </Route>
    </Router>
  );
};

Larkin.contextTypes = {store: React.PropTypes.instanceOf(Object).isRequired};

export default Larkin;
