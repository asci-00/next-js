import { call, put, takeEvery } from 'redux-saga/effects';
import {
  SET_POSTS_REQUEST,
  SET_POSTS_FAILURE,
  SET_POSTS_SUCCESS,
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_REQUEST,
  REMOVE_POST_FAILURE,
  ADD_POST_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  REMOVE_COMMENT_FAILURE,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
} from '@actions/index';
import { setPostApi, addPostApi, removePostApi, addCommentApi, removeCommentApi } from '../dummy/apis/data';

function* setPostRequest() {
  try {
    const posts = yield call(setPostApi);

    yield put({
      type: SET_POSTS_SUCCESS,
      data: posts,
    });
  } catch (err) {
    yield put({
      type: SET_POSTS_FAILURE,
      err: err.response.data,
    });
  }
}

function* addPostRequest({ data }) {
  try {
    yield call(addPostApi, data);

    yield put({ type: ADD_POST_SUCCESS, data });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      err: err.response.data,
    });
  }
}

function* removePostRequest({ data }) {
  try {
    yield call(removePostApi, data);

    yield put({ type: REMOVE_POST_SUCCESS, data });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      err: err.response.data,
    });
  }
}

function* addCommentRequest({ data }) {
  try {
    yield call(addCommentApi, data);
    yield put({ type: ADD_COMMENT_SUCCESS, data });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      err: err.response.data,
    });
  }
}

function* removeCommentRequest({ data }) {
  try {
    yield call(removeCommentApi, data);

    yield put({ type: REMOVE_COMMENT_SUCCESS, data });
  } catch (err) {
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      err: err.response.data,
    });
  }
}

export default function* postSaga() {
  yield takeEvery(SET_POSTS_REQUEST, setPostRequest);
  yield takeEvery(ADD_POST_REQUEST, addPostRequest);
  yield takeEvery(REMOVE_POST_REQUEST, removePostRequest);
  yield takeEvery(ADD_COMMENT_REQUEST, addCommentRequest);
  yield takeEvery(REMOVE_COMMENT_REQUEST, removeCommentRequest);
}
