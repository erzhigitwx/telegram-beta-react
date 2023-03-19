const defaultState = {
  isShow: false,
};

const CHANGING_SHOW = "CHANGING_SHOWCHANGING_SHOW";

export const showProfile = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGING_SHOW:
      return { ...state, isShow: action.payload };
    default:
      return state;
  }
};

export const showCreatorAction = (payload) => ({
  type: CHANGING_SHOW,
  payload,
});
