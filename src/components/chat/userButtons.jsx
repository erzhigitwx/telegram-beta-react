import React from "react";
import { useDispatch } from "react-redux";
import { inputActionCreator } from "../../store/inputValue";
import handlerEnter from "./enter";
import { AiOutlinePaperClip } from "react-icons/ai";
import { imageActionCreator } from "../../store/images";

const UserButtons = function ({ value, sendMessage }) {
  const dispatch = useDispatch();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      dispatch(imageActionCreator(reader.result));
    };
  };
  return (
    <div className="chat-user__buttons">
      <input
        type="text"
        className="chat-user__input"
        value={value}
        onChange={(e) => dispatch(inputActionCreator(e.target.value))}
        onKeyPress={(event) => handlerEnter(event, sendMessage)}
      />
      <label htmlFor="upload" className="chat-user__buttons-selector__wrap">
        <AiOutlinePaperClip
          size={40}
          className="chat-user__buttons-selector__fake"
        />
        <input
          type="file"
          id="upload"
          style={{ display: "none" }}
          onChange={handleImageUpload}
          accept="image/*"
        />
      </label>
      <li className="chat-user__button" onClick={sendMessage}>
        Send
      </li>
    </div>
  );
};

export default UserButtons;
