const defaultState = {
  name: localStorage.getItem("name") || localStorage.getItem("defaultName"),
};
const CHANGING_NAME = "CHANGING_NAME";

export const userName = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGING_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

export const nameActionCreator = (payload) => ({
  type: CHANGING_NAME,
  payload,
});
