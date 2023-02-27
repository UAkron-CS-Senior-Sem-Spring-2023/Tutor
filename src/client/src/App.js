import './App.css';
import io from 'socket.io-client';
import Join from "./Join";

//Connect to backend
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className ="container">
    <h1> Join a room</h1>
    <Join />
    </div>
  );
}

export default App;
