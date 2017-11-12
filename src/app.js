import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { rootSaga } from './sagas/root';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'react-dates/lib/css/_datepicker.css';
import 'rc-time-picker/assets/index.css';

const store = configureStore();
store.runSaga(rootSaga);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
