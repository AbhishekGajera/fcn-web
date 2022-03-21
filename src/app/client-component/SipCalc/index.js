import React from "react";
import Calc from "./Calc";

const SipCalc = () => {

  return (
    <div>
      <div>
        <div className="page-header">
          <h3 className="page-title">Calculators</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Utils
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
              calculators
              </li>
            </ol>
          </nav>
        </div>
        <Calc />
      </div>
    </div>
  );
};

export default SipCalc;
