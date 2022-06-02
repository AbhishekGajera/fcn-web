import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserforgotPasswod } from "../../utils/APIs";
import { toast } from 'react-toastify';

const ForgotPasswod = () => {
  const history = useHistory()

  const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    try {
      const result = await UserforgotPasswod(data)

      toast.success('we have send you confirmation email on email id that you have entered')
      history.push("/user-pages/reset-password-1")
    } catch (error) {
      if(error && error.response && error.response.data && error.response.data.message){
        toast.error(error.response.data.message)
      }
      else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE)
      }
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/images/fcn_logo.png")} alt="logo" />
              </div>
              <h4>Forgot your password ?</h4>
              <h6 className="font-weight-light">
                Just do not worry about it , we will send an email on your registerd email
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
                    id="exampleInputEmail1"
                    placeholder="Email"
                    name="email"
                    {...register("email", { required: true , pattern: /^\S+@\S+$/i })}
                  />
                  {errors && errors.email && errors.email.type === 'required' && <p>email is required field</p>}
                  {errors && errors.email && errors.email.type === 'pattern' && <p>invalid email formate</p>}
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                    disabled={!isDirty || !isValid}
                  >
                    SEND VERIFICATION EMAIL
                  </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Back to Login?{" "}
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

export default ForgotPasswod;
