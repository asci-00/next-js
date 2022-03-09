import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
} from '@actions/index';
import produce from 'immer';

const initializeUser = {
  introduction: null,
  loading: false,
  requestError: null,
  isLogin: false,
  token: '',
  name: '',
  id: '',
};

export default function reducer(state = initializeUser, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case LOGIN_FAILURE:
    case LOGOUT_FAILURE:
      return produce(state, (draft) => {
        draft.requestError = action.err.response.data;
        draft.loading = false;
      });

    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        const { introduction, token, name, id } = action.data;

        draft.introduction = introduction;
        draft.requestError = null;
        draft.loading = false;
        draft.isLogin = true;
        draft.token = token;
        draft.name = name;
        draft.id = id;
      });
    case LOGOUT_SUCCESS:
      return produce(state, (draft) => {
        draft = { ...initializeUser };
      });
    default:
      return state;
  }
}
