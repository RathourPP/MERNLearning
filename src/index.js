import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './core/configureStore';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from "react-redux";
import history from './services/history'
import reportWebVitals from './reportWebVitals';
import Users from './Component/ConnectedComponents/User/User'

const store=configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Route exact path="/" component={Users}/>
    </Router>
  </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
