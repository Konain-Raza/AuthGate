import React, { useState } from "react";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase-config";

const Form = () => {
  const [formName, setFormName] = useState("login");

  const toggleForm = (event) => {
    event.preventDefault();
    setFormName((prevFormName) =>
      prevFormName === "login" ? "signup" : "login"
    );
  };
  
  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    const remember = data.get("rememberme") === null ? "off" : "on";
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Successfully logged in!");
        event.target.reset()

      })
      .catch((error) => {
        toast.error(`Error signing in: ${error.message}`);
      event.target.reset()

      });
  };
  
  const handleSignup = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Successfully signed up!");
        event.target.reset();
      })
      .catch((error) => {
        toast.error(`Error signing up: ${error.message}`);
      event.target.reset()

      });
  };
  
  const handleForm = (event) => {
    event.preventDefault();
    formName === "login" ? handleLogin(event) : handleSignup(event);
  };
  

  return (
    <div>
      {formName === "login" ? (
        <form className="auth-form" id="loginform" onSubmit={handleForm}>
          <h2>Account Login</h2>
          <p id="desc">
            If you are already a member, you can login with your email address
            and password.
          </p>
          <div className="input-container">
            <label htmlFor="login-email">Email address</label>
            <input
              type="email"
              id="login-email"
              className="input"
              name="email"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              className="input"
              name="password"
              required
            />
          </div>
          <div className="remember">
            <input type="checkbox" name="rememberme" id="rememberme" />
            <label htmlFor="rememberme">Remember Me</label>
          </div>
          <button type="submit" id="submit-btn">
            Login
          </button>
          <p id="link-form">
            Don't have an account?{" "}
            <button onClick={toggleForm}> Sign up here</button>
          </p>
        </form>
      ) : (
        <form className="auth-form" id="signupform" onSubmit={handleForm}>
          <h2>Account Signup</h2>
          <p id="desc">Become a member and enjoy exclusive promotions.</p>
          <div className="input-container">
            <label htmlFor="signup-name">Full Name</label>
            <input type="text" id="signup-name" className="input" name="name"required />
          </div>
          <div className="input-container">
            <label htmlFor="signup-email">Email address</label>
            <input type="email" id="signup-email" className="input" name="email" required />
          </div>
          <div className="input-container">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              className="input"
              required
              name="password"
            />
          </div>
          <div className="input-container">
            <label htmlFor="signup-gender">Gender</label>
            <select id="signup-gender" name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="signup-dob">Date of Birth</label>
            <input type="date" id="signup-dob" className="input" required />
          </div>
          <button type="submit" id="submit-btn">
            Register Account
          </button>
          <p id="link-form">
            Already have an account ?{" "}
            <button onClick={toggleForm}> Login here</button>
          </p>
        </form>
      )}
    </div>
  );
};

export default Form;
