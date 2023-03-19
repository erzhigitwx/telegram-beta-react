import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../../index.js";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/userState.js";
import { userActionCreator } from "../../store/userInfo.js";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = function () {
  const { auth } = useContext(Context);
  const [userAuth] = useAuthState(auth);
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await auth.signInWithPopup(provider);
      dispatch(userActionCreator(user));
      dispatch(changeUser(Boolean(userAuth?.emailVerified)));
      dispatch(changeUser(true));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login">
      <div className="login-content" onClick={login}>
        <FcGoogle size={50} />
        <p className="login-content__text">continue with google</p>
      </div>
    </div>
  );
};

export default Login;
