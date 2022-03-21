import React from 'react'
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import Calc from '../SipCalc/Calc';
// import DatePicker from "react-datepicker";


const SystematicSaving = () => {
    const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
        mode: "onChange"
      });
      const onSubmit = async (data) => {
      alert(data.name1)
      };
  return (
    <div>
        <div className="page-header">
          <h3 className="page-title"> Opening Form / Systematic Saving  </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Invesment</a></li>
              <li className="breadcrumb-item active" aria-current="page">Systematic Saving</li>
            </ol>
          </nav>
        </div>
        <Calc />
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Systematic Saving</h4>
                <form className="form-sample"   onSubmit={handleSubmit(onSubmit)}>
                  <p className="card-description"> Personal info </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Name of 1st Applicant</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"
                         name="name1"
                         {...register("name1", { required: true })} />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">PAN</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"
                         name="pan1"
                         {...register("pan1", { required: true })} /> 
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Name of 2nd Applicant</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"
                         name="name2"
                         {...register("name2", { required: true })} />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">PAN</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"
                         name="pan2"
                         {...register("pan2", { required: true })} /> 
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                        <div className="col-sm-9">
                        <DatePicker className="form-control w-100"
                        //   selected={this.state.startDate}
                        //   onChange={this.handleChange}
                        />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Category</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Category1</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select>
                        </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Membership</label>
                        <div className="col-sm-4">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> Free 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-5">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> Proffessional 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div> */}
                  <p className="card-description">Postal Address </p>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Address 1</label>
                        <div className="col-sm-10">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Address 2</label>
                        <div className="col-sm-10">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">City</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">State</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Country</label>
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
                  <p className="card-description">KYC </p>
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
                        <label className="col-sm-2 col-form-label">Aadhar Number</label>
                        <div className="col-sm-10">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
 
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Passport Number</label>
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
                  <p className="card-description">PAYMENT DETAILS </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">By Cheque</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
 
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">By NEFT</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
 
                    </div>
                  </div>
                  <div className="row">
                  
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">By RTGS</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
 
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">By Payment Gateways</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"/>
                        </div>
                      </Form.Group>
 
                    </div>
                  </div>
                  <div className="row">
                    
                  </div>
                  <div className="row">
                  
                  </div>
                 
                  <div className="mt-3">
                        <button
                            className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                            type="submit"
                            disabled={!isDirty || !isValid}
                        >
                            SIGN UP
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

export default SystematicSaving