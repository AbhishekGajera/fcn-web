import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { CreateUser, CreateBranch, getIBOs, userLogout } from "../../../utils/APIs";
import moment from 'moment';


const CreateBranches = () => {
  const [cookies, setCookie] = useCookies(["user"]);

  const [isShow, setIsShow] = useState(false);
  const [branchlist, setBranchlist] = useState([]);
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );
  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");

  var strongRegexcode = new RegExp("^[A-Z0-9]");

  const onSubmit = async (data) => {
    data.role = 'branch'
    try {
      const result = await CreateUser(data)
      toast.success("user crated successfully");
      history.push('/branches/brancheslist')
    } catch (error) {
      console.info("error ", error)
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
  const toInputUppercase = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };
  const branchList = async () => {
    try {
      const items = await (await getIBOs()).data;
      // console.log("itm",items)
      setBranchlist(items?.results);
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
  useEffect(() => {
    branchList();
  }, []);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Clients / Create Branches </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Branches
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
                      <label className="col-sm-3 col-form-label">
                        Contact No
                      </label>
                      <div className="col-sm-9 contact_no">
                        <Form.Control
                          type="text"
                          name="contactno"
                          {...register("contactno", {
                            required: true,
                            pattern: strongRegexMo,
                          })}
                        />
                        {errors &&
                          errors.contactno &&
                          errors.contactno.type === "required" && (
                            <p>contact number is required field</p>
                          )}
                        {errors &&
                          errors.contactno &&
                          errors.contactno.type === "pattern" && (
                            <p>invalid phone number please use valid formate</p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Ibo</label>
                      <div className="col-sm-9">

                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="ibo"
                          {...register("ibo", {
                            required: true,
                          })}
                        >
                          <option value=''>--Select ibo--</option>
                          {branchlist.map((item, index) => (
                            <option key={index} value={item?.name} label={item?.name}></option>
                          ))}

                          {/* <option>United States of America</option>
                          <option >India</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>Argentina</option> */}
                        </select>
                        {errors && errors.ibo && <p>Select Ibo is required field</p>}
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
                  {/* <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Branch</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="branch"
                          {...register("branch", { required: true })}
                        />
                        {errors && errors.branch && (
                          <p>branch is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div> */}
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
                              IFSC code should have Capital latter
                            </p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">Branch Head Name</label>
                      <div className="col-sm-8">
                        <Form.Control
                          type="text"
                          name="b_head_name"
                          {...register("b_head_name", { required: true })}
                        />
                        {errors && errors.b_head_name && <p>branch head name is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">
                        Branch Head Contact
                      </label>
                      <div className="col-sm-8">
                        <Form.Control
                          type="text"
                          name="b_head_contact_no"
                          {...register("b_head_contact_no", { required: true })}
                        />
                        {errors && errors.b_head_contact_no && (
                          <p>branch head number is required field</p>
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
                          name="b_pan_card_no"
                          onInput={toInputUppercase}

                          {...register("b_pan_card_no", { required: true })}
                        />
                        {errors && errors.b_pan_card_no && (
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
                          name="b_aadhar_card_no"
                          {...register("b_aadhar_card_no", { required: true })}
                        />
                        {errors && errors.b_aadhar_card_no && (
                          <p>Aadharcard number is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Head Office Number
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="headofficeNo"
                          {...register("headofficeNo", { required: true })}
                        />
                        {errors && errors.headofficeNo && (
                          <p> Head Office Number number is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div> */}
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

export default CreateBranches;
