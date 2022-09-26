import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { CreateEmployees, getBranchesClient, userLogout } from "../../../utils/APIs";

const CreateEmployee = () => {
  const [cookies, setCookie] = useCookies(["user"]);
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


  const branchList = async () => {
    try {
      const items = await (await getBranchesClient()).data;
      setBranchlist(items?.results);
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

  const onSubmit = async (data) => {
    try {
      if (cookies?.user?.role === 'branch') {
        data.branch = cookies?.user?.id
      }
      const result = await CreateEmployees(data)
      toast.success("Employee created successfully");
      history.push('/employees/listEmployee')
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

  useEffect(() => {
    branchList();
  }, [])

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Employee / Create Employees </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Employees
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
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">First Name</label>
                      <div className="col-sm-8">
                        <Form.Control
                          type="text"
                          name="first_name"
                          {...register("first_name", { required: true })}
                        />
                        {errors && errors.first_name && <p>first name is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">Last Name</label>
                      <div className="col-sm-8">
                        <Form.Control
                          type="text"
                          name="last_name"
                          {...register("last_name", { required: true })}
                        />
                        {errors && errors.last_name && <p>last name is required field</p>}
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
                      <div className="col-sm-9">
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
                      <label className="col-sm-3 col-form-label">Branch</label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="branch"
                          {...register("branch", {
                            required: true,
                          })}
                        >
                          <option value=''>--Select branch--</option>
                          {branchlist.map((item, index) => (
                            <option key={index} value={item?.id} label={item?.name} selected={branchlist?.branch === item?.name}></option>
                          ))}
                        </select>
                        {errors && errors.branch && <p>Select branch is required field</p>}
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
                          type="text"
                          name="password"
                          {...register("password", {
                            required: true,
                            pattern: strongRegex,
                          })}
                        />
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
                          {...register("bankIfscCode", { required: true })}
                        />
                        {errors && errors.bankIfscCode && (
                          <p>Bank IFSC number is required field</p>
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

export default CreateEmployee;
