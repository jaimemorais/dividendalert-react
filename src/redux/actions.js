import { USER_LOGIN, USER_LOGOUT } from './actionTypes';


export const loginSuccessAction = () => ({
    type: USER_LOGIN,
    authenticated: true
  });


export const logoutAction = () => ({
    type: USER_LOGOUT,
    authenticated: false
  });