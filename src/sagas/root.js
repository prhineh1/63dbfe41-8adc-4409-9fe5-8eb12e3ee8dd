import { all } from 'redux-saga/effects';
import { watchAddUserDataSaga } from './weather';

export function* rootSaga() {
    yield all([
      watchAddUserDataSaga(),
    ]);
};