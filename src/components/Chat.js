import { Button } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import RoomUsers from "./RoomUser";

function Chat({ messages, sendMessage, closeConnection, users }) {
  console.log("total users",users,users.length); 
  return (
    <>
      <div className="leave-room">
        <Button variant="danger" onClick={() => closeConnection()}>
          Leave Room
        </Button>
      </div>
      <RoomUsers users={users} />
      <div className="chat">
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
      </div>
    </>
  );
}
export default Chat;
