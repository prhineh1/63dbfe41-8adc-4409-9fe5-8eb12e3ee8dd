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
  try {
    const response = yield call(getWeather, data);
  } catch (err) {
    yield console.log(err);
  }
}
