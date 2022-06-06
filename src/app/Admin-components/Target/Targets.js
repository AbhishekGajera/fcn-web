import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  getProductsList,
  CreateTargets,
  getIBOs,
  getBranches,
} from "../../../utils/APIs";
import { useHistory } from "react-router-dom";
import { roleOptionForAmin } from "../../../utils/Functions/commonOptions";

const Targets = () => {
  const [cookies] = useCookies(["user"]);
  const history = useHistory();
  const [productList, setproductList] = useState([]);
  const [IBOs, setIBOs] = useState([]);
  const [branches, setbranches] = useState([]);
  const [previousSelectedType, setpreviousSelectedType] = useState('IBO')

  useEffect(() => {
    getAllProducts();
    getIBOList();
    getBrancheList();
  }, []);

  const getAllProducts = async () => {
    const allProducts = await getProductsList(3000);
    setproductList(allProducts?.data?.results);
    setValue('selectProduct',allProducts?.data?.results[0]?.id)
  };

  const getIBOList = async () => {
    const allIBOs = await getIBOs(5000);
    setIBOs(allIBOs?.data?.results);
    setValue('selectUser',allIBOs?.data?.results[0]?.id)
    clearErrors('selectUser')
  };

  const getBrancheList = async () => {
    const allBranches = await getBranches(5000);
    setbranches(allBranches?.data?.results);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
    watch,
    setValue,
    clearErrors
  } = useForm({
    mode: "onChange",
  });

  const values = getValues();
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything

  useEffect(() => {
    if('branch' === watchAllFields?.addto && previousSelectedType !== 'branch'){
      setpreviousSelectedType('branch')
      setValue('selectUser',branches[0].id)
    }

    if('IBO' === watchAllFields?.addto && previousSelectedType !== 'IBO'){
      setpreviousSelectedType('IBO')
      setValue('selectUser',IBOs[0].id)
    }

  },[watchAllFields])

  const onSubmit = async (data) => {
    const jsonData = JSON.stringify({
      product: data?.selectProduct,
      user: data?.selectUser,
      userType: data?.addto,
      Description: data?.description,
      qty: data?.qty,
      status: 1
    });
    try {
      await CreateTargets(jsonData);
      toast.success("Target added successfully");
      history.push("/targets/viewtarget");
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
        <h3 className="page-title">Targets / Add Target </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Target
            </li>
          </ol>
        </nav>
      </div>

      <div
        className="row auth"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Add Target </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Description
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          as="textarea"
                          type="text"
                          name="description"
                          {...register("description", { required: true })}
                          placeholder="description"
                        />
                        {errors && errors.description && (
                          <p>Description is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Add to</label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="addto"
                          {...register("addto", {
                            required: true,
                          })}
                        >
                          {roleOptionForAmin.map((item, index) => (
                            <option
                              key={index}
                              value={item?.value}
                              label={item?.label}
                            ></option>
                          ))}
                        </select>
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Select Product
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="selectProduct"
                          {...register("selectProduct", {
                            required: true,
                          })}
                        >
                          {productList?.map((item, index) => (
                            <option
                              key={index}
                              value={item?.id}
                              label={item?.name}
                            ></option>
                          ))}
                        </select>
                        {errors && errors.selectProduct && (
                          <p>Slecting a product is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                {values?.addto === "branch" && <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Select Users
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="selectUser"
                          {...register("selectUser", {
                            required: true,
                          })}
                        >
                          {
                            branches?.map((item, index) => (
                              <option
                                key={index}
                                value={item?.id}
                                label={item?.name}
                              ></option>
                            ))}
                        </select>
                        {errors && errors.selectUser && (
                          <p>Slecting a user is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>}

                { values?.addto === "IBO" && <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Select Users
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="selectUser"
                          {...register("selectUser", {
                            required: true,
                          })}
                          >
                          {
                            IBOs?.map((item, index) => (
                              <option
                                key={index}
                                value={item?.id}
                                label={item?.name}
                              ></option>
                            ))}
                        </select>
                        {errors && errors.selectUser && (
                          <p>Slecting a user is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>}

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Quantity{" "}
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="number"
                          name="qty"
                          {...register("qty", { required: true })}
                          placeholder="qty"
                        />
                        {errors && errors.qty && (
                          <p>Quantity is required field</p>
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

export default Targets;
