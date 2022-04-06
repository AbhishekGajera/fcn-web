import React from 'react'
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import Calc from '../SipCalc/Calc';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Modal from "react-bootstrap/Modal";
import { useCookies  } from 'react-cookie';
import { userLogout } from '../../../utils/APIs';

// import DatePicker from "react-datepicker";


const SystematicSaving = () => {
  const [cookies, setCookie] = useCookies(['user']);

  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);



  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);

  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
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
        <Tabs defaultActiveKey="first"  >
        <Tab eventKey="first" title="Systematic">
      
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
                         placeholder="Enter Your 1st Applicant"
                         {...register("name1", { required: true })} />
                            {errors && errors.name1 && <p style={{ color: "red" }}>name is required field</p>}
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">PAN</label>
              <div className="col-sm-9">
              <Form.Control type="text"
                         name="pan1"
                         placeholder="Enter Your PAN1"
                         {...register("pan1", { required: true })} /> 
                      {errors && errors.name1 && <p style={{ color: "red" }}>pan1 is required field</p>}

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
                         placeholder="Enter Your 2nd Applicant"
                         {...register("name2", { required: true })} />
                        {errors && errors.name2 && <p style={{ color: "red" }}>name2 is required field</p>}
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">PAN</label>
              <div className="col-sm-9">
              <Form.Control type="text"
                         name="pan2"
                         placeholder="Enter Your PAN2"
                         {...register("pan2", { required: true })} /> 
                        {errors && errors.pan2 && <p style={{ color: "red" }}>pan2 is required field</p>}
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                     
                        <label className="col-sm-3 col-form-label">Mobile</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"
                          name="mobile"
                          defaultValue={cookies?.user?.contactno}
                          {...register("mobile", { required: true })} />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"
                          name="email"
                          defaultValue={cookies?.user?.email}

                          {...register("email", { required: true })} />
                        </div>
                      </Form.Group>
                    </div>
                                 
                  </div>
     
        <p className="card-description">Postal Address </p>
        <div className="row">
          <div className="col-md-12">
            <Form.Group className="row">
              <label className="col-sm-2 col-form-label">Address 1</label>
              <div className="col-sm-10">
             <Form.Control type="text" name="address1"  placeholder="Enter Your Address1"
                         {...register("address1", { required: true })}/>
                        
                        {errors && errors.address1 && <p style={{ color: "red" }}>address1 is required field</p>}
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Form.Group className="row">
              <label className="col-sm-2 col-form-label">Address 2</label>
              <div className="col-sm-10">
             <Form.Control type="text" name="address2"  placeholder="Enter Your address2"
                         {...register("address2", { required: true })}/>
                        
                        {errors && errors.address2 && <p style={{ color: "red" }}>address2 is required field</p>}
              </div>
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">City</label>
              <div className="col-sm-9">
              <Form.Control type="text" name="city"  placeholder="Enter Your city"
                         {...register("city", { required: true })}/>
                        
                        {errors && errors.city && <p style={{ color: "red" }}>city is required field</p>}
              </div>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">State</label>
              <div className="col-sm-9">
              <Form.Control type="text" name="state"  placeholder="Enter Your state"
                         {...register("state", { required: true })}/>
                        
                        {errors && errors.state && <p style={{ color: "red" }}>state is required field</p>}
              </div>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Country</label>
              <div className="col-sm-9">
              <Form.Control type="text" name="country"  placeholder="Enter Your country"
                         {...register("country", { required: true })}/>
                        
                        {errors && errors.country && <p style={{ color: "red" }}>country is required field</p>}
              </div>
            </Form.Group>
          </div>
         
        </div>
        <p className="card-description">KYC </p>
          <div className="row">
                  <div className="col-md-8">
                    <Form.Group className="row">
                      <label className="col-sm-3  col-form-label">KYC</label>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="pancard"
                              {...register("pancard", { required: true })}
                            />
                            <i className="input-helper"></i>
                            Pan card
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="adhaarcard"
                              {...register("adhaarcard", { required: true })}
                            />
                            <i className="input-helper"></i>
                            Adhaar card
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                                type="checkbox"
                              className="form-check-input"
                              name="bankpassbook"
                              {...register("bankpassbook", { required: true })}
                            />
                            <i className="input-helper"></i>
                            Bank Passbook
                          </label>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                    <div className="col-md-4">
                    <div className="col-sm-">
                        <div className="">
                          <label className="label">
                            <input
                              type="file"
                              className="input"
                              name="file"
                              multiple={true}
                              {...register("file", { required: true })}
                              />
                                {errors && errors.file && <p style={{ color: "red" }}> file is required field</p>}
                          </label>
                        </div>
                      </div>
                    </div>
                </div>
        <div className="row">
          <div className="col-md-12">
            <Form.Group className="row">
              <label className="col-sm-2 col-form-label">PAN Number</label>
              <div className="col-sm-10">
              <Form.Control type="text" name="pan_number"  placeholder="Enter Your Pan"
                         {...register("pan_number", { required: true })}/>
                        
                        {errors && errors.pan_number && <p style={{ color: "red" }}>pan is required field</p>}
              </div>
            </Form.Group>

          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Form.Group className="row">
              <label className="col-sm-2 col-form-label">Aadhar Number</label>
              <div className="col-sm-10">
              <Form.Control type="text" name="adhar"  placeholder="Enter Your Adhar"
                         {...register("adhar", { required: true })}/>
                        
                        {errors && errors.adhar && <p style={{ color: "red" }}>adhar is required field</p>}
              </div>
            </Form.Group>

          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Form.Group className="row">
              <label className="col-sm-2 col-form-label">Passport Number</label>
              <div className="col-sm-10">
              <Form.Control type="text" name="passport"  placeholder="Enter Your Passport"
                         {...register("passport", { required: true })}/>
                        
                        {errors && errors.passport && <p style={{ color: "red" }}>pan is required field</p>}
              </div>
            </Form.Group>

          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Form.Group className="row">
              <label className="col-sm-2 col-form-label">Voter ID Number</label>
              <div className="col-sm-10">
              <Form.Control type="text" name="voter"  placeholder="Enter Your voter"
                         {...register("voter", { required: true })}/>
                        
                        {errors && errors.voter && <p style={{ color: "red" }}>voter is required field</p>}
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
              <Form.Control type="text" name="cheque"  placeholder="Enter Your cheque"
                         {...register("cheque", { required: true })}/>
                        
                        {errors && errors.cheque && <p style={{ color: "red" }}>cheque is required field</p>}
              </div>
            </Form.Group>

          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">By NEFT</label>
              <div className="col-sm-9">
              <Form.Control type="text" name="neft"  placeholder="Enter Your neft"
                         {...register("neft", { required: true })}/>
                        
                        {errors && errors.neft && <p style={{ color: "red" }}>neft is required field</p>}
              </div>
            </Form.Group>

          </div>
        </div>
        <div className="row">
        
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">By RTGS</label>
              <div className="col-sm-9">
              <Form.Control type="text" name="rtgs"  placeholder="Enter Your rtgs"
                         {...register("rtgs", { required: true })}/>
                        
                        {errors && errors.rtgs && <p style={{ color: "red" }}>rtgs is required field</p>}
              </div>
            </Form.Group>

          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">By Payment Gateways</label>
              <div className="col-sm-9">
              <Form.Control type="text" name="payment"  placeholder="Enter Your payment"
                         {...register("payment", { required: true })}/>
                        
                        {errors && errors.payment && <p style={{ color: "red" }}>gateway is required field</p>}
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
                
              >
                 SUBMIT
              </button>
          </div>
      </form>
    </div>
  </div>
</div>
</div>
        </Tab>
        <Tab eventKey="second" title="Paid Installment">
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Paid Installment</h4>
               
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Description </th>
                        <th> Credit </th>
                        <th> Debit </th>
                        <th> Amount </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                       
                        <td> Herman Beck </td>
                        <td>
                          fdsfsdfsd
                        </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>

                      </tr>
                      <tr>
                       
                        <td> Herman Beck </td>
                        <td>
                          fdsfsdfsd
                        </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>

                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="third" title="Pending Installment">
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Pending Installment</h4>
               
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Description </th>
                        <th> Credit </th>
                        <th> Debit </th>
                        <th> Amount </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                       
                        <td> Herman Beck </td>
                        <td>
                          fdsfsdfsd
                        </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>

                      </tr>
                      <tr>
                       
                        <td> Herman Beck </td>
                        <td>
                          fdsfsdfsd
                        </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>

                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="fourth" title="Estimate Return">
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Estimate Return</h4>
               
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Description </th>
                        <th> Credit </th>
                        <th> Debit </th>
                        <th> Amount </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                       
                        <td> Herman Beck </td>
                        <td>
                          fdsfsdfsd
                        </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>

                      </tr>
                      <tr>
                       
                        <td> Herman Beck </td>
                        <td>
                          fdsfsdfsd
                        </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>

                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="fifth" title="Approx Profit">
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Approx Profit</h4>
               
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Description </th>
                        <th> Credit </th>
                        <th> Debit </th>
                        <th> Amount </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                       
                        <td> Herman Beck </td>
                        <td>
                          fdsfsdfsd
                        </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>

                      </tr>
                      <tr>
                       
                        <td> Herman Beck </td>
                        <td>
                          fdsfsdfsd
                        </td>
                        <td> $ 77.99 </td>
                        <td> $ 77.99 </td>
                        <td> 2300 </td>

                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
      </div>
  )
}

export default SystematicSaving