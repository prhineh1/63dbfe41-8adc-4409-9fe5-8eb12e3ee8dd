import { all } from 'redux-saga/effects';
import { watchAddDataSaga } from './weather';

export function* rootSaga() {
    yield all([
      watchAddDataSaga(),
    ]);
};