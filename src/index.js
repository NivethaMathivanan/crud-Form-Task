
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  
import store from './reduxFile/Store';  
import App from './App';
// import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <body>
  <Provider store={store}>
    <App />
  </Provider>
  </body>
);

