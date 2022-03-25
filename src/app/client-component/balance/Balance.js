import React from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const Balance = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Balance </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Balance
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Balance
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <Deposit />
        <Withdraw />
      </div>
    </div>
  );
};

export default Balance;
