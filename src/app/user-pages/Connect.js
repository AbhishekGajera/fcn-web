import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { CreateConnect ,getBranchesClient, userLogout } from "../../utils/APIs";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import moment from 'moment';

const Connect = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [courceType, setcourceType] = useState(1);
  const [branchlist, setBranchlist] = useState([]);

  const handleChangeCourceType = (e) => {
    setcourceType(+e?.target?.value);
  };

  useEffect(() => {
    branchList();
  }, []);

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

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async ({ first_name, last_name, branch, contactno, date }) => {
    const formData = JSON.stringify({
      name: first_name.concat(' ', last_name),
      contactno,
      branch,
      type: courceType,
      fromDate: date,
    });

    try {
      await CreateConnect(formData);
      toast.success("registerd sucssefully");
      history.push("/connectedusers/getuserList");
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

  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );

  return (
    <div>
      <div className="d-flex align-items-center login-auth auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img
                  src={require("../../assets/images/fcn_logo.png")}
                  alt="logo"
                />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">
                Contact us or Subscribe here to get our updates
              </h6>
              <form
                className="pt-3"
                autoComplete="new-password"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="First Name"
                    name="first_name"
                    {...register("first_name", { required: true })}
                  />
                  {errors && errors.first_name && <p> last name is required field</p>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Last Name"
                    name="last_name"
                    {...register("last_name", { required: true })}
                  />
                  {errors && errors.last_name && <p>last name is required field</p>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Contact number"
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

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    id="exampleFormControlSelect2"
                    name="branch"
                    {...register("branch", {
                      required: true,
                    })}
                  >
                    {branchlist.map((item, index) => (
                      <option key={index} value={item?.name} label={item?.name}>{item?.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios1"
                      value={1}
                      onChange={handleChangeCourceType}
                      checked={courceType === 1}
                    />
                    <i className="input-helper"></i>
                    Free
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios2"
                      value={2}
                      onChange={handleChangeCourceType}
                      checked={courceType === 2}
                    />
                    <i className="input-helper"></i>
                    Paid
                  </label>
                </div>

                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">
                    Date of Appoinment
                  </label>
                  <div className="col-sm-9">
                    <Form.Control
                      type="date"
                      name="date"
                      min={moment().format("YYYY-MM-DD")}
                      {...register("date", { required: true })}
                    />
                    {errors && errors.date && <p>Date of Appoinment is required field</p>}
                  </div>
                </Form.Group>

                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="terms"
                        {...register("terms", { required: true })}
                      />
                      <i className="input-helper"></i>I agree to all Terms &
                      Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                    disabled={!isDirty || !isValid}
                  >
                    SUBMIT!
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

export default Connect;
