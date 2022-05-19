import React from "react";
import LoginForm from "../Components/Login-form/LoginForm";
import logo from "../Components/Navbar/logo.png";
import LoginFormFooter from "../Components/LoginFormFooter/LoginFormFooter";
const RouterSingin = () => {
  return (
    <body className="singIn-page">
      <div className="navbar-first-section">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <LoginForm />
      <LoginFormFooter />
    </body>
  );
};

export default RouterSingin;
