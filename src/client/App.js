import React, { useState } from "react";
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AuthDetails from './components/AuthDetails';

function App() {
  const [currentForm, setCurrentFrom] = useState('login');

  const toggleForm = (formName) => {
    setCurrentFrom(formName);
  }
  return (
    <div className="App">
         {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
         }
    </div>
  );
}

export default App;
