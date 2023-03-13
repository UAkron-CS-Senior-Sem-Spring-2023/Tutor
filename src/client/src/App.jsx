import './App.css';
import io from 'socket.io-client';
import React, {useState} from "react";
import Chat from './Chatbox';
//Connect to backend
const socket = io.connect("http://localhost:3001");

function App() {
  const [name, setName] = useState("");
  const [roomID, setRoomID] = useState("");
  const [connected, setConnected] = useState(false);

  function join(){
    if(name !== "" && roomID !== ""){
      setConnected(true);
      socket.emit("roomID", roomID);
    }
  }
  return ( !connected ? (<div className ="container">
    <h1> Join a room</h1>
    <form className="form">
      <input type="text" placeholder ="Your Name" onChange={(event)=>{setName(event.target.value)}}/>
      <input type ="text" placeholder="Room Id" onChange ={(event) =>{setRoomID(event.target.value)}}/>
      <button type="submit" onClick={join}> Join</button>
    </form>
    </div>)
    :
  (<div>
   <Chat socket = {socket} name={name} roomID={roomID} />
    </div>));
}

export default App;
