import Immutable from 'immutable';

import actionTypes from '../constants/larkinConstants';

export const $$initialState = Immutable.fromJS({

});

export default function larkinReducer($$state = $$initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return $$state;
  }
}
