import { useState } from "react";

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  function dispatchMessage(e) {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
    console.log("sendMessage", message);
  }
  return (
    <>
      <form onSubmit={dispatchMessage}>
        <div className="messageForm">
            <input
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage} disabled={!message} >
              Send
            </button>
        </div>
      </form>
    </>
  );
};
export default SendMessageForm;
