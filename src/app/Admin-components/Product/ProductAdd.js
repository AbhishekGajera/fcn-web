import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { CreateUser,getBranches,getIBOs } from "../../../utils/APIs";
import { useHistory } from "react-router-dom";


const ProductAdd = () => {
  const [cookies] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [branchlist, setBranchlist] = useState([]);


  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );
  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");

  const onSubmit = async (data) => {
      try {
        await CreateUser(data)
        toast.success("user crated successfully");
        history.push('/clients/clientlist')
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
  useEffect(() => {
    list();
  }, []);
  useEffect(() => {
    branchList();
  }, []);

  const list = async () => {
    try {
      const items = await (await getBranches()).data;
      console.log("itm",items)
      setitemlist(items?.results);
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE);
      }

      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        });
      
      }
    }
  };
  const branchList = async () => {
    try {
      const items = await (await getIBOs()).data;
      setBranchlist(items?.results);
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE);
      }

      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        });
      
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
      <div className="row auth" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="col-6 grid-margin" >
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Add Product </p>
                <div className="row" >
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="name"
                          {...register("name", { required: true })}
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
                        Type{" "}
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="type"
                          {...register("type", { required: true })}
                        />
                        {errors && errors.address && (
                          <p>Type is required field</p>
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
                        {errors && errors.address && (
                          <p>Description is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

          
                <div className="mt-3" style={{display: 'flex', justifyContent: 'center'}}>
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
  );
};

export default ProductAdd;
