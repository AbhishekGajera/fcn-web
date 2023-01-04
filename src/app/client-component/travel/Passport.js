import React from 'react'
import { Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addPassport } from '../../../utils/APIs';
import moment from "moment";

const Passport = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const history = useHistory();
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    try {
      const result = await addPassport(data)
      toast.success("Passport Added successfully");
      history.push('/travel/passportlist');
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
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">   </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Travel</a></li>
            <li className="breadcrumb-item active" aria-current="page">Passport</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Passport Form</h4>
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Applicant Details </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Applicant's Given Name </label>
                      <div className="col-sm-9">
                        <Form.Control type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          {...register("name", { required: true })} />
                        {errors && errors.name && <p style={{ color: "red" }}>Name is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-5 col-form-label">Surname</label>
                      <div className="col-sm-7">
                        <Form.Control type="text"
                          name="surname"
                          placeholder="Enter Your surname"
                          {...register("surname", { required: true })} />
                        {errors && errors.surname && <p style={{ color: "red" }}>surname is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-5">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">Gender</label>
                      <div className="col-sm-9">
                        <select className="form-control form-control-lg" name="gender" {...register("gender")} id="exampleFormControlSelect1">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Transgender">Transgender</option>
                        </select>
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-5 col-form-label" htmlFor="exampleFormControlSelect1">Date Of Birth</label>
                      <div className="col-sm-7">
                        <Form.Control type="date"
                          name="dob"
                          max={moment().format("YYYY-MM-DD")}
                          placeholder="Enter Your Date of Birth"
                          {...register("dob", { required: true })} />
                        {errors && errors.dob && <p style={{ color: "red" }}>Date of birth is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <p className="card-description">Place Of Birth </p>
                <div className="row">
                  <div className="col-md-8">
                    <Form.Group className="row">
                      <label className="col-sm-6 col-form-label">Is Your Place of Birth out of India? *</label>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="isOutIndiaBirth" {...register("isOutIndiaBirth", { required: false })} value="yes" id="membershipRadios1" defaultChecked /> Yes
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="isOutIndiaBirth" {...register("isOutIndiaBirth", { required: false })} value="no" id="membershipRadios2" /> No
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </div>


                <div className="row">
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-5 col-form-label">City</label>
                      <div className="col-sm-7">
                        <Form.Control type="text"
                          name="city"
                          placeholder="Enter Your city"
                          {...register("city", { required: true })} />
                        {errors && errors.city && <p style={{ color: "red" }}>City is required field</p>}
                      </div>
                    </Form.Group>
                  </div>

                  {/* <div className="col-md-4">
                      <Form.Group className="row">  
                        <label className="col-sm-3 col-form-label">Country</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div> */}
                  {/* <div className="col-md-4">
                      <Form.Group className="row">  
                        <label className="col-sm-3 col-form-label">Country</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div> */}
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-5 col-form-label">PAN Number</label>
                      <div className="col-sm-7">
                        <Form.Control type="text"
                          name="pan"
                          placeholder="Enter Your PanNumber"
                          {...register("pan", { required: true })} />
                        {errors && errors.pan && <p style={{ color: "red" }}>PAN Number is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <Form.Group className="row">
                      <label className="col-sm-5 col-form-label">Voter ID Number</label>
                      <div className="col-sm-7">
                        <Form.Control type="text"
                          name="voter"
                          placeholder="Enter Your Voter ID"
                          {...register("voter", { required: true })} />
                        {errors && errors.voter && <p style={{ color: "red" }}>voter id is required field</p>}
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
  )
}

export default Passport