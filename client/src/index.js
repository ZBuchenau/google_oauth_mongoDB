// Data layer control (Redux)
// import from node_modules
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// import custom files and components
import App from './components/App.js';
import reducers from './reducers';

// action creators initiate change inside our React/Redux application (modify state)


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

console.log("Stripe key is: ", process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is: ', process.env.NODE_ENV);
