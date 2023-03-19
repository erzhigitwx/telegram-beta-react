import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalImage from "./modalImage";

const Message = function ({ message, time, name, avatar }) {
  const date = new Date(time);
  const datetext = date.toTimeString();
  const currentTime = datetext.split(" ")[0].slice(0, -3);
  const user = useSelector((state) => state.userInfo.user);
  const [isOpen, setIsOpen] = useState(false);
  function clickImageHandler() {
    setIsOpen(!isOpen);
  }

  return (
    (isOpen && message.includes("data:") && (
      <ModalImage url={message} setIsOpen={setIsOpen} />
    )) || (
      <>
        {(avatar !== user.photoURL && (
          <div className="chat-message chat-message__another">
            <div className="chat-message__content chat-message__content-another">
              <p className="message-user__name">{name}</p>
              {(message.includes("data:") && (
                <img
                  src={message}
                  alt="selected file"
                  className="message-select__image"
                  onClick={() => clickImageHandler()}
                />
              )) || <p className="message-text">{message}</p>}
            </div>
            <p className="message-user__time chat-message__content-another">
              {currentTime}
            </p>
          </div>
        )) || (
          <div className="chat-message">
            <div className="chat-message__content">
              <p className="message-user__name">{name}</p>
              {(message.includes("data:") && (
                <img
                  src={message}
                  alt="selected file"
                  className="message-select__image"
                  onClick={() => clickImageHandler()}
                />
              )) || <p className="message-text">{message}</p>}
            </div>
            <p className="message-user__time">{currentTime}</p>
          </div>
        )}
      </>
    )
  );
};

export default Message;
