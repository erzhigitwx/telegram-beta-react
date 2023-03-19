import React, { useEffect, useRef } from "react";
import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";
import { inputActionCreator } from "../../store/inputValue";
import { db } from "../..";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import dayOfMessage from "./dayOfMessage";
import Messages from "./messages";
import UserButtons from "./userButtons";
import { imageActionCreator } from "../../store/images";
import ProfileDevice from "./profileDevice";

const Chat = function () {
  const user = useSelector((state) => state.userInfo.user);
  const value = useSelector((state) => state.inputValue.value);
  const images = useSelector((state) => state.image.image);
  const dispatch = useDispatch();
  const messageRef = collection(db, "messages");
  const queryRef = query(messageRef, orderBy("createdAt", "desc"));
  const [messages] = useCollection(queryRef, { idField: "id" });
  const scrollDown = useRef(null);
  const firstMessageDay = [0];
  const userName = useSelector((state) => state.userName.name);
  const show = useSelector((state) => state.showProfile.isShow);

  const sendMessage = async (e) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length !== 0) {
      e.preventDefault();
      const payload = {
        text: value,
        createdAt: serverTimestamp(),
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: userName,
      };
      dispatch(inputActionCreator(""));
      await addDoc(messageRef, payload);
    } else if (images !== null) {
      e.preventDefault();
      const payload = {
        text: images,
        createdAt: serverTimestamp(),
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: userName,
      };
      dispatch(imageActionCreator(null));
      await addDoc(messageRef, payload);
    }
  };
  dayOfMessage(messages, firstMessageDay);

  useEffect(() => {
    scrollDown.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [messages]);

  useEffect(() => {
    alert(
      "Hey, " +
        user.displayName +
        "." +
        " !!!this is a beta version and await the updates!!!"
    );
  }, [user.displayName]);
  return (
    (window.innerWidth <= 800 && (
      <>
        {(show && <ProfileDevice />) || (
          <div className="chat">
            <Profile />
            <div className="active-chat">general chat</div>
            <div className="chat-content__wrapper">
              <div className="chat-content">
                {messages && (
                  <Messages
                    messages={messages}
                    firstMessageDay={firstMessageDay}
                  />
                )}
                <div ref={scrollDown}></div>
                <UserButtons value={value} sendMessage={sendMessage} />
              </div>
            </div>
          </div>
        )}
      </>
    )) || (
      <>
        <Profile />
        <div className="chat">
          <div className="active-chat">general chat</div>
          <div className="chat-content__wrapper">
            <div className="chat-content">
              {messages && (
                <Messages
                  messages={messages}
                  firstMessageDay={firstMessageDay}
                />
              )}
              <div ref={scrollDown}></div>
              <UserButtons value={value} sendMessage={sendMessage} />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Chat;
