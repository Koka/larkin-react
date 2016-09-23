import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as larkinActionCreators from '../actions/larkinActionCreators';
import { Router, Route, Link, browserHistory } from 'react-router';
import Main from '../components/Main';
import Login from '../components/Login';
import Delivery from '../components/Delivery';
import Unauthorized from '../components/Unauthorized';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$larkinStore: state.$$larkinStore };
}

// Simple example of a React "smart" component
const Larkin = (props) => {
  const { dispatch, $$larkinStore } = props;
  const actions = bindActionCreators(larkinActionCreators, dispatch);

  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <HelloWorldWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
  return (
    <Router history={browserHistory}>
      <Route path="/app" component={Main}>
        <Route path="login" component={Login}/>
        <Route path="delivery" component={Delivery}/>
        <Route path="unauthorized" component={Unauthorized}/>
      </Route>
    </Router>
  );
};

Larkin.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$larkinStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(Larkin);
