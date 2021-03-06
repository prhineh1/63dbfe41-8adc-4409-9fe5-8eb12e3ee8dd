import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getWeather } from '../API/DarkSky';

// WATCHERS

export function* watchAddDataSaga() {
  yield takeEvery('ADD_DATA', addDataAsync);
}

// WORKERS

export function* addDataAsync({ data }) {
  const { response, error } = yield call(getWeather, data);
  if (response) {
    yield put({
      type: 'ADD_DATA_COMPLETE',
      data: { ...data, ...response }
    });
  } else {
    yield put({
      type: 'DARK_SKY_ERROR',
      error
    });
  }
}
