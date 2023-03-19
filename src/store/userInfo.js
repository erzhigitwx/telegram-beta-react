const defaultState = {
  user: null,
};

const UPADTE_USER = "UPADTE_USER";

export const userInfo = (state = defaultState, action ) => {
  switch (action.type) {
    case UPADTE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const userActionCreator = (payload) => ({ type: UPADTE_USER, payload });
