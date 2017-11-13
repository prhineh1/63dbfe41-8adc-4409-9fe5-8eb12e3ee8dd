import "babel-polyfill";

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from '../reducers/weather';
import errorReducer from '../reducers/error';

// following configurataion found in createSagaMiddleware section at https://redux-saga.js.org/docs/api/

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return {
        ...createStore(
            combineReducers({ 
                weather: weatherReducer,
                error: errorReducer
             }),
            composeEnhancers(applyMiddleware(sagaMiddleware))
        ),
        runSaga: sagaMiddleware.run
    };
};

