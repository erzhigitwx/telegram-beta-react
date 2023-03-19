const defaultState = {
  isAuth: false,
};

const CHANGE_USER_STATE = "CHANGE_USER_STATE";

export const userState = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_USER_STATE:
      return { ...state, isAuth: action.payload};
    default:
      return state;
  }
};

export const changeUser = (payload) => ({ type: CHANGE_USER_STATE, payload });
