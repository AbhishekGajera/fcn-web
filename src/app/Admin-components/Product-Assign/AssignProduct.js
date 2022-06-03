import React from 'react'
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AssignProduct = () => {

  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues
} = useForm({
    mode: "onChange",
});

const values = getValues();


const onSubmit =(data)=>{
console.log(data)
}

  return (
    <div>
       <div className='page-header'>
                <h3 className='page-title'>Assign Product</h3>
            </div>
            <div className="row auth" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-6 grid-margin" >
                    <div className="card">
                        <div className="card-body">
                            <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                                <p className="card-description"> Assign Product </p>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-4 col-form-label">User List</label>
                                            <div className="col-sm-8">
                                                <select
                                                    className="form-control form-control-lg"
                                                    id="exampleFormControlSelect2"
                                                    name="user"
                                                    {...register("user", {
                                                        required: true,
                                                    })}>
                                                       return <option value="user"> User List </option>
                                                </select>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="row" >
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-4 col-form-label">Product List</label>
                                            <div className="col-sm-8">
                                                <select
                                                    className="form-control form-control-lg"
                                                    id="exampleFormControlSelect2"
                                                    name="product"
                                                    {...register("product", {
                                                        required: true,
                                                    })}>
                                                
                                                       <option value="product">product</option>
                                                
                                                </select>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-4 col-form-label">
                                                Total Product{" "}
                                            </label>
                                            <div className="col-sm-8">
                                                <Form.Control
                                                    type="number"
                                                    name="cost"
                                                    {...register("cost", {
                                                        required: true,
                                                    })}
                                                />
                                                {errors && errors.cost && (
                                                    <p>Total product is required field</p>
                                                )}
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-4 col-form-label">
                                                Description{" "}
                                            </label>
                                            <div className="col-sm-8">
                                                <Form.Control
                                                    type="text"
                                                    name="desc"
                                                    as="textarea"
                                                    {...register("desc", { required: true })}
                                                />
                                                {errors && errors.desc && (
                                                    <p>description is required field</p>
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

export default AssignProduct