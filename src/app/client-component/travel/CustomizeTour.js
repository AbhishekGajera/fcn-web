import React from 'react'
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';

const CustomizeTour = () => {
    const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
        mode: "onChange"
      });
      const onSubmit = async (data) => {
      alert(data);
      };
  return (
    <div>
          <div className="page-header">
       <h3 className="page-title"> Customize Tour  </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Travel</a></li>
              <li className="breadcrumb-item active" aria-current="page">Tour</li>
            </ol>
          </nav>
        </div>  
    <div className="row">
    <div className="col-lg-8 grid-margin stretch-card">
    <div className="card">
              <div className="card-body">
                <h4 className="card-title">Build Your Own Packages</h4>
                <form className="form-sample"   onSubmit={handleSubmit(onSubmit)}>
                
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Source</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"
                         name="source"
                         placeholder="Enter Your Source"
                         {...register("source", { required: true })} />
                        {errors && errors.source && <p style={{ color: "red" }}>source is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                   
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Destination</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"
                         name="dest"
                         placeholder="Enter Your dest"
                         {...register("dest", { required: true })} />
                        {errors && errors.dest && <p style={{ color: "red" }}>destination is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                   
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Start Date</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"
                         name="start_date"
                         placeholder="Enter Your start date"

                         {...register("start_date", { required: true })} />
                         {errors && errors.start_date && <p style={{ color: "red" }}>start date is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">End Date</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text"
                         name="end_date"
                         placeholder="Enter Your end date"

                         {...register("end_date", { required: true })} />
                         {errors && errors.end_date && <p style={{ color: "red" }}>end date is required field</p>}

                        </div>
                      </Form.Group>
                    </div>
                    </div>
                   
 
                 
                  <div className="mt-3">
                        <button
                            className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                            type="submit"
                          
                        >
                            SEARCH
                        </button>
                    </div>
                </form>
              </div>
            </div>
    </div>
  </div></div>
  )
}

export default CustomizeTour