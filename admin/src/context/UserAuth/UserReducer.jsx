// User Object

export const USER_ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION.LOGIN: {
      return { currentUser: action.payload };
    }

    case USER_ACTION.LOGOUT: {
      return { currentUser: null };
    }

    default:
      return state;
  }
};

export default UserReducer;
