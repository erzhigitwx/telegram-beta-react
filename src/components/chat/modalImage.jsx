import React from "react";
import ReactDOM from "react-dom";
import "../../styles/chat.scss";

const modal = document.getElementById("modal");

const ModalImage = function ({ url, setIsOpen }) {
  function closeHandler() {
    setIsOpen(false);
  }
  return ReactDOM.createPortal(
    <div className="modal-image" onClick={closeHandler}>
      <img src={url} alt="sent file" className="modal-image__content"
      />
    </div>,
    modal
  );
};

export default ModalImage;
