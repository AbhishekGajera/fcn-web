import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { Form, Modal } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import {
  CreateUser, userLogout, ImageUpload, getBranchesClient
} from "../../../utils/APIs";
import { useHistory } from "react-router-dom";
import moment from 'moment';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'



const CreateIbo = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const history = useHistory();
  const [isShow, setIsShow] = useState(false);
  const [phone, setPhone] = useState('+91');
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  const handleClose = () => setShow(false);

  const toInputUppercase = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );
  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");

  var strongRegexcode = new RegExp("^[A-Z]{4}0[A-Z0-9]{6}$");

  var strongaadharcode = new RegExp("^([0-9]){12}$");

  const values = getValues();

  const handleOnChange = value => {
    setPhone(value);
  }

  const submit = async () => {
    handleClose()
    const Data = new FormData();
    Data.append('file', data.image[0]);
    const fileResult = await ImageUpload(Data)
    if (fileResult.error) {
      toast.error(fileResult.error.message);
    } else {
      try {
        data.image = fileResult.secure_url;
        data.role = 'IBO';
        data.contactno = phone;
        const result = await CreateUser(data)
        toast.success("user created successfully");
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
  }

  const onSubmit = async (data) => {
    setShow(true)
    setData(data)
  };

  useEffect(() => {
    list();
  }, []);

  const list = async () => {
    try {
      const items = await (await getBranchesClient()).data;
      setitemlist(items?.results);
      // setPageCount(items?.totalPages);
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

  const handleUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-id');
    if (element) {
      element.click()
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} size='xl' >
        <Modal.Header closeButton>
          <Modal.Title>Terms And Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ml-3">
          <p>This memorandum of understanding is made and entered on this the ___Day of JUL , 2022 at Surat in the State of Gujarat between Vijay Pitha Kanpariya (proprietor of FCN Training Academy)</p>

          <p>Having address U7-8, SHREE NIVAS COMPLEX, B/S I.C.GANDHI SCHOOL, SUMUL DAIRY ROAD, SURAT-395004. Herein after referred to as FIRST PART AND _________________, ADDRESS_________________________ Herein after referred to as SECOND PART. Whereas First Part is engaged in the business of Forex, Share, Commodity Trading &amp; Broking and other business. The Second Part is an Independent individual having been decided to help and invest in the business of the First Part and shall be earning yearly remuneration from the said investments. Whereas parties have mutually arrived to decision and entered into the said MOU to subscribe their hands as per decisions. The terms and conditions of the said Memorandum of Understanding are as under: Second Part has hereby agreed to invest an amount of Rs ____- (TWO LAKHS Only) in the business of the First Part. It is further agreed by and between the parties that First Part shall pay a Yearly remuneration of 24 % (Twenty Four Percent Only) by Cheque or by Online payment yearly to the Second part up till 12 months from the date of investment. 1. It is further agreed by and between the parties that Second Part shall have no claims, rights or interest of any manner in the business of the First Part.</p>

          <p>2. It is also agreed by and between the parties that First Part shall pay by Cheque or - Online Payment in for the compensation to the Second Part for the agreed period i.e. of one year.</p>

          <p>3. It is agreed by and between the parties, that First Part shall return the investment made by Second Part, the amount invested by the Second  Part shall be compensated and refunded together in the form as agreed in Para 2 of the said understanding i.e. of one year.</p>

          <p>4. It is also agreed by and between the party that, Second Part shall have no right or claim as to which of the business the said amount is to be invested, however claim of the Second Part shall be only on the agreed and decided remuneration.</p>

          <p>5. First Part has agreed to give Post Dated Cheque dated of IDBI Bank Having A/C No.1337102000010168 as following to second part and second part can deposit cheque in bank on the date of the cheque or can online payment to first part.  Cheque Number Amount Date       In case of any delay in the clearance of the said Cheque , the First Part shall pay the interest at the rate of 24% p.a. on default amount till the date of payment.</p>

          <p>6. A minimum lock-in period of one year has been fixed and both the Parties have agreed upon the same. In case the Second part would wish to withdraw the sum invested he shall do so only on completion of a period of one year (1 Year) from the date of investment by giving 30 days prior intimation of the same.</p>

          <p>7. In future if any happened with First Part, and First part paid 2,00,000/- through Cheque or online payment to second part then after second part don&rsquo;t have right to claim on the First Part for his invest amount.</p>

          <p>8. The above agreed terms and conditions shall be binding on both the Parties.   9. It is agreed by and between the parties that any dispute arising out of The agreement will be subject to Surat Jurisdiction.</p>

          <p></p>

          <p> 10. It is further agreed by and between the parties that an Arbitrator shall Be appointed as under Arbitration Act to resolve the any dispute amongst the parties. In witness whereof the First Part as well as the Second Part by way of acceptance of the said MOU have put their respective hands the day and year first hereinabove written.</p>

          <p>11. First part will give Post Dated Cheque to Second part and will not  Withdraw amount for one year from commencement date of agreement without inform to second part and Second Part will not force to withdraw first part to break agreement amount before maturity date.</p>

          <p> </p>

        </Modal.Body>
        <div >
          <p style={{
            marginLeft: '35%'
          }}><input type="checkbox" id="agree" onClick={submit} />
            <label htmlFor="agree" style={{
              marginLeft: '1%'
            }}> I agree to <b>terms and conditions</b></label></p>
        </div>
      </Modal>
      <div className="page-header">
        <h3 className="page-title">Ibo / Create Ibos </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Ibos
            </li>
          </ol>
        </nav>
      </div>
      <div className="row auth">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Personal info </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-2 col-form-label">Name</label>
                      <div className="col-sm-10">
                        <Form.Control
                          type="text"
                          name="name"
                          {...register("name", { required: true })}
                        />
                        {errors && errors.name && <p>name is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-2 col-form-label">
                        Address{" "}
                      </label>
                      <div className="col-sm-10">
                        <Form.Control
                          type="text"
                          name="address"
                          {...register("address", { required: true })}
                        />
                        {errors && errors.address && (
                          <p>address is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Select Country</label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="country"
                          {...register("country", {
                            required: true,
                          })}
                        >
                          <option>Country</option>
                          <option>United States of America</option>
                          <option selected>India</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>Argentina</option>
                        </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Contact No
                      </label>
                      <div className="col-sm-9 contact_no">
                        <PhoneInput
                          inputExtraProps={{
                            name: "contactno",
                            required: true,
                            autoFocus: true
                          }}
                          country={"US"}
                          value={phone}
                          onChange={handleOnChange}
                        />
                        {/* {phone === "" && (
                            <p>contact number is required field</p>
                          )} */}

                      </div>
                    </Form.Group>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="email"
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        {errors &&
                          errors.email &&
                          errors.email.type === "required" && (
                            <p>email is required field</p>
                          )}
                        {errors &&
                          errors.email &&
                          errors.email.type === "pattern" && (
                            <p>invalid email formate</p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">DOB</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="date"
                          name="dob"
                          max={moment().format("YYYY-MM-DD")}
                          {...register("dob", { required: true })}
                        />
                        {errors && errors.dob && <p>DOB is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Password
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type={isShow ? "text" : "password"}
                          name="password"
                          {...register("password", {
                            required: true,
                            pattern: strongRegex,
                          })}
                        />

                        <span className="d-flex" style={{ float: 'right', marginTop: "10px" }} >
                          <input style={{ marginRight: "10px" }} type="checkbox" value={isShow} onChange={() => {
                            if (isShow) {
                              setIsShow(false)
                            } else {
                              setIsShow(true)
                            }
                          }} />
                          show password
                        </span>
                        {errors &&
                          errors.password &&
                          errors.password.type === "required" && (
                            <p>password is required field</p>
                          )}
                        {errors &&
                          errors.password &&
                          errors.password.type === "pattern" && (
                            <p>
                              password should have at least 8 characters , 1
                              number and latter
                            </p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Branch</label>
                      <div className="col-sm-9">
                        {/* {dataValues.map((tags, index) => (
                  <MenuItem key={index} value={tags.title}>
                    {tags.title}
                  </MenuItem>
                ))} */}
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="branch"
                          {...register("branch", {
                            required: true,
                          })}
                        >
                          <option value=''>--Select branch--</option>
                          {itemlist.map((item, index) => (
                            <option key={index} value={item?.name} label={item?.name}></option>
                          ))}

                          {/* <option>United States of America</option>
                          <option >India</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>Argentina</option> */}
                        </select>
                        {errors && errors.branch && <p>Select branch is required field</p>}
                      </div>
                      {/* <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="branch"
                          {...register("branch", { required: true })}
                        />
                        {errors && errors.branch && (
                          <p>branch is required field</p>
                        )}
                      </div> */}
                    </Form.Group>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Bank Account no
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="bankAccNo"
                          {...register("bankAccNo", { required: true })}
                        />
                        {errors && errors.bankAccNo && (
                          <p>Bank Account number is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        IFSC code
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="bankIfscCode"
                          onInput={toInputUppercase}
                          {...register("bankIfscCode", { required: true, pattern: strongRegexcode })}
                        />
                        {errors && errors.bankIfscCode &&
                          errors.bankIfscCode.type === "required" && (
                            <p>Bank IFSC number is required field</p>
                          )}
                        {errors &&
                          errors.bankIfscCode &&
                          errors.bankIfscCode.type === "pattern" && (
                            <p>
                              IFSC code should have Capital latter and Number
                            </p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        PanCard Number
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="pan_card_no"
                          onInput={toInputUppercase}

                          {...register("pan_card_no", { required: true })}
                        />
                        {errors && errors.pan_card_no && (
                          <p>PanCard number is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        AadharCard Number
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="aadhar_card_no"
                          {...register("aadhar_card_no", { required: true, pattern: strongaadharcode })}
                        />
                        {errors && errors.aadhar_card_no &&
                          errors.aadhar_card_no.type === "required" && (
                            <p>Aadharcard number is required field</p>
                          )}
                        {errors &&
                          errors.aadhar_card_no &&
                          errors.aadhar_card_no.type === "pattern" && (
                            <p>
                              Aadharcard should have number
                            </p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-2 col-form-label">
                        Self Declaration{" "}
                      </label>
                      <div className="col-sm-10">
                        <Form.Control
                          type="text"
                          name="self_declaration "
                          {...register("self_declaration", { required: true })}
                        />
                        {errors && errors.self_declaration && (
                          <p>Self Declaration is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">
                        Upload Cancel cheque copy{" "}</label>

                      <div className="col-sm-8">
                        <Form.Control
                          id="input-id"
                          className="d-none"
                          type="file"
                          name="image"
                          multiple={false}
                          {...register("image", { required: true })}
                        />

                        <button
                          onClick={handleUpload}
                          className={`btn btn-outline-${values?.image?.[0]?.name ? " btn-primary" : " btn-primary"
                            }`}
                        >
                          {values?.image?.[0]?.name ? values?.image?.[0]?.name : "Upload Image"}
                        </button>
                        {errors && errors.image && (
                          <p>Upload image is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="mt-3">
                  <button

                    className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
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
    </div>
  );
};

export default CreateIbo;
