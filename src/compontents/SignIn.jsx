import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "./Firebase.config";
import { useUserContext } from "./UserContext";
import "./style/signin.css";

const SignIn = () => {
  const { fields, setFields } = useUserContext();

  const { email, password } = fields;
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("hit");

    if (email && password) {
      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log({ user });
        setFields({ email: "", password: "", confirmPassword: "" });
        if (user) {
          setUser(user.email, user.username);
          console.log(user.email);
          console.log(user.username);
        }
      } catch (error) {
        console.log("Login Error", error.message);
        console.log(error.code);
        if (error.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <section>
      <div className="signin-page">
        <div className="back-box">
          <h1 className="signin-top">Sign-In</h1>
          <div className="signin-line"></div>
          <form action="" onSubmit={submitHandler}>
            <div className="siginin-det">
              <div>
                <label htmlFor="email ">Email</label>
                <input
                  className="sig-email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={changeHandler}
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  className="sig-pass"
                  type="password"
                  id="password"
                  name="password"
                  onChange={changeHandler}
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button type="submit" className=" signin-btn">
                Sign-In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
