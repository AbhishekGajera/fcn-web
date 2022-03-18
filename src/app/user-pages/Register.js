import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registration } from "../../utils/APIs";
import { useCookies  } from 'react-cookie';
import { toast } from 'react-toastify';

const Register = () => {
  const history = useHistory()

  const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
    mode: "onChange"
  });

  const [, setCookie] = useCookies(['user']);


  const onSubmit = async (data) => {
    delete data.terms

    try {
      const result = await registration(data)
      result.data.user.auth = 'verified'
      setCookie('user', result.data.user , { path: '/' });
      localStorage.setItem('accessToken',result.data.tokens.access.token)
      localStorage.setItem('refreshToken',result.data.tokens.refresh.token)
      toast.success('registerd sucssefully')
      history.push('/dashboard')
    } catch (error) {
      if(error && error.response && error.response.data && error.response.data.message){
        toast.error(error.response.data.message)
      }
      else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE)
      }
    }
  };

  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");


  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/images/fcn_logo.png")} alt="logo" />
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
                    placeholder="Username"
                    name="name"
                    {...register("name", { required: true })}
                  />
                  {errors && errors.name && <p>name is required field</p>}
                </div>
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
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    id="exampleFormControlSelect2"
                    >
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
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
                    {...register("password", { required: true , pattern : strongRegex })}
                    />
                  {errors && errors.password && errors.password.type === 'required' && <p>password is required field</p>}
                  {errors && errors.password && errors.password.type === 'pattern' && <p>password should have at least 8 characters , 1 number and latter</p>}
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" name="terms"  {...register("terms", { required: true })} />
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
