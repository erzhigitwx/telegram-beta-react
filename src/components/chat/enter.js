function handlerEnter(event, sendMessage) {
    if (event.key === "Enter") {
      sendMessage(event);
    }
  }

export default handlerEnter;