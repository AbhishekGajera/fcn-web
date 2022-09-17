import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ResetUserPasswod } from "../../utils/APIs";
import { toast } from "react-toastify";
import * as qs from "query-string";

const ResetPassword = () => {
  const history = useHistory();
  const parsed = qs.parse(window.location.search);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const result = await ResetUserPasswod(data);

      toast.success("Your password has been updated successfully");
      history.push("/user-pages/login");
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

  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");

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
              <h4>Reset your password ?</h4>
              <h6 className="font-weight-light">
                Just enter your new password and login again to access your
                account
              </h6>
              <form
                className="pt-3"
                autoComplete="new-password"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    autoComplete="new-password"
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
                        password should have at least 8 characters , 1 number
                        and latter
                      </p>
                    )}
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                    disabled={!isDirty || !isValid}
                  >
                    RESET PASSWORD
                  </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Didn't get email yet ?{" "}
                  <Link
                    to="/user-pages/forgot-password-1"
                    className="text-primary"
                  >
                    send email again
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
