import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CreateConnect } from "../../utils/APIs";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

const Connect = () => {
  const history = useHistory();
  const [selectedDate, setselectedDate] = useState("");
  const [courceType, setcourceType] = useState(1)

  const handleChange = (date) => {
    setselectedDate(date);
  };

  const handleChangeCourceType = (e) => {
    setcourceType(+e?.target?.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async ({ name, branch, contactno }) => {
    const formData = JSON.stringify({
      name,
      contactno,
      branch,
      type: courceType,
      date: selectedDate,
    });

    try {
      await CreateConnect(formData);
      toast.success("registerd sucssefully");
      history.push("/dashboard");
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
      <div className="d-flex align-items-center auth px-0">
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
                    placeholder="name"
                    name="name"
                    {...register("name", { required: true })}
                  />
                  {errors && errors.name && <p>name is required field</p>}
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
                    <option selected>Pal - Adajan</option>
                    <option>Majuragate</option>
                    <option>Nanpura</option>
                    <option>Sumul-dairy Road</option>
                    <option>Katargam</option>
                    <option>Varachha</option>
                    <option>Vesu</option>
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
                    <DatePicker
                      className="form-control w-100"
                      selected={selectedDate}
                      onChange={handleChange}
                    />
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
