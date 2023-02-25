import './App.css';
import io from 'socket.io-client';

//Connect to backend
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
    <h1> Join a room</h1>
    <input type="text" placeholder="Your name"></input>
    <input type="text" placeholder="Room id" ></input>
    <button> Join</button>
    </div>
  );
}

export default App;
