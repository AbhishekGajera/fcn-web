import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { googleRegistration, registration } from "../../utils/APIs";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import GoogleLogin from "react-google-login";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import moment from 'moment';


const Register = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [, setCookie] = useCookies(["user"]);

  const onSubmit = async (data) => {
    delete data.terms;
    try {
      const result = await registration(data);
      result.data.user.auth = "verified";
      setCookie("user", result.data.user, { path: "/" });
      localStorage.setItem("accessToken", result.data.tokens.access.token);
      localStorage.setItem("refreshToken", result.data.tokens.refresh.token);
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

  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");
  var strongRegexMo = new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$");

  const handleLogin = async (googleData) => {
    const formData = JSON.stringify({
      token: googleData.tokenId,
    });

    try {
      const result = await googleRegistration(formData);
      result.data.user.auth = "verified";
      setCookie("user", result.data.user, { path: "/" });
      localStorage.setItem("accessToken", result.data.tokens.access.token);
      localStorage.setItem("refreshToken", result.data.tokens.refresh.token);
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

  const handleLoginFailure = (res) => {
    toast.error(res.error);
   }

  const { linkedInLogin } = useLinkedIn({
    clientId: '86goj4c0fjeg38',
    redirectUri: `${window.location.origin}/dashboard/`,
    onSuccess: (code) => {
      window.opener.location.reload(true);
      console.log(code);
      window.parent.SubmitPage();
      window.close()
    },
    onError: (error) => {
      console.log(error);
    },
  });

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
                Signing up is easy. It only takes a few steps
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
                    id="exampleInputEmail1"
                    placeholder="Email"
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
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Date of birth"
                    name="dob"
                    min={moment().format("YYYY-MM-DD")}
                    {...register("dob", { required: true })}
                  />
                  {errors && errors.dob && <p>birthdate is required field</p>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Contact number"
                    name="contactno"
                    {...register("contactno", { required: true , pattern : strongRegexMo })}
                  />
                  {errors && errors.contactno && errors.contactno.type === 'required' && <p>contact number is required field</p>}
                  {errors && errors.contactno && errors.contactno.type === 'pattern' && <p>invalid phone number please use valid formate</p>}

                  {console.info("errors ",errors)}
                </div>
                <div className="form-group">
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
                    SIGN UP
                  </button>
                </div>
                <div className="mt-3 google-registration-button">
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Sign up with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLoginFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                {/* <div className="mt-3 google-registration-button">
                  <img
                    onClick={linkedInLogin}
                    src={linkedin}
                    alt="Sign in with Linked In"
                    style={{ maxWidth: "180px", cursor: "pointer" }}
                  />
                </div> */}
                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{" "}
                  <Link to="/user-pages/login" className="text-primary">
                    Login
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

export default Register;
