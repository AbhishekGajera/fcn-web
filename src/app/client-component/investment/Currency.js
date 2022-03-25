import React from 'react'
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
import { useCookies  } from 'react-cookie';
import { userLogout } from '../../../utils/APIs';

const Currency = () => {
  const [cookies, setCookie] = useCookies(['user']);

    const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
        mode: "onChange"
      });
      const onSubmit = async (data) => {
     alert("hi")
      };
  return (
    <div>
        <div className="page-header">
          <h3 className="page-title"> Colleteral Plan </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Invesment</a></li>
              <li className="breadcrumb-item active" aria-current="page">Colleteral Plan</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className='text-right'>
                <div className="row">
                    <div className="col-md-12 text-right">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Select City</label>
                        <div className="col-sm-4">
                          <select className="form-control">
                            <option>Surat</option>
                            <option>Baroda</option>
                            <option>Vapi</option>
                            <option>Ahmedabad</option>
                          </select>
                        </div>
                        </Form.Group>
                    </div>
                   
                  </div>
                </div>
                <h4 className="card-title">Colleteral Plan</h4>
               
                <form className="form-sample"   onSubmit={handleSubmit(onSubmit)}>
                  <p className="card-description"> Personal info </p>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <Form.Control  type="text"
                         name="name"
                         {...register("name", { required: true })} />
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
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Address </label>
                        <div className="col-sm-10">
                        <Form.Control type="text"
                        name="address"
                           {...register("address", { required: true })} />
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
                        <label className="col-sm-3 col-form-label">Branch</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"
                          name="branch"
                          {...register("branch", { required: true })} />
                        </div>
                      </Form.Group>
                    </div>                   
                  </div>
                  <div className="row">
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
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">KYC</label>
                        <div className="col-sm-9">
                        <Form.Control type="text"
                          name="kyc"
                          {...register("kyc", { required: true })} />
                        </div>
                      </Form.Group>
                    </div>                   
                  </div>
                  <div className="row">
                   <div className="col-md-6">   
                   <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Mobile Type</label>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                              name="android"
                              {...register("android", { required: true })} />
                            <i className="input-helper"></i>
                            Android
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                              name="iphone"
                              {...register("iphone", { required: true })}/>
                            <i className="input-helper"></i>
                            IPhone
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                        </div>
                  </div>
                  <div className="row">
                   <div className="col-md-6">   
                   <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Occupation</label>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="student"
                             {...register("student", { required: true })}/>
                            <i className="input-helper"></i>
                            Student
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="business"
                             {...register("android", { required: true })}/>
                            <i className="input-helper"></i>
                            Business
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="job"
                             {...register("job", { required: true })}/>
                            <i className="input-helper"></i>
                            Job
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                        </div>
                  </div>
                  <div className="row">
                  <div className="col-md-9">   
                   <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Occupation</label>
                        <div className="col-sm-2">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="stock"
                             {...register("stock", { required: true })}/>
                            <i className="input-helper"></i>
                            Stock
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-2">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="currency"
                             {...register("currency", { required: true })}/>
                            <i className="input-helper"></i>
                            Currency
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-2">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="comodity"
                             {...register("comodity", { required: true })}/>
                            <i className="input-helper"></i>
                            Comodity
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-2">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="diamond"
                             {...register("diamond", { required: true })}/>
                            <i className="input-helper"></i>
                            Diamond
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                        </div>
                  </div>
                  <div className="row">
                   <div className="col-md-6">   
                   <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Completed Any Course?</label>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="yes"
                             {...register("yes", { required: true })}/>
                            <i className="input-helper"></i>
                            Yes
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="no"
                             {...register("no", { required: true })}/>
                            <i className="input-helper"></i>
                            No
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                        </div>
                  </div>
                  <div className="row">
                  <div className="col-md-9">   
                   <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Reference</label>
                        <div className="col-sm-2">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="facebook"
                             {...register("facebook", { required: true })}/>
                            <i className="input-helper"></i>
                            Facebook
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-2">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="whatsapp"
                             {...register("whatsapp", { required: true })}/>
                            <i className="input-helper"></i>
                            Whatsapp
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-2">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="handbill"
                             {...register("handbill", { required: true })}/>
                            <i className="input-helper"></i>
                            Handbill
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-2">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="call"
                             {...register("call", { required: true })}/>
                            <i className="input-helper"></i>
                            Call
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                        </div>
                  </div>
                  <div className="row">
                   <div className="col-md-6">   
                   <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Batch Time</label>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" 
                            name="batch7"
                             {...register("batch7", { required: true })}/>
                            <i className="input-helper"></i>
                            7 to 8
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                             name="batch2"
                             {...register("batch2", { required: true })}/>
                            <i className="input-helper"></i>
                           8 to 9
                          </label>
                        </div>
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

export default Currency