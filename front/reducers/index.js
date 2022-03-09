import auth from '@reducers/auth.js';
import post from '@reducers/post.js';
import { combineReducers } from 'redux';

export default combineReducers({
  auth,
  post,
});
