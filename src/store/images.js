const defaultState = {
  image: null,
};

const CHANGING_IMAGE = "CHANGING_IMAGE";

export const image = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGING_IMAGE:
      return { ...state, image: action.payload };
    default:
      return state;
  }
};

export const imageActionCreator = (payload) => ({
  type: CHANGING_IMAGE,
  payload,
});
