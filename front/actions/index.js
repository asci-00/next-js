import { createAction } from 'redux-actions';

const LOGIN = '@@AUTH/LOGIN';
const LOGOUT = '@@AUTH/LOGOUT';
const SIGNUP = '@@AUTH/SIGNUP';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const signup = createAction(SIGNUP);
