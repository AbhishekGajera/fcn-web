import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, } from '@fortawesome/fontawesome-free-solid'
import { Trans } from 'react-i18next';
import { useCookies  } from 'react-cookie';
import {
  getUsers,
  getUsersRecent,
  getLeadsDash,
  getLeads,
  getBranches,
  getIBOs,
} from "../../utils/APIs";
import { useUrl } from "../../utils/Functions/useUrl";



const Dashboard = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['user']);
  const [itemlist, setitemlist] = useState([]);
  const [itemlistdash, setitemlistdash] = useState([]);


  const [isLoading, setIsLoading] = useState(true)
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);




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
        data: [10, 19, 3, 5, 2, 3, 11, 9, 13],
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

  const list = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getUsersRecent(
          itemsPerPage,
          +itemOffset + 1
        )
      ).data;
      setitemlist(items?.results);
      setPageCount(items?.totalPages);
    } catch (error) {


    }
    setIsLoading(false)
  };

  const leadlist = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getLeadsDash(
          itemsPerPage,
          +itemOffset + 1
        )
      ).data;
      setitemlistdash(items?.results);
      setPageCount(items?.totalPages);
      setIsLoading(false)
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        });
      }
    }
  }

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage]);
  useEffect(() => {
    leadlist();
  }, [itemOffset, itemsPerPage]);
  console.log("it", itemlist)

  return (
    <>
    <div className="mb-3">
        <div className="card">
          <div className="card-body">
            <h4 className="welcome-text mb-0">Welcome , <Trans>{cookies?.user?.name}</Trans></h4>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="card">
          <div className="card-body">
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
              <div className="col-md-4 text-white" style={{ borderRadius: '8px', padding: '26px 20px', background: '#6A6CFF' }}>
                <div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/training/free")}>
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-chalkboard-teacher"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>500+</h4>
                      <h6 className="card-text">Training</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/trading/demat")}>
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-chart-bar"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>45,6334+</h4>
                      <h6 className="card-text">Trading</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/investment/powerone")}>
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-money-bill-wave"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>95,5741+</h4>
                      <h6 className="card-text">Investments</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/travel/ourplan")}>
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-building"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>1400+</h4>
                      <h6 className="card-text">Real Estate</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/travel/ourplan")}>
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-camera-retro"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>1400+</h4>
                      <h6 className="card-text">Digital Studio</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/travel/ourplan")} >
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-money-check-alt"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>1400+</h4>
                      <h6 className="card-text">Loan</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/travel/ourplan")} >
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-school"]} className="float-right" size="xl" />

                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>1400+</h4>
                      <h6 className="card-text">Foreign Education</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/travel/ourplan")} >
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-credit-card"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>1400+</h4>
                      <h6 className="card-text">Visa</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/travel/ourplan")} >
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-plane"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>1400+</h4>
                      <h6 className="card-text">International Tour</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3" onClick={() => history.push("/travel/ourplan")} >
                    <div className="symbol" style={{ marginRight: '16px' }}>
                      <div className="symbol-label">
                        <FontAwesomeIcon icon={["fas", "fa-plane"]} className="float-right" size="xl" />
                      </div>
                    </div>
                    <div style={{ marginLeft: '16px' }}>
                      <h4>1400+</h4>
                      <h6 className="card-text">Air Tickets/Hotel Booking</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div>
                  <div className="row">
                    <div className="col-md-4 mb-3" onClick={() => history.push("/travel/ourplan")}>
                      <div className="card">
                        <div className="card-body" style={{ padding: '16px', height: '130px', border: '1px solid rgba(0,0,0,.05)', borderRadius: '0.375rem', boxShadow: '0px 0px 13px 0px rgb(35 19 196 / 8%)' }}>
                          <div className="row">
                            <div className="col-md-6">
                              <h4>1400</h4>
                            </div>
                            <div className="col-md-6">
                              <FontAwesomeIcon icon={["fas", "fa-plane"]} className="float-right" size="xl" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <h6 className="text-muted card-text">Travels</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3" onClick={() => history.push("/travel/ourplan")}>
                      <div className="card">
                        <div className="card-body" style={{ padding: '16px', height: '130px', border: '1px solid rgba(0,0,0,.05)', borderRadius: '0.375rem', boxShadow: '0px 0px 13px 0px rgb(35 19 196 / 8%)' }}>
                          <div className="row">
                            <div className="col-md-6">
                              <h4>1400</h4>
                            </div>
                            <div className="col-md-6">
                              <FontAwesomeIcon icon={["fas", "fa-coins"]} className="float-right" size="xl" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <h6 className="text-muted card-text">Demat Account</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3" onClick={() => history.push("/travel/ourplan")}>
                      <div className="card">
                        <div className="card-body" style={{ padding: '16px', height: '130px', border: '1px solid rgba(0,0,0,.05)', borderRadius: '0.375rem', boxShadow: '0px 0px 13px 0px rgb(35 19 196 / 8%)' }}>
                          <div className="row">
                            <div className="col-md-6">
                              <h4>1400</h4>
                            </div>
                            <div className="col-md-6">
                              <FontAwesomeIcon icon={["fas", "fa-money-bill-wave"]} className="float-right" size="xl" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <h6 className="text-muted card-text">Financial Planning</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3" onClick={() => history.push("/travel/ourplan")}>
                      <div className="card">
                        <div className="card-body" style={{ padding: '16px', height: '130px', border: '1px solid rgba(0,0,0,.05)', borderRadius: '0.375rem', boxShadow: '0px 0px 13px 0px rgb(35 19 196 / 8%)' }}>
                          <div className="row">
                            <div className="col-md-6">
                              <h4>1400</h4>
                            </div>
                            <div className="col-md-6">
                              <FontAwesomeIcon icon={["fas", "fa-coins"]} className="float-right" size="xl" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <h6 className="text-muted card-text">SIP</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3" onClick={() => history.push("/travel/ourplan")}>
                      <div className="card">
                        <div className="card-body" style={{ padding: '16px', height: '130px', border: '1px solid rgba(0,0,0,.05)', borderRadius: '0.375rem', boxShadow: '0px 0px 13px 0px rgb(35 19 196 / 8%)' }}>
                          <div className="row">
                            <div className="col-md-6">
                              <h4>1400</h4>
                            </div>
                            <div className="col-md-6">
                              <FontAwesomeIcon icon={["fas", "fa-heartbeat"]} className="float-right" size="xl" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <h6 className="text-muted card-text">Insurance</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3" onClick={() => history.push("/travel/ourplan")}>
                      <div className="card">
                        <div className="card-body" style={{ padding: '16px', height: '130px', border: '1px solid rgba(0,0,0,.05)', borderRadius: '0.375rem', boxShadow: '0px 0px 13px 0px rgb(35 19 196 / 8%)' }}>
                          <div className="row">
                            <div className="col-md-6">
                              <h4>1400</h4>
                            </div>
                            <div className="col-md-6">
                              <FontAwesomeIcon icon={["fas", "fa-credit-card"]} className="float-right" size="xl" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <h6 className="text-muted card-text"> Passport</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div style={{ padding: '16px', borderRadius: '0.375rem' }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel-hdr" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.07)' }}>
                      <h6>Recent Clients</h6>
                    </div>
                    <div className="panel-container show p-3">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="thead-light">
                            <tr>
                              <th> Name </th>
                              <th> Contact no. </th>
                              <th> Branch </th>
                              <th> IBO </th>
                              <th> Email </th>


                            </tr>
                          </thead>
                          <tbody>
                            {itemlist?.map((item) => {
                              return (
                                <tr>
                                  <td>{item?.name}</td>
                                  <td>{item?.contactno}</td>
                                  <td>{item?.branch}</td>
                                  <td>{item?.IBO}</td>
                                  <td>{item?.email}</td>

                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div style={{ padding: '16px', borderRadius: '0.375rem' }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel-hdr" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.07)' }}>
                      <h6>Recent Leads</h6>
                    </div>
                    <div className="panel-container show p-3">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="thead-light">
                            <tr>
                              <th> Name </th>
                              <th> Title </th>
                              <th> Branch Name </th>
                              <th> Email </th>
                              <th> Phone </th>
                            </tr>
                          </thead>
                          <tbody>
                            {itemlistdash?.map((item, index) => {
                              return (
                                <tr>
                                  <td>{item?.name}</td>
                                  <td>{item?.title}</td>
                                  <td>{item?.branch}</td>
                                  <td>{item?.email}</td>
                                  <td>{item?.contactno}</td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
