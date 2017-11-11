import { takeEvery } from 'redux-saga';
import { put, all, call } from 'redux-saga/effects';
import * as Actions from '../actions/weather';
import { getWeather } from '../API/DarkSky';

// WATCHERS

export function* watchAddUserDataSaga() {
  yield takeEvery('ADD_USER_DATA', addUserDataAsync);
}

// WORKERS

export function* addUserDataAsync({ data }) {
  const { response, error } = yield call(getWeather, data);
  if (response) {
    yield put({
      type: 'ADD_USER_DATA_COMPLETE',
      data
    });
    yield put({
      type: 'ADD_API_DATA_COMPLETE',
      data: response
    });
  } else {
    yield call(console.log, error);
  }
}
