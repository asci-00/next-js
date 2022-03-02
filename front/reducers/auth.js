import { login, logout, signup } from '@actions/index';
import { handleActions } from 'redux-actions';
const initialize = {
  introduction: 'Hello nice to meet you',
  isLogin: false,
  token: '',
  name: '',
  id: '',
};

export default handleActions(
  {
    [login]: (state, action) => ({ ...state, ...action.payload, isLogin: true }),
    [logout]: () => ({ ...initialize }),
    [signup]: (state, action) => ({ ...state, ...action.payload }),
  },
  initialize
);
