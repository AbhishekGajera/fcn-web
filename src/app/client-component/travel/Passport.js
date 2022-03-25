import React from 'react'
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Passport = () => {
    const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
        mode: "onChange"
      });
      const onSubmit = async (data) => {
     alert("hi")
      };
  return (
    <div>
    <div className="page-header">
      <h3 className="page-title"> Passport Form  </h3>
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
                <form className="form-sample"   onSubmit={handleSubmit(onSubmit)}>
                  <p className="card-description"> Applicant Details </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Applicant's Given Name </label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"
                         name="name"
                         {...register("name", { required: true })} />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Surname</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"
                         name="surname"
                         {...register("surname", { required: true })} /> 
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                     
                      <Form.Group className="row">
                  <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">Gender</label>
                  <div className="col-sm-9">
                  <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                 
                  </select>
                  </div>
                </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                     
                      <Form.Group className="row">
                  <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">Date Of Birth</label>
                  <div className="col-sm-9">
                  <Form.Control  type="text"
                         name="dob"
                         {...register("dob", { required: true })} />
                  </div>
                </Form.Group>
                    </div>
                  </div>
                  
                  <p className="card-description">Place Of Birth </p>
                  <div className="row">
                  <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-6 col-form-label">Is Your Place of Birth out of India? *</label>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> Yes 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> No 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
               

                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">City</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
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
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">PAN Number</label>
                        <div className="col-sm-10">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
 
                    </div>
                  </div>
                
                
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Voter ID Number</label>
                        <div className="col-sm-10">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
 
                    </div>
                  </div>
               
                 
                  <div className="mt-3">
                        <button
                            className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                            type="submit"
                            disabled={!isDirty || !isValid}
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