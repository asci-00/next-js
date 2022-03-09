import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_FAILURE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
} from '@actions/index';
import { loginApi, logoutApi } from '../dummy/apis/data';

function* loginRequest({ data }) {
  try {
    const authInfo = yield call(loginApi, data);

    yield put({
      type: LOGIN_SUCCESS,
      data: { ...authInfo },
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      payload: err.response.data,
    });
  }
}

function* logoutRequest() {
  try {
    yield call(logoutApi);

    yield put({ type: LOGOUT_SUCCESS });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      payload: err.response.data,
    });
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  yield takeLatest(LOGOUT_REQUEST, logoutRequest);
}
