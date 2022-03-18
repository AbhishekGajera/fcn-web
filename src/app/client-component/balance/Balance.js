import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Balance = () => {
  return (
    <div>
        <div className="page-header">
          <h3 className="page-title"> Balance </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Balance</a></li>
              <li className="breadcrumb-item active" aria-current="page">Balance</li>
            </ol>
          </nav>
        </div>
       <div className="row">
       {/* <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-4">Deposit <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                                
                                
            <button type="button" className="btn btn-gradient-primary btn-fw mb-2 center">Click Here</button>

              </div>
            </div>
          </div> */}
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-4">Deposit <i className="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
              
                <button type="button" className="btn btn-gradient-primary btn-fw mb-2 center">Click Here</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-4">WithDraw <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
               
                <button type="button" className="btn btn-gradient-primary btn-fw mb-2">Click Here</button>
              </div>
            </div>
          </div>
       </div>
      </div>
  )
}

export default Balance