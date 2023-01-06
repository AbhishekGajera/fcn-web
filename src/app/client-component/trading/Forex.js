import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Forex = () => {
  return (
    <div>
        <div className="page-header">
          <h3 className="page-title"> Forex </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Trading</a></li>
              <li className="breadcrumb-item active" aria-current="page">Forex</li>
            </ol>
          </nav>
        </div>
       <div className="row">
       
          <div className="col-md-6 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Forex Account <i className="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">Open Your Forex Account</h2>
                <h6 className="card-text"> <Link to={{ pathname: "https://fcntraining.co.in/Downloads/tmsetup.exe" }} target="_blank"> Click Here</Link></h6>

              </div>
            </div>
          </div>
       {/* <div className="col-md-6 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
              <h4 className="font-weight-normal mb-3">Demat Account <i className="mdi mdi-chart-line mdi-24px float-right"></i>
              <img src={require("../../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                </h4>
                <h2 className="mb-5">Open Your Demat Account</h2>
               <h6 className="card-text"> <Link to={{ pathname: "https://www.angelone.in/" }} target="_blank"> Click Here</Link></h6>
              </div>
            </div>
          </div> */}

       </div>
      </div>
  )
}

export default Forex