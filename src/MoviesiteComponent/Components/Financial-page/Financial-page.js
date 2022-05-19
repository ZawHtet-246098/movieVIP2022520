import React from "react";
import "./Financial-page.css";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useGlobalContext } from "../../context";

const FinanciclPage = () => {
  const { data } = useGlobalContext();
  return (
    <div className="MainFinancialPage">
      <div className="breakline"></div>
      <div className="FinancialPage">
        <h1>{data.financialtitle}</h1>
        <div className="card-container">
          <div>
            <h3>{data.financialoneh3}</h3>
            <h5>{data.financialoneh5}</h5>
          </div>
          <div>
            <h3>{data.financialtwoh3}</h3>
            <h5>{data.financialtwoh5}</h5>
          </div>
          <div>
            <h3>{data.financialthreeh3}</h3>
            <h5>{data.financialthreeh5}</h5>
          </div>
        </div>
        <button>
          {data.financialbutton} {<BsArrowRightSquareFill />}
        </button>
      </div>
    </div>
  );
};

export default FinanciclPage;
