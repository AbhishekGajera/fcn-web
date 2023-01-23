import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Calc from '../SipCalc/Calc';
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { ImageUpload, addPowerone, getAllUsers, getBranchesClient, userLogout, addTransaction } from '../../../utils/APIs';
import Spinner from '../../shared/Spinner';


const PowerOne = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['user']);
  const [user, setUser] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  const [itemlist, setitemlist] = React.useState([]);

  useEffect(() => {
    getAllUsersList();
    list();
  }, []);

  const list = async () => {
    try {
      const items = await (await getBranchesClient()).data;
      setitemlist(items?.results);
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE);
      }

      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        });
        setCookie("user", null, { path: "/" });
        userLogout(formData).finally(() => {
          history.push("/user-pages/login-1");
        });
      }
    }
  };

  const getAllUsersList = async () => {
    const allUsers = await getAllUsers();
    setUser(allUsers?.data?.results);
  };

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);

  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);

  const { register, handleSubmit, formState: { errors, isDirty, isValid }, getValues } = useForm({
    mode: "onChange"
  });

  const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 }, reset } = useForm({
    mode: "onChange"
  });

  const { register: register3, handleSubmit: handleSubmit3, formState: { errors: errors3 }, reset: reset3 } = useForm({
    mode: "onChange"
  });

  const values = getValues();

  const handlePanUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-panId');
    if (element) {
      element.click()
    }
  };

  const handlePassUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-passId');
    if (element) {
      element.click()
    }
  };

  const handleUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-id');
    if (element) {
      element.click()
    }
  };

  const handlepaymentUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-paymentId');
    if (element) {
      element.click()
    }
  };

  const onSubmitWithdraw = async (data) => {
    handleClose();
    const formData = JSON.stringify({
      'total': data.amount,
      'from_user': cookies?.user?.id,
      'to_user': data.branch,
      'type': "withdraw",
      'role': "branch",
      'status': 0
    })
    try {
      await addTransaction(formData);
      handleClose1();
      reset3();
      toast.success("Withdraw Request successfully");
    } catch (error) {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE);
      }
    }
  };

  const onSubmitDeposit = async (data) => {
    const formData = JSON.stringify({
      'total': data.amount,
      'from_user': cookies?.user?.id,
      'to_user': data.branch,
      'type': "deposit",
      'role': 'branch',
      'status': 0
    })
    try {
      await addTransaction(formData);
      reset();
      handleClose();
      toast.success("Deposit successfully");
    } catch (error) {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE);
      }
    }
  }

  const onSubmit = async (data) => {
    setisLoading(true)
    console.log(data);
    const Data = new FormData();
    var aadharcard_img = '';
    var pancard_img = '';
    var passbook_img = '';
    var payment_img = '';
    if (data.aadhar_card_img.length !== 0) {
      Data.append('file', data.aadhar_card_img[0]);
      aadharcard_img = await ImageUpload(Data)
    }
    if (data.pan_card_img.length !== 0) {
      Data.append('file', data.pan_card_img[0]);
      pancard_img = await ImageUpload(Data)
    }

    if (data.passbook_card_img.length !== 0) {
      Data.append('file', data.passbook_card_img[0]);
      passbook_img = await ImageUpload(Data)
    }

    if (data.payment_screenshot.length !== 0) {
      Data.append('file', data.payment_screenshot[0]);
      payment_img = await ImageUpload(Data)
    }

    if (aadharcard_img.error || pancard_img.error || passbook_img.error || payment_img.error) {
      toast.error(aadharcard_img.error.message);
    } else {
      delete data.deposit;
      delete data.deposit1;
      delete data.payment_gateway;
      delete data.passport_number;
      delete data.pan_number;
      delete data.aadhar_number;
      data.payment_screenshot = payment_img.secure_url;
      data.aadhar_card_img = aadharcard_img.secure_url;
      data.pan_card_img = pancard_img.secure_url;
      data.passbook_card_img = passbook_img.secure_url;
      try {
        setisLoading(false)
        await addPowerone(data)
        toast.success("Powerone created successfully");
        history.push('/investment/poweronelist');
      } catch (error) {
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error(process.env.REACT_APP_ERROR_MESSAGE);
        }
      }
    }
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Raise Funds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 ">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-sample"
                    onSubmit={handleSubmit2(onSubmitDeposit)}
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
                              {...register2("amount", { required: true })}
                            />
                            {errors2 && errors2.amount && <p style={{ color: "red" }}>Amount field is required field</p>}
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            To
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-control form-control-lg"
                              id="exampleFormControlSelect2"
                              name="branch"
                              {...register2("branch", {
                                required: true,
                              })}
                            >
                              <option value=''>--Select branch--</option>
                              {itemlist.map((item, index) => (
                                <option key={index} value={item?.id} label={item?.name} ></option>
                              ))}
                            </select>
                            {errors2 && errors2.branch && <p style={{ color: "red" }}>Select branch is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
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
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Withdraw Funds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 ">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form"
                    onSubmit={handleSubmit3(onSubmitWithdraw)}
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
                              {...register3("amount", { required: true })}
                            />
                            {errors3 && errors3.amount && <p style={{ color: "red" }}>amount is required field</p>}
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            To
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-control form-control-lg"
                              id="exampleFormControlSelect2"
                              name="branch"
                              {...register3("branch", {
                                required: true,
                              })}
                            >
                              <option value=''>--Select branch--</option>
                              {itemlist.map((item, index) => (
                                <option key={index} value={item?.id} label={item?.name} ></option>
                              ))}
                            </select>
                            {errors3 && errors3.branch && <p style={{ color: "red" }}>Select branch is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
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
      <Tabs defaultActiveKey="first"  >
        <Tab eventKey="first" title="PowerOne">
          <div className="page-header">
            <h3 className="page-title"> Opening Form / PowerOne  </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Invesment</a></li>
                <li className="breadcrumb-item active" aria-current="page">PowerOne</li>
              </ol>
            </nav>
          </div>
          <div className="row">
            <div className="col-12 grid-margin">
              {isLoading ? <Spinner /> : (
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">PowerOne</h4>
                    <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                      <p className="card-description mt-3"> Personal info </p>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-4 col-form-label">
                              Select Users
                            </label>
                            <div className="col-sm-6">
                              <select
                                className="form-control form-control-lg"
                                id="exampleFormControlSelect2"
                                name="selectUser"
                                {...register("user", {
                                  required: true,
                                })}
                              >
                                <option value=''>--Select User--</option>
                                {
                                  user?.map((item, index) => (
                                    <option
                                      key={index}
                                      value={item?.id}
                                      label={item?.name}
                                    ></option>
                                  ))}
                              </select>
                              {errors && errors.user && <p style={{ color: "red" }}>User is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-4 col-form-label">Email</label>
                            <div className="col-sm-8">
                              <Form.Control type="text"
                                name="email"
                                defaultValue={cookies?.user?.email}
                                {...register("email", { required: true })} />
                              {errors && errors.email && <p style={{ color: "red" }}>Email is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-4 col-form-label">Mobile</label>
                            <div className="col-sm-8">
                              <Form.Control type="text"
                                name="mobile"
                                defaultValue={cookies?.user?.contactno}
                                {...register("mobile", { required: true })} />
                              {errors && errors.mobile && <p style={{ color: "red" }}>Mobile is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                      </div>

                      <p className="card-description">Postal Address </p>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Address</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="address1" placeholder="Enter Your Address"
                                {...register("address", { required: false })} />

                              {errors && errors.address && <p style={{ color: "red" }}>address is required field</p>}

                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">City</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="city" placeholder="Enter Your city"
                                {...register("city", { required: false })} />

                              {errors && errors.city && <p style={{ color: "red" }}>city is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">State</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="state" placeholder="Enter Your state"
                                {...register("state", { required: false })} />

                              {errors && errors.state && <p style={{ color: "red" }}>state is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Country</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="country" placeholder="Enter Your country"
                                {...register("country", { required: false })} />

                              {errors && errors.country && <p style={{ color: "red" }}>country is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <p className="card-description">KYC </p>
                      <div className="row">
                        <div className="col-md-12">
                          <Form.Group className="row">
                            <label className="col-sm-2  col-form-label">KYC</label>
                            <div className="col-sm-3">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="pancard"
                                    {...register("pancard", { required: false })}
                                  />
                                  <i className="input-helper"></i>
                                  Pan card
                                </label>
                              </div>
                              <Form.Group className="row">
                                <div className="col-sm-12">
                                  <Form.Control
                                    id="input-panId"
                                    className="d-none"
                                    type="file"
                                    name="pan_card_img"
                                    multiple={false}
                                    {...register("pan_card_img")}
                                  />
                                  <button
                                    onClick={handlePanUpload}
                                    className={`btn btn-outline-${values?.pan_card_img?.[0]?.name ? " btn-primary" : " btn-primary"
                                      }`}
                                  >
                                    {values?.pan_card_img?.[0]?.name ? values?.pan_card_img?.[0]?.name : "Upload Pancard Image"}
                                  </button>
                                </div>
                              </Form.Group>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="aadharcard"
                                    {...register("aadharcard", { required: false })}
                                  />
                                  <i className="input-helper"></i>
                                  Adhaar card
                                </label>
                              </div>
                              <Form.Group className="row">
                                <div className="col-sm-12">
                                  <Form.Control
                                    id="input-id"
                                    className="d-none"
                                    type="file"
                                    name="aadhar_card_img"
                                    multiple={false}
                                    {...register("aadhar_card_img")}
                                  />
                                  <button
                                    onClick={handleUpload}
                                    className={`btn btn-outline-${values?.aadhar_card_img?.[0]?.name ? " btn-primary" : " btn-primary"
                                      }`}
                                  >
                                    {values?.aadhar_card_img?.[0]?.name ? values?.aadhar_card_img?.[0]?.name : "Upload Aadharcard"}
                                  </button>
                                </div>
                              </Form.Group>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="bankpassbook"
                                    {...register("bankpassbook", { required: false })}
                                  />
                                  <i className="input-helper"></i>
                                  Bank Passbook
                                </label>
                              </div>
                              <Form.Group className="row">
                                <div className="col-sm-12">
                                  <Form.Control
                                    id="input-passId"
                                    className="d-none"
                                    type="file"
                                    name="passbook_card_img"
                                    multiple={false}
                                    {...register("passbook_card_img")}
                                  />
                                  <button
                                    onClick={handlePassUpload}
                                    className={`btn btn-outline-${values?.passbook_card_img?.[0]?.name ? " btn-primary" : " btn-primary"
                                      }`}
                                  >
                                    {values?.passbook_card_img?.[0]?.name ? values?.passbook_card_img?.[0]?.name : "Upload Bank Passport"}
                                  </button>
                                </div>
                              </Form.Group>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">PAN Number</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="pan_number" placeholder="Enter Your Pan Number"
                                {...register("pan_number", { required: false })} />

                              {errors && errors.pan_number && <p style={{ color: "red" }}>panNo is required field</p>}
                            </div>
                          </Form.Group>

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Aadhar Number</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="aadhar_number" placeholder="Enter Your Aadhar Number"
                                {...register("aadhar_number", { required: false })} />

                              {errors && errors.aadhar_number && <p style={{ color: "red" }}>AadharNo is required field</p>}
                            </div>
                          </Form.Group>

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Passport Number</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="passport_number" placeholder="Enter Your Passport"
                                {...register("passport_number", { required: false })} />
                              {errors && errors.passport_number && <p style={{ color: "red" }}>passport is required field</p>}
                            </div>
                          </Form.Group>

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Voter ID Number</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="voter_id" placeholder="Enter Your voter Id Number"
                                {...register("voter_id", { required: false })} />

                              {errors && errors.voter_id && <p style={{ color: "red" }}>Voter is required field</p>}
                            </div>
                          </Form.Group>

                        </div>
                      </div>
                      <p className="card-description">PAYMENT DETAILS </p>
                      <div className="row">
                        <div className="col-md-7">
                          <Form.Group className="row">
                            <label className="col-sm-5 col-form-label">
                              Select Payment By
                            </label>
                            <div className="col-sm-7">
                              <select
                                className="form-control form-control-lg"
                                id="exampleFormControlSelect2"
                                name="method_by"
                                {...register("method_by", {
                                  required: true,
                                })}
                              >
                                <option value=''>--Select Payment Method--</option>
                                <option value="by_cash">By Cash</option>
                                <option value="by_gpay">By GooglePay</option>
                                <option value="by_card">By Card</option>
                              </select>
                              {errors && errors.method_by && <p style={{ color: "red" }}>Payment By is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-5">
                          <Form.Group className="row">
                            <label className="col-sm-5 col-form-label">Payment Number</label>
                            <div className="col-sm-7">
                              <Form.Control type="text" name="payment_no" placeholder="Enter Your Payment Number"
                                {...register("payment_no", { required: true })} />
                              {errors && errors.payment_no && <p style={{ color: "red" }}>Payment Number is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">By Cheque</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="cheque" placeholder="Enter Your cheque"
                                {...register("cheque", { required: false })} />

                              {errors && errors.cheque && <p style={{ color: "red" }}>Cheque is required field</p>}
                            </div>
                          </Form.Group>

                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">By NEFT</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="neft" placeholder="Enter Your NEFT"
                                {...register("neft", { required: false })} />

                              {errors && errors.neft && <p style={{ color: "red" }}>NEFT is required field</p>}
                            </div>
                          </Form.Group>

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">By RTGS</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="rtgs" placeholder="Enter Your RTGS"
                                {...register("rtgs", { required: false })} />

                              {errors && errors.rtgs && <p style={{ color: "red" }}>RTGS is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">By Payment Gateways</label>
                            <div className="col-sm-9">
                              <Form.Control type="text" name="payment_gateway" placeholder="Enter Your payment"
                                {...register("payment_gateway", { required: false })} />

                              {errors && errors.payment_gateway && <p style={{ color: "red" }}>Payment Gateway is required field</p>}
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className='row'>
                        <div className="col-md-8">
                          <Form.Group className="row">
                            <label className="col-sm-4 col-form-label">Payment Screenshot</label>
                            <div className="col-sm-8">
                              <Form.Control
                                id="input-paymentId"
                                className="d-none"
                                type="file"
                                name="payment_screenshot"
                                multiple={false}
                                {...register("payment_screenshot")}
                              />
                              <button
                                onClick={handlepaymentUpload}
                                className={`btn btn-outline-${values?.payment_screenshot?.[0]?.name ? " btn-primary" : " btn-primary"
                                  }`}
                              >
                                {values?.payment_screenshot?.[0]?.name ? values?.payment_screenshot?.[0]?.name : "Upload Payment Screenshot"}
                              </button>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="mt-3">
                        <button
                          className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                          type="submit"
                        // disabled={!isDirty || !isValid}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Tab>
        <Tab eventKey="second" title="Calculator">
          <Calc />
        </Tab>
        <Tab eventKey="third" title="Statement">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Mini Statement</h4>

                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Description </th>
                        <th> Credit </th>
                        <th> Debit </th>
                        <th> Amount </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> Herman Beck </td>
                        <td> fdsfsdfsd </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>
                      </tr>
                      <tr>
                        <td> Herman Beck </td>
                        <td>fdsfsdfsd</td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="fourth" title="Raise Funds">
          <div className="row">
            <div className="col-md-5 stretch-card grid-margin">
              <div className="card bg-gradient-danger card-img-holder text-white">
                <div className="card-body">
                  <img src={require("../../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                  <h4 className="font-weight-normal mb-3">Raise Funds <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">Raise Funds</h2>
                  <button type="button" className="btn btn-gradient-primary btn-fw mb-2 center" onClick={handleShow}>Click Here</button>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="fifth" title="Withdraw Funds">
          <div className="row">
            <div className="col-md-5 stretch-card grid-margin">
              <div className="card bg-gradient-danger card-img-holder text-white">
                <div className="card-body">
                  <img src={require("../../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                  <h4 className="font-weight-normal mb-3">Withdraw Funds <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">Withdraw Funds</h2>
                  <button type="button" className="btn btn-gradient-primary btn-fw mb-2 center" onClick={handleShow1} >Click Here</button>

                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>




    </div>
  )
}

export default PowerOne