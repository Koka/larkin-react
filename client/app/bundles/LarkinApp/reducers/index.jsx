// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import larkinReducer from './larkinReducer';
import { initialState as larkinState } from './larkinReducer';
import { routerReducer } from 'react-router-redux'

export default {
  larkinStore: larkinReducer,
  routing: routerReducer
};

export const initialStates = {
  larkinState
};
