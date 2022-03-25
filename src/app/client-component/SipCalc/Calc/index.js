import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Tab, Col, Nav } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

const Calc = () => {
  const [type, settype] = useState(0);

  const [amounts, setamounts] = useState(25000);
  const [totalYear, settotalYear] = useState(10);
  const [returnRateAmount, setreturnRateAmount] = useState(12);

  const [totalValue, settotalValue] = useState(0);
  const [futureValues, setfutureValues] = useState(0);
  const [investedValue, setinvestedValue] = useState(0);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  // chart management
  const [trafficOptions] = useState({
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: false,
  });

  const [trafficData, settrafficData] = useState({});
  useEffect(() => {
    // your code
    var ctx = document.getElementById("visitSaleChart").getContext("2d");

    var gradientdonut1 = ctx.createLinearGradient(0, 0, 0, 181);
    gradientdonut1.addColorStop(0, "rgba(54, 215, 232, 1)");
    gradientdonut1.addColorStop(1, "rgba(177, 148, 250, 1)");

    var gradientdonut2 = ctx.createLinearGradient(0, 0, 0, 50);
    gradientdonut2.addColorStop(0, "rgba(6, 185, 157, 1)");
    gradientdonut2.addColorStop(1, "rgba(132, 217, 210, 1)");

    const newTrafficData = {
      datasets: [
        {
          data: [investedValue, futureValues],
          backgroundColor: [gradientdonut1, gradientdonut2],
          hoverBackgroundColor: [gradientdonut1, gradientdonut2],
          borderColor: [gradientdonut1, gradientdonut2],
          legendColor: [gradientdonut1, gradientdonut2],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["invested amount", "Est. returns"],
    };
    settrafficData(newTrafficData);
  }, [investedValue, futureValues]);

  React.useEffect(() => {
    calculateResult();
  }, [amounts, totalYear, returnRateAmount, type]);

  const calculateResult = () => {
    let investment = amounts;
    let instalments;
    if (type === 0) {
      var monthlyRate = returnRateAmount / 12 / 100;
      var months = totalYear * 12;
      var futureValue = 0;

      var total = investment * totalYear * returnRateAmount;

      futureValue =
        (investment *
          (1 + monthlyRate) *
          (Math.pow(1 + monthlyRate, months) - 1)) /
        monthlyRate;
      instalments = investment * totalYear * 12;
    } else {
      var total = investment;
      futureValue = Math.round(
        Math.pow(1 + returnRateAmount / 100, totalYear) * amounts
      );
      instalments = investment;
    }

    settotalValue(total === "NaN" ? "0" : total);
    setfutureValues(Math.round(futureValue));
    setinvestedValue(instalments);
  };

  const onChangeAmount = (changeEvent) => {
    if (changeEvent.target.value < 100001) {
      setamounts(changeEvent.target.value);
    }

    if (
      changeEvent.target.value > 100000 &&
      !isNaN(+changeEvent.target.value)
    ) {
      setamounts(100000);
    }
  };

  const onChangeRate = (changeEvent) => {
    if (changeEvent.target.value < 31) {
      setreturnRateAmount(changeEvent.target.value);
    }

    if (changeEvent.target.value > 30 && !isNaN(+changeEvent.target.value)) {
      setreturnRateAmount(30);
    }
  };

  const onChangeYear = (changeEvent) => {
    if (changeEvent.target.value < 31) {
      settotalYear(changeEvent.target.value);
    }

    if (changeEvent.target.value > 30 && !isNaN(+changeEvent.target.value)) {
      settotalYear(10);
    }
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 ">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-sample"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Enter Amount
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Amount"
                              name="amount"
                              {...register("amount", { required: true })}
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Enter Account-number
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Account-number"
                              name="account-number"
                              {...register("account-number", {
                                required: true,
                              })}
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Enter Account-number
                          </label>
                          <div className="col-sm-9">
                            <select className="form-select">
                              <option selected={true}>Surat</option>
                              <option>Masma</option>
                              <option>Olpad</option>
                              <option>Navsari</option>
                              <option>Valsad</option>
                            </select>
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Training Type
                          </label>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="android"
                                  {...register("android", { required: true })}
                                />
                                <i className="input-helper"></i>
                                Android
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="iphone"
                                  {...register("iphone", { required: true })}
                                />
                                <i className="input-helper"></i>
                                IPhone
                              </label>
                            </div>
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="text-center mb-4 font-weight-light">
                      for bank details{" "}
                      <a
                        onClick={() => window.open("/user-pages/bank-details")}
                        className="text-primary"
                      >
                        click here
                      </a>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn  btn-primary btn-sm font-weight-medium auth-form-btn "
                        type="submit"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        <div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Col sm={12}>
                    <Nav variant="pills" className="d-flex row">
                      <Nav.Item onClick={() => settype(0)}>
                        <Nav.Link eventKey="first">SIP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item onClick={() => settype(1)}>
                        <Nav.Link eventKey="second">Lumpsum</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>{" "}
                  <br />
                  <div style={{ padding: "0px !important" }}>
                    <Tab.Content style={{ border: "none" }}>
                      <Tab.Pane eventKey="first">
                        <div style={{ margin: "10px 0px" }}>
                          <div className="investmentInput-controller">
                            <span>Monthly investment</span>
                            <div>
                              <input
                                type="text"
                                className="sipInput"
                                id="exampleInputEmail1"
                                name="investment"
                                value={amounts}
                                onChange={onChangeAmount}
                              />{" "}
                              ₹
                            </div>
                          </div>
                          <input
                            type="range"
                            style={{ width: "100%", accentColor: "#00d09c" }}
                            value={amounts}
                            onChange={onChangeAmount}
                            size="lg"
                            tooltip="off"
                            variant="primary"
                            max={100000}
                          />
                        </div>
                        <div style={{ margin: "10px 0px" }}>
                          <div className="investmentInput-controller">
                            <span>Expected return rate (p.a)</span>
                            <div>
                              <input
                                type="text"
                                className="sipInput"
                                id="exampleInputEmail1"
                                name="investment"
                                value={returnRateAmount}
                                onChange={onChangeRate}
                              />{" "}
                              %
                            </div>
                          </div>
                          <div>
                            <input
                              type="range"
                              style={{ width: "100%", accentColor: "#00d09c" }}
                              value={returnRateAmount}
                              onChange={onChangeRate}
                              size="lg"
                              tooltip="off"
                              variant="primary"
                              max={30}
                            />
                          </div>
                        </div>
                        <div style={{ margin: "10px 0px" }}>
                          <div className="investmentInput-controller">
                            <span>Time period</span>
                            <div>
                              <input
                                type="text"
                                className="sipInput"
                                id="exampleInputEmail1"
                                name="investment"
                                value={totalYear}
                                onChange={onChangeYear}
                              />{" "}
                              Yr
                            </div>
                          </div>
                          <input
                            type="range"
                            style={{ width: "100%", accentColor: "#00d09c" }}
                            value={totalYear}
                            onChange={onChangeYear}
                            size="lg"
                            tooltip="off"
                            variant="primary"
                            max={30}
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div style={{ margin: "10px 0px" }}>
                          <div className="investmentInput-controller">
                            <span>Total investment</span>
                            <div>
                              <input
                                type="text"
                                className="sipInput"
                                id="exampleInputEmail1"
                                name="investment"
                                value={amounts}
                                onChange={onChangeAmount}
                              />{" "}
                              ₹
                            </div>
                          </div>
                          <input
                            type="range"
                            style={{ width: "100%", accentColor: "#00d09c" }}
                            value={amounts}
                            onChange={onChangeAmount}
                            size="lg"
                            tooltip="off"
                            variant="primary"
                            max={100000}
                          />
                        </div>
                        <div style={{ margin: "10px 0px" }}>
                          <div className="investmentInput-controller">
                            <span>Expected return rate (p.a)</span>
                            <div>
                              <input
                                type="text"
                                className="sipInput"
                                id="exampleInputEmail1"
                                name="investment"
                                value={returnRateAmount}
                                onChange={onChangeRate}
                              />{" "}
                              %
                            </div>
                          </div>
                          <div>
                            <input
                              type="range"
                              style={{ width: "100%", accentColor: "#00d09c" }}
                              value={returnRateAmount}
                              onChange={onChangeRate}
                              size="lg"
                              tooltip="off"
                              variant="primary"
                              max={30}
                            />
                          </div>
                        </div>
                        <div style={{ margin: "10px 0px" }}>
                          <div className="investmentInput-controller">
                            <span>Time period</span>
                            <div>
                              <input
                                type="text"
                                className="sipInput"
                                id="exampleInputEmail1"
                                name="investment"
                                value={totalYear}
                                onChange={onChangeYear}
                              />{" "}
                              Yr
                            </div>
                          </div>
                          <input
                            type="range"
                            style={{ width: "100%", accentColor: "#00d09c" }}
                            value={totalYear}
                            onChange={onChangeYear}
                            size="lg"
                            tooltip="off"
                            variant="primary"
                            max={30}
                          />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px 0px",
                    }}
                  >
                    <span>Invested amount</span>
                    <span>{numberWithCommas(investedValue)} &nbsp; ₹</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px 0px",
                    }}
                  >
                    <span>Est. returns</span>
                    <span>
                      {numberWithCommas(futureValues - investedValue)} &nbsp; ₹
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px 0px",
                    }}
                  >
                    <span>Total value</span>
                    <span>{numberWithCommas(futureValues)} &nbsp; ₹</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <button
                    type="button"
                    className="btn btn-gradient-primary btn-fw"
                  >
                    Invest now
                  </button>
                </h4>
                <Doughnut
                  data={trafficData}
                  options={trafficOptions}
                  id="visitSaleChart"
                />
                <div
                  id="traffic-chart-legend"
                  className="rounded-legend legend-vertical legend-bottom-left pt-4"
                >
                  <ul>
                    <li>
                      <span className="legend-dots bg-info"></span>Invested
                      amount
                    </li>
                    <li>
                      <span className="legend-dots bg-success"></span>Est.
                      returns
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mr-3 mb-3'>
              <h4 className="card-title text-right">
                  <button
                    type="button"
                    className="btn btn-gradient-primary btn-fw"
                    onClick={handleShow}
                  >
                    Withdrawal
                  </button>
                </h4>
                </div>
            </div>
          </div>
        </div>
        </>
  );
};

export default Calc;
