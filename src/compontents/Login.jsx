import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "./Firebase.config";
import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";
import "./style/login.css";

const Login = () => {
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const { fields, setFields } = useUserContext();

  const { email, password, confirmPassword } = fields;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        username,
      });
      if (userDocRef) {
        alert("SignUp Success");
      }
    } catch (err) {
      console.log("Something Happened", err.message);
      console.log(err.code);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <section>
      <div className="login-pg">
        <h1 className="signup-top">
          SignUp
          <div className="signup-line"></div>
        </h1>

        <form action="" onSubmit={submitHandler}>
          <div className="signup-full-det">
            <div>
              <label htmlFor="username">Username</label>

              <input
                className="signup-box"
                type="text"
                id="username"
                name="username"
                onChange={changeHandler}
                placeholder="Username"
              />
            </div>
            <div className=" ">
              <label htmlFor="email">Email</label>
              <input
                className="signup-box"
                type="email"
                id="email"
                name="email"
                onChange={changeHandler}
                placeholder="Email"
              />
            </div>
            <div className=" ">
              <label htmlFor="password">Password</label>
              <input
                className="signup-box"
                type="password"
                id="password"
                name="password"
                onChange={changeHandler}
                placeholder="Password"
              />
            </div>
            <div className="">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="signup-box"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className=" signup-bottom-btn">
            <button className="signup-btn">Sign up</button>
            <button className="google-signup-btn" onClick={signInWithGoogle}>
              Google Login
            </button>
            <div className="login-btn">
              <Link to={"/SignIn"}>Login Here</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
