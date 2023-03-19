const defaultState = {
  value: "",
};

const CHANGE_VALUE = "CHANGE_VALUE";

export const inputValue = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const inputActionCreator = (payload) => ({
  type: CHANGE_VALUE,
  payload,
});
