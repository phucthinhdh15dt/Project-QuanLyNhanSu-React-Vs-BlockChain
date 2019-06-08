import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {createStore} from "redux";
import {Provider} from "react-redux";
// import products  from './reducers/index';


import { createStore, applyMiddleware ,compose} from 'redux'; 
import appReducers from './redux/ReducersRoot';

import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history); 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [ thunk, reactRouterMiddleware ];
const store = createStore(
    connectRouter(history)(appReducers), 
    composeEnhancer(
        applyMiddleware(...middleWares)
    ),
);

ReactDOM.render(<Provider store={store}>
                    <App /> 
                </Provider>, document.getElementById('root'));
serviceWorker.unregister();
