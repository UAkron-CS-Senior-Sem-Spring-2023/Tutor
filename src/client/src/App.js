import './App.css';
import io from 'socket.io-client';

//Connect to backend
const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
