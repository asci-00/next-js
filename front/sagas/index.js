import { all } from 'redux-saga/effects';
import postSaga from './post';
import authSaga from './auth';

export default function* rootSaga() {
  yield all([postSaga(), authSaga()]);
}
