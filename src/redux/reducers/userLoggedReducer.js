import { USER_LOGIN, USER_LOGOUT } from "../actionTypes";

const userLoggedReducer = (state = [], action) => {
    switch (action.type) {
      case USER_LOGIN:
        return [
          ...state,
          {
            authenticated: true
          }
        ];
      case USER_LOGOUT:
        return [
            ...state,
            {
              authenticated: false
            }
        ];
      default:
        return state;
    }
  };

export default userLoggedReducer;