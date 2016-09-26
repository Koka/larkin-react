import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

import createStore from '../store/larkinStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';

import 'semantic-ui-css/semantic.min.css';

import Main from '../containers/Main';
import Login from '../containers/Login';
import Unauthorized from '../components/Unauthorized';

import Delivery from '../containers/Delivery';

import Orders from '../components/Orders';
import OrdersEdit from '../containers/OrdersEdit';
import OrdersList from '../containers/OrdersList';
import OrdersCompleted from '../containers/OrdersCompleted';
import OrdersCancelled from '../containers/OrdersCancelled';
import OrdersOutdated from '../containers/OrdersOutdated';

import Loads from '../components/Loads';
import LoadsList from '../containers/LoadsList';

import Routelists from '../components/Routelists';
import RoutelistsList from '../containers/RoutelistsList';
import RoutelistsEdit from '../containers/RoutelistsEdit';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const LarkinApp = (props, _railsContext) => {
  const store = createStore(props);
  const history = syncHistoryWithStore(browserHistory, store);
  const reactComponent = (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/app" component={Main}>
          <IndexRedirect to="delivery" />
          <Route path="unauthorized" component={Unauthorized} />

          <Route path="login" component={Login} />
          <Route path="delivery" component={Delivery}>
            <Route path="orders" component={Orders}>
              <IndexRedirect to="list" />

              <Route path="list" component={OrdersList} />
              <Route path="outdated" component={OrdersOutdated} />
              <Route path="completed" component={OrdersCompleted} />
              <Route path="cancelled" component={OrdersCancelled} />

              <Route path="edit/:id/:back" component={OrdersEdit} />

            </Route>

            <Route path="loads" component={Loads}>
              <IndexRedirect to="list" />
              <Route path="list" component={LoadsList} />
            </Route>

            <Route path="routelists" component={Routelists}>
              <IndexRedirect to="list" />

              <Route path="list" component={RoutelistsList} />
              <Route path="edit/:id" component={RoutelistsEdit} />

            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
  return reactComponent;
};

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ LarkinApp });
