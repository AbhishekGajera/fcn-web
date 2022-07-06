import React, { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { CreateProduct } from "../../../utils/APIs";
import { useHistory } from "react-router-dom";

const ProductAdd = () => {
  const [cookies] = useCookies(["user"]);
  const [disable,setDisable] = useState(false);
  const history = useHistory();

  const handleUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-id');
    if (element) {
      element.click()
    }
  };
  
  const {
    register,
    handleSubmit,
        formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const values = getValues();

  const onSubmit = async (data) => {
    setDisable(true)
    const formData = new FormData()
      formData.append("user",cookies?.user?.id)
      formData.append("category",data?.category)
      formData.append("description",data?.description)
      formData.append("image",data?.file[0])
      formData.append("name",data?.name)
      formData.append("status",data?.status)
    try {
      await CreateProduct(formData);
      toast.success("Product created successfully");
      history.push("/products/productslist");
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
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Products / Add Product </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Product
            </li>
          </ol>
        </nav>
      </div>
      <div
        className="row auth"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Add Product </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="name"
                          {...register("name", { required: true })}
                          placeholder="name"
                        />
                        {errors && errors.name && <p>name is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Category{" "}
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="category"
                          {...register("category", { required: true })}
                          placeholder="category"
                        />
                        {errors && errors.address && (
                          <p>Category is required field</p>
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
                          as="textarea"
                          name="description"
                          {...register("description", { required: true })}
                          placeholder="description"
                        />
                        {errors && errors.desc && (
                          <p>Description is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row" >
                  <div className="col-md-12">
                      <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Status</label>
                          <div className="col-sm-9">
                              <select
                                  className="form-control form-control-lg"
                                  id="exampleFormControlSelect2"
                                  name="status"
                                  {...register("status", {
                                      required: true,
                                  })}>
                                  <option value=''>--Select Status--</option>
                                  <option value='1'>Active</option>
                                  <option value='0'>Inactive</option>                                  
                              </select>
                              {errors && errors.status && (
                                  <p>status is required field</p>
                              )}
                          </div>
                      </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">
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

                <div
                  className="mt-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit" disabled={disable}
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
  );
};

export default ProductAdd;
