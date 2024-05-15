import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Lobby = ({ joinRoom }) => {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();

  return (
    <>
      <div className="container">
        <div className="row lobby_row">
          <div className="col-lg-6">
            <Form
              className="lobby card"
              onSubmit={(e) => {
                e.preventDefault();
                joinRoom(user, room);
              }}
            >
                <Form.Control
                  placeholder="name"
                  onChange={(e) => setUser(e.target.value)}
                />
                <Form.Control
                  placeholder="room"
                  onChange={(e) => setRoom(e.target.value)}
                />
              <Button variant="success" type="submit" disabled={!user || !room}>
                Join
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lobby;
