import {
  SET_POSTS_REQUEST,
  SET_POSTS_FAILURE,
  SET_POSTS_SUCCESS,
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  REMOVE_POST_REQUEST,
  REMOVE_POST_FAILURE,
  REMOVE_POST_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_FAILURE,
  REMOVE_COMMENT_SUCCESS,
} from '@actions/index';
import produce from 'immer';

const initializeUser = {
  postLoading: false,
  requestError: null,
  commentLoading: false,
  posts: [],
};

export default function reducer(state = initializeUser, action = {}) {
  switch (action.type) {
    case SET_POSTS_REQUEST:
    case ADD_POST_REQUEST:
    case REMOVE_POST_REQUEST:
      return produce(state, (draft) => {
        draft.postLoading = true;
      });
    case SET_POSTS_FAILURE:
    case ADD_POST_FAILURE:
    case REMOVE_POST_FAILURE:
      return produce(state, (draft) => {
        draft.requestError = action.err;
        draft.postLoading = false;
      });

    case SET_POSTS_SUCCESS:
      return produce(state, (draft) => {
        draft.requestError = null;
        draft.postLoading = false;
        draft.posts = [...action.data];
      });
    case ADD_POST_SUCCESS:
      return produce(state, (draft) => {
        draft.requestError = null;
        draft.postLoading = false;
        draft.posts.unshift({ ...action.data });
      });
    case REMOVE_POST_SUCCESS:
      return produce(state, (draft) => {
        draft.requestError = null;
        draft.postLoading = false;
        draft.posts = draft.posts.filter((item) => item.id !== action.id);
      });

    case REMOVE_COMMENT_REQUEST:
    case ADD_COMMENT_REQUEST:
      return produce(state, (draft) => {
        draft.commentLoading = true;
      });

    case REMOVE_COMMENT_FAILURE:
    case ADD_COMMENT_FAILURE:
      return produce(state, (draft) => {
        draft.commentLoading = false;
        draft.requestError = action.err;
      });

    case REMOVE_COMMENT_SUCCESS:
      return produce(state, (draft) => {
        const { postId, id } = action.data;
        const post = draft.posts.find((item) => item.id === postId);
        draft.commentLoading = false;
        post.comments = post.comments.filter((item) => item.id !== id);
      });
    case ADD_COMMENT_SUCCESS:
      return produce(state, (draft) => {
        const { postId, ...comment } = action.data;
        const post = draft.posts.find((item) => item.id === postId);
        draft.commentLoading = false;
        post.comments.push(comment);
      });
    default:
      return state;
  }
}
