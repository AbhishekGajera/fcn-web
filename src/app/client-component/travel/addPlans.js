import React from 'react'
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import { addTravel, ImageUpload } from '../../../utils/APIs';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const AddPlans = () => {

  const history = useHistory()

  const { register, handleSubmit, formState: { errors, isDirty, isValid }, getValues } = useForm({
    mode: "onChange"
  });

  const values = getValues();
  const onSubmit = async (data) => {

    const Data = new FormData();
    Data.append('file', data.file[0]);
    const fileResult = await ImageUpload(Data)

    if (fileResult.error) {
      toast.error(fileResult.error.message);
    } else {
      const formData = JSON.stringify({
        name: data?.name || '',
        desc: data.desc || '',
        price: data?.price,
        image: fileResult.secure_url,
        type: data?.type
      })
      try {
        await addTravel(formData)
        history.push('/travel/ourplan')
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

  };

  const handleUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-id');
    if (element) {
      element.click()
    }
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
              <h4 className="card-title">Add your travel plans here</h4>
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        <Form.Control type="text"
                          name="name"
                          placeholder="Enter name"
                          {...register("name", { required: true })} />
                        {errors && errors.name && <p style={{ color: "red" }}>name is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Description</label>
                      <div className="col-sm-9">
                        <Form.Control type="text"
                          name="desc"
                          placeholder="Enter Description"
                          {...register("desc", { required: true })} />
                        {errors && errors.description && <p style={{ color: "red" }}>description is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Price</label>
                      <div className="col-sm-9">
                        <Form.Control type="number"
                          name="price"
                          placeholder="Enter price per person"
                          {...register("price", { required: true })} />
                        {errors && errors.price && <p style={{ color: "red" }}>price is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Upload Image{" "}</label>

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
                          {values?.file?.[0]?.name ? values?.file?.[0]?.name : "Upload Image"}
                        </button>
                        {errors && errors.file && (
                          <p>Upload image is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">

                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Type</label>
                      <div className="col-sm-8">

                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="type"
                          {...register("type", {
                            required: true,
                          })}
                        >
                          <option value="regular">Regular</option>
                          <option value="pre">Pre Departure</option>
                        </select>
                        {errors && errors.type && <p>Select type is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit"

                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default AddPlans