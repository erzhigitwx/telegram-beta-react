import { combineReducers, createStore } from "redux";
import { image } from "./images";
import { inputValue } from "./inputValue";
import { userInfo } from "./userInfo";
import { userState } from "./userState";
import { userName } from "./userName";
import { showProfile } from "./showProfile";

const rootReducer = combineReducers({
  userState: userState,
  userInfo: userInfo,
  inputValue: inputValue,
  image: image,
  userName: userName,
  showProfile: showProfile,
});

export const store = createStore(rootReducer);
