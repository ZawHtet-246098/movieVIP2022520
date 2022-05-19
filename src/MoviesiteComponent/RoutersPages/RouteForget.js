import React from "react";
import ForgetEmail from "../Components/Login-form/ForgetEmail";
import { Navbar } from "../Components/ImportComponets";
import LoginFormFooter from "../Components/LoginFormFooter/LoginFormFooter";

const RouteForget = () => {
  return (
    <main className="forgetpass-page">
      <Navbar />
      <hr />
      <ForgetEmail />
      <LoginFormFooter />
    </main>
  );
};

export default RouteForget;
