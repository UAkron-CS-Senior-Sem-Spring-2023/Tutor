import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
        console.log(userCredential);
    })
    .catch((error) => {
        console.log(error);
    });
  };

  return (
    <div className="sign-in-container">
      <h1>Tutoring System</h1> 
      <form onSubmit={handleSumbit}>
        <h2>Enter Account Details</h2> 
        <form className="login-form" onSumbit={handleSumbit}>
        <label for="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail (e.target.value)}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        ></input>
        <label for="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword (e.target.value)}   
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
            ></input>
            <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here!
        </button>
        </form>
    </div>
  );
};

export default SignIn;
