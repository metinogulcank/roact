import './App.css';
import io from 'socket.io-client';
import Chat from "./Chat";
import { useState } from "react";

const socket =io.connect("http://localhost:3001");

function App() {
  const  [username, setUsername] = useState("");
  const  [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
     if(username !== "" && room !==""){
     socket.emit("join_room",room);
     setShowChat(true);
    }
 };
  
  return (
    <div className="App">
      {!showChat ?(
      <div className='joinChatContainer'>
      <h3>Mesaja Katıl:)</h3>
      <input
       type="text"
        placeholder="Roact..."
        onChange={(event)=> {
          setUsername(event.target.value);
          }}
          />
      <input
       type="text" 
       placeholder="Oda ID..."
       onChange={(event)=> {
        setRoom(event.target.value);
       }}
       />
      <button onClick = {joinRoom}>Odaya Katıl:)</button>
      </div>
      )
    : (
      <Chat socket={socket} username={username} room={room} />
     )}
      </div>
  );
}

export default App;
