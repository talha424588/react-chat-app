import { useEffect, useRef } from "react";

function MessageContainer({ messages }) {
  const messageRef = useRef();
  useEffect(() => {
    if (messageRef && messageRef.current) {
      messageRef.current.scrollTo({
        top: messageRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="message-container" ref={messageRef}>
      {messages.map((m, index) => (
        <div key={index} className="user-message">
          <div className="message-content">
            <div className="message">{m.message}</div>
            <div className="sender">({m.user})</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MessageContainer;
