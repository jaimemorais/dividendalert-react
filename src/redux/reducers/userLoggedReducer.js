import { USER_LOGIN, USER_LOGOUT } from "../actionTypes";

const userLoggedReducer = (state = [], action) => {
    switch (action.type) {
      case USER_LOGIN:
        return [
          ...state,
          {
            // todo logged = true; 
          }
        ];
      case USER_LOGOUT:
        return [
            ...state,
            {
              // todo logged = false; 
            }
        ];
      default:
        return state;
    }
  };

export default userLoggedReducer;