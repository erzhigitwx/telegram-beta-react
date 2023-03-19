import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { showCreatorAction } from "../../store/showProfile";
import { nameActionCreator } from "../../store/userName";

const ProfileDevice = function () {
  const user = useSelector((state) => state.userInfo.user);
  localStorage.setItem("defaultName", user.displayName);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.userName.name);
  const [inputValue, setInputValue] = useState(name);
  const show = useSelector((state) => state.showProfile.isShow);

  function inputChangeHandler(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  function sumbit() {
    localStorage.setItem("name", inputValue);
    const nameLocal = localStorage.getItem("name");
    dispatch(nameActionCreator(String(nameLocal)));
  }
  return (
    <div>
      <div
        className={show ? "burger__btn__active" : "burger__btn"}
        onClick={() => dispatch(showCreatorAction(!show))}
      >
        <span />
      </div>
      {(show && (
        <div className={show ? "profile profile-active" : "profile"}>
          <div className="profile-content">
            <img
              src={user.photoURL}
              alt="avatar"
              className="profile-content__image"
            />
            <div className="profile-content__name-container">
              <Input
                type="text"
                placeholder={name}
                className="profile-content__name"
                value={inputValue}
                style={{ color: "#ffffff" }}
                onChange={(e) => inputChangeHandler(e)}
              />
              <Button
                style={{ backgroundColor: "#0088cc", color: "#ffffff" }}
                onClick={() => sumbit()}
              >
                sumbit
              </Button>
            </div>
            <p className="profile-content__text">
              email:<strong style={{ marginLeft: 5 }}>{user.email}</strong>
            </p>
            <p className="profile-content__status">
              verified: <GrStatusGood size={30} style={{ marginLeft: 10 }} />
            </p>
          </div>
        </div>
      )) || <></>}
    </div>
  );
};

export default ProfileDevice;
