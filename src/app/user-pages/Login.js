import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useCookies  } from 'react-cookie';
import { login } from "../../utils/APIs";

const Login = () => {
  const history = useHistory()


  const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
    mode: "onChange"
  });

  const [, setCookie] = useCookies(['user']);


  const onSubmit = async (data) => {
    delete data.terms

    try {
      const result = await login(data)
      result.data.user.auth = 'verified'
      setCookie('user', result.data.user , { path: '/' });
      localStorage.setItem('accessToken',result.data.tokens.access.token)
      localStorage.setItem('refreshToken',result.data.tokens.refresh.token)
      history.push('/dashboard')
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="d-flex flex-wrap search-field">
                    <Form.Control type="email" placeholder="Email" size="lg" name="email" className="h-auto"{...register("email", { required: true , pattern: /^\S+@\S+$/i })} /> <br />
                    {errors && errors.email && errors.email.type === 'required' && <p>email is required field</p>}
                    {errors && errors.email && errors.email.type === 'pattern' && <p>invalid email formate</p>}
                  </Form.Group>
                  <Form.Group className="d-flex flex-wrap search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" name="password" {...register("password", { required: true })} /> <br />
                  {errors && errors.password && <p>password is required field</p>}
                  </Form.Group>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" disabled={!isDirty || !isValid}>SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" name="terms"  {...register("terms")}/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register-1" className="text-primary">Create</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
  )
}

export default Login