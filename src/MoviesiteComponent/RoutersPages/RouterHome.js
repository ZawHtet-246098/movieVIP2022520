import React from "react";
import {
  Navbar,
  Home,
  EnjoyTv,
  Questions,
  Footer,
  FinancialPage,
} from "../Components/ImportComponets";

const RouterHome = () => {
  return (
    <main className="section">
      <div className="home-page">
        <div className="nav-section">
          <Navbar />
        </div>
        <div className="home-section">
          <Home />
        </div>
      </div>

      <EnjoyTv />
      <FinancialPage />
      <Questions />
      <Footer />
    </main>
  );
};

export default RouterHome;
