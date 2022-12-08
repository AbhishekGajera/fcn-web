import React from 'react'
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';

const Insurance = () => {

    const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
        mode: "onChange"
      });
      const onSubmit = async (data) => { alert("hi") };
      
  return (
    <div>
        <div className="page-header">
          <h3 className="page-title"> Opening Form / Insurance  </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Invesment</a></li>
              <li className="breadcrumb-item active" aria-current="page">Insurance</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
          <div className="card">
              <div className="card-body">
                <h4 className="card-title">Insurance</h4>
                <form className="form-sample"   onSubmit={handleSubmit(onSubmit)}>
                  <p className="card-description"> Personal info </p>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-2 col-form-label">Insurance name</label>
                        <div className="col-sm-10">
                        <Form.Control  type="text"
                         name="name"
                         placeholder="Enter Your Name"
                         {...register("name", { required: true })} />
                            {errors && errors.name && <p style={{ color: "red" }}>Insurance is required field</p>}
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

export default Insurance