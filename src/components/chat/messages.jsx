import React from "react";
import { useSelector } from "react-redux";
import Message from "./message";

const Messages = function ({ messages, firstMessageDay }) {
  const user = useSelector((state) => state.userInfo.user);
  return messages.docs.reverse().map((msg, index) => (
    <div
      key={msg._document.data.value.mapValue.fields.createdAt.timestampValue}
    >
      {firstMessageDay.map((curr) => {
        if (index === curr) {
          const showDate = new Date(
            msg._document.data.value.mapValue.fields.createdAt.timestampValue
          );
          return (
            <div className="message-container__time">
              {showDate.getDate()}-{showDate.getMonth() + 1}-
              {showDate.getFullYear()}
            </div>
          );
        }
        return <></>;
      })}
      <div
        className={
          msg._document.data.value.mapValue.fields.photoURL.stringValue !==
          user.photoURL
            ? "message-container message-container__another"
            : "message-container"
        }
      >
        <img
          src={msg._document.data.value.mapValue.fields.photoURL.stringValue}
          alt={"avatar"}
          className={
            msg._document.data.value.mapValue.fields.photoURL.stringValue ===
            user.photoURL
              ? "message-container__avatar"
              : "message-container__avatar-another"
          }
        />
        <Message
          message={msg._document.data.value.mapValue.fields.text.stringValue}
          avatar={msg._document.data.value.mapValue.fields.photoURL.stringValue}
          time={
            msg._document.data.value.mapValue.fields.createdAt.timestampValue
          }
          id={msg._document.data.value.mapValue.fields.uid.stringValue}
          name={
            msg._document.data.value.mapValue.fields.displayName.stringValue
          }
        />
      </div>
    </div>
  ));
};

export default Messages;
