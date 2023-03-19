import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrStatusGood } from "react-icons/gr";
import { nameActionCreator } from "../../store/userName";
import { Button, Input } from "@mui/material";
import ProfileDevice from "./profileDevice";

const Profile = function () {
  const user = useSelector((state) => state.userInfo.user);
  localStorage.setItem("defaultName", user.displayName);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.userName.name);
  const [inputValue, setInputValue] = useState(name);

  function inputChangeHandler(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  function sumbit() {
    localStorage.setItem("name", inputValue);
    const nameLocal = localStorage.getItem("name");
    dispatch(nameActionCreator(String(nameLocal)));
  }
  const windowWidth = window.innerWidth;
  return (
    (windowWidth <= 800 && <ProfileDevice />) || (
      <div>
        <div className="profile">
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
      </div>
    )
  );
};

export default Profile;
