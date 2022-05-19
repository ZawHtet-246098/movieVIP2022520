import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { FaFacebookSquare } from "react-icons/fa";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signin-form">
      <h1>Sign in</h1>
      <form>
        <input
          type="text"
          name="email"
          id="email"
          required
          placeholder="Email or phone number"
          onSubmit={formSubmit}
        />
        <input
          type="text"
          name="password"
          id="password"
          required
          value={value}
          onChange={handleChange}
          placeholder="Password"
        />

        {value === "" ? (
          <button type="submit" className="form-btn">
            Sign in
          </button>
        ) : (
          <Link to="/video">
            <button type="submit" className="form-btn">
              Sign in
            </button>
          </Link>
        )}

        <div className="rememberandneedone">
          <div className="rememberandneed">
            <input type="checkbox" id="forlabel" />
            <label htmlFor="forlabel">Remember me</label>
          </div>
          <div>
            <p>
              <Link to="/forgetpassword">Need help?</Link>
            </p>
          </div>
        </div>
      </form>
      <div className="form-footer">
        <div className="loginwithfacebook">
          <div className="icon">
            <FaFacebookSquare />
          </div>
          <p>Login with Facebook</p>
        </div>
        <div className="second-footer">
          <p>
            New to Netflix?
            <span>
              <Link to="/">Sing up now</Link>
            </span>
          </p>
        </div>
        <div className="third-footer">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <button onClick={() => setShow(!show)}>
              {show ? "Show less" : "Learn more"}
            </button>
          </p>
          {show && (
            <p>
              The information collected by Google reCAPTCHA is subject to the
              Google{" "}
              <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms">Terms of Service</a>,
              and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalized advertising by Google).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
