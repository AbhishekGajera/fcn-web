import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

const AddExpences = () => {
    const [uploadedFileName, setUploadedFileName] = useState(null);
    const handleUpload = (e) => {
        e.preventDefault()
        const element = document.getElementById('input-id');
        if (element) {
            element.click()
        }
    };
    const handleDisplayFileDetails = (e) => {
        setUploadedFileName(e?.target?.files[0]?.name);
    };

    // form validation
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className='page-header'>
                <h3 className='page-title'>Add Expences</h3>
            </div>
            <div className="row auth" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-6 grid-margin" >
                    <div className="card">
                        <div className="card-body">
                            <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                                <p className="card-description"> Add Expences </p>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Expences</label>
                                            <div className="col-sm-9">
                                                <select
                                                    className="form-control form-control-lg"
                                                    id="exampleFormControlSelect2"
                                                    name="expences"
                                                    {...register("expences", {
                                                        required: true,
                                                    })}>
                                                    <option>Petrol</option>
                                                    <option>Food</option>
                                                    <option>Rent</option>
                                                    <option> Tea</option>
                                                    <option>Transport</option>
                                                    <option> Gift</option>
                                                    <option>Printing</option>
                                                    <option> Advertising</option>
                                                    <option>Electricity Bill</option>
                                                    <option> Cleaning</option>
                                                    <option>Salary</option>
                                                    <option>Medical Expences</option>
                                                    <option> Insurance</option>
                                                    <option> Legal & Professionals Fees</option>
                                                    <option> Phone Bill</option>
                                                    <option>  Internet Bill</option>
                                                    <option> Stationaries Bill</option>
                                                    <option> Depreciation</option>
                                                    <option>Row materials</option>
                                                    <option> Books and magazine subscriptions</option>
                                                    {errors && errors.name && (
                                                    <p>Description is required field</p>
                                                )}
                                                </select>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Total Cost{" "}
                                            </label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="numbber"
                                                    name="cost"
                                                    {...register("cost", {
                                                        required: true,
                                                    })}
                                                />
                                                {errors && errors.cost && (
                                                    <p>cost is required field</p>
                                                )}
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Description{" "}
                                            </label>
                                            <div className="col-sm-9">
                                                <Form.Control
                                                    type="text"
                                                    name="desc"
                                                    {...register("desc", { required: true })}
                                                />
                                                {errors && errors.desc && (
                                                    <p>description is required field</p>
                                                )}
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">
                                                Upload Invoice{" "}
                                            </label>
                                            <div className="col-sm-9">
                                                {/* <Form.Control
                                                   type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"
                                                /> */}
                                                <Form.Control
                                                    id="input-id"
                                                    onChange={handleDisplayFileDetails}
                                                    className="d-none"
                                                    type="file"
                                                    name="file"
                                                    multiple={false}
                                                    {...register("file", { required: true })}
                                                />
                                                
                                                <button
                                                    onClick={handleUpload}
                                                    className={`btn btn-outline-${uploadedFileName ? " btn-primary" : " btn-primary"
                                                        }`}
                                                >
                                                    {uploadedFileName ? uploadedFileName : "Upload Invoice  "}
                                                </button>
                                                {errors && errors.file && (
                                                    <p>Upload invoice is required field</p>
                                                )}
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button
                                        className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                                        type="submit"
                                    >
                                        Submit
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

export default AddExpences