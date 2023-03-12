import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [name, setName] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    })
    .catch((error) => {
        console.log(error);
    });
  };

  return (
    <div className = "auth-form-container">
        <h2>Register</h2>
      <form className="register-form" onSumbit={handleSumbit}>
        <label htmlFor="name">Full Name</label>
        <input value ={name} onChange={(e) => setName(e.target.value)} name ="name" id ="name" placeholder = "Full Name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="myemail@email.com" id="email"name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
        <button type="submit">Submit</button>
      </form>
      <button className="link-btn" onClick ={() => props.onFormSwitch('login')}>Already have an account? Log In here!</button>
    </div>
)
}

export default SignUp;
