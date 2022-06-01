import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useCookies } from "react-cookie";
import { toast } from 'react-toastify';
import { addCost } from '../../../utils/APIs';
import { optionForExpenceType,optionForCostCategory } from "../../../utils/Functions/commonOptions";
import { useHistory } from 'react-router-dom';

const AddExpences = () => {
    const [cookies ] = useCookies(["user"]);
    const history = useHistory()

    const handleUpload = (e) => {
        e.preventDefault()
        const element = document.getElementById('input-id');
        if (element) {
            element.click()
        }
    };

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

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("user",cookies?.user?.id)
        formData.append("totalCost",+data?.cost)
        formData.append("category",data?.expences)
        formData.append("description",data?.desc)
        formData.append("image",data?.file[0])
        formData.append("type",data?.type)

        try {
            await addCost(formData)
            toast.success("Invoice added Succesfully",{ autoClose : 4000 })
            history.push('/costs/fetchExpences')
        } catch (error) {
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
                                                   {optionForCostCategory.map((item) => {
                                                       return <option value={item.value}> {item.label} </option>
                                                   })}
                                                </select>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="row" >
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Type</label>
                                            <div className="col-sm-9">
                                                <select
                                                    className="form-control form-control-lg"
                                                    id="exampleFormControlSelect2"
                                                    name="type"
                                                    {...register("type", {
                                                        required: true,
                                                    })}>
                                                {
                                                    optionForExpenceType?.map((item) => {
                                                        return <option value={item.value}>{item.label}</option>
                                                    })
                                                }
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
                                                    type="number"
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

                                <div className="row">
                                    <div className="col-md-12">
                                        <Form.Group className="row">
                                            <label className="col-sm-4 col-form-label">
                                                Upload Invoice{" "}
                                            </label>
                                            <div className="col-sm-8">
                                                <Form.Control
                                                    id="input-id"
                                                    className="d-none"
                                                    type="file"
                                                    name="file"
                                                    multiple={false}
                                                    {...register("file", { required: true })}
                                                />
                                                
                                                <button
                                                    onClick={handleUpload}
                                                    className={`btn btn-outline-${values?.file?.[0]?.name ? " btn-primary" : " btn-primary"
                                                        }`}
                                                >
                                                    {values?.file?.[0]?.name ? values?.file?.[0]?.name : "Upload Invoice  "}
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