import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { db, auth } from "./firebase";
import "./Login.css";
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await auth.signInWithEmailAndPassword(email, password);

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const registerHandler = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePic,
      });

      db.collection("users").add({
        username: email,
        pwd: password,
      });

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="login">
      <div className='logo_text'>
        <span id='alumni'>Alumni</span><span id='dash'>-</span><span id='x'>X</span>
      </div>
      <form>
        {/* <input
          id="name"
          placeholder="Full name (for Registration)"
          type="reg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          id="reg"
          placeholder="Profile pic URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        /> */}

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>


      {/* <p>
        Not a member?{" "}
        <span className="login__register" onClick={registerHandler}>
          Register Now
        </span>
      </p> */}

    </div>
  );
};

export default Login;