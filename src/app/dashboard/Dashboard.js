import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const [data] = useState({
    labels: [
      "free-cources",
      "paid-cources",
      "demat",
      "commodities",
      "forex",
      "powerone",
      "SSP",
      "CP",
      "insurance",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 19, 3, 5, 2, 3,11,9,13],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  });

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-home"></i>
          </span>{" "}
          Dashboard{" "}
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span></span>Overview{" "}
              <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <div
          onClick={() => history.push("/training/free")}
          className="col-md-4 stretch-card grid-margin"
        >
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
              <img
                src={require("../../assets/images/dashboard/circle.svg")}
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Training{" "}
                <i className="mdi mdi-lead-pencil mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">500+ students</h2>
              <h6 className="card-text">Increased by 60%</h6>
            </div>
          </div>
        </div>
        <div
          onClick={() => history.push("/trading/demat")}
          className="col-md-4 stretch-card grid-margin"
        >
          <div className="card bg-gradient-info card-img-holder text-white">
            <div className="card-body">
              <img
                src={require("../../assets/images/dashboard/circle.svg")}
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Trading{" "}
                <i className="mdi mdi-chart-line mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">45,6334+ users</h2>
              <h6 className="card-text">Increased by 10%</h6>
            </div>
          </div>
        </div>
        <div
          onClick={() => history.push("/investment/powerone")}
          className="col-md-4 stretch-card grid-margin"
        >
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img
                src={require("../../assets/images/dashboard/circle.svg")}
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Investments{" "}
                <i className="mdi mdi-briefcase-upload mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">95,5741+ investers</h2>
              <h6 className="card-text">Increased by 5%</h6>
            </div>
          </div>
        </div>
        <div onClick={() => history.push("/travel/ourplan")} className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-dark card-img-holder text-white">
            <div className="card-body">
              <img
                src={require("../../assets/images/dashboard/circle.svg")}
                className="card-img-absolute"
                alt="circle"
              />
              <h4 className="font-weight-normal mb-3">
                Travels{" "}
                <i className="mdi mdi-chart-line mdi-24px float-right"></i>
              </h4>
              <h2 className="mb-5">1400+ successfull tours</h2>
              <h6 className="card-text">Increased by 60%</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Courses Completed</h4>
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
