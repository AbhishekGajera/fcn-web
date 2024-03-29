import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { CreateRevenue, getBranches, getIBOs, getProductsList, getUsers } from "../../../utils/APIs";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const RevenueAdd = () => {
  const history = useHistory();
  const [cookies] = useCookies(["user"]);
  const [branchList, setbranchList] = useState([]);
  const [IboList, setIboList] = useState([]);
  const [Users, setUsers] = useState([]);
  const [productList, setproductList] = useState([]);
  const [phone, setPhone] = useState('+91');

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    getAllProducts();
    getIBOList();
    getBrancheList();
    getUserList();
  }, []);

  const getUserList = async () => {
    const allUsers = await getUsers(3000);
    setUsers(allUsers?.data?.results);
  };

  const handleOnChange = value => {
    setPhone(value);
  }

  const getAllProducts = async () => {
    const allProducts = await getProductsList(3000);
    setproductList(allProducts?.data?.results);
  };

  const getIBOList = async () => {
    const allIBOs = await getIBOs(5000);
    setIboList(allIBOs?.data?.results);
  };

  const getBrancheList = async () => {
    const allBranches = await getBranches(5000);
    setbranchList(allBranches?.data?.results);
  };

  const onSubmit = async (data) => {
    const formData = JSON.stringify({
      'branch': data?.branch,
      'IBO': data?.ibo,
      'contactno': data?.contactno,
      'user': data?.user,
      'commision_branch': data?.commissionBranch,
      'commision_ibo': data?.commissionIbo,
      'net_revenue': data?.netProfit,
      'product': data?.Product,
      'total_revenue': data?.totalRevenue,
    })

    try {
      const result = await CreateRevenue(formData)
      toast.success("Revenue created successfully");
      history.push("/revenue/revenuelist");
    } catch (error) {
      console.info("error ", error)
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
        <h3 className="page-title">Clients / Create Revenue </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Revenue
            </li>
          </ol>
        </nav>
      </div>
      <div className="row auth">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Add Revenue </p>
                <div className="row">
                  <div className="col-md-4">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">
                        Product{" "}
                      </label>
                      <div className="col-sm-8">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="Product"
                          {...register("Product", {
                            required: true,
                          })}
                        >
                          <option value=''>--Select Product--</option>
                          {productList?.map((item, index) => (
                            <option
                              key={index}
                              value={item?.id}
                              label={item?.name}
                            ></option>
                          ))}
                        </select>
                        {errors && errors.Product && (
                          <p>Selecting a product is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Branch</label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="branch"
                          {...register("branch", {
                            required: true,
                          })}
                        >
                          <option value=''>--Select branch--</option>
                          {branchList.map((item, index) => (
                            <option key={index} value={item?.name} label={item?.name}></option>
                          ))}
                        </select>
                        {errors && errors.branch && (
                          <p>Selecting a branch is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">IBO</label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="ibo"
                          {...register("ibo", {
                            required: true,
                          })}
                        >
                          <option value=''>--Select ibo--</option>
                          {IboList.map((item, index) => (
                            <option key={index} value={item?.name} label={item?.name}></option>
                          ))}
                        </select>
                        {errors && errors.ibo && (
                          <p>Selecting a IBO is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Select Users
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="user"
                          {...register("user", {
                            required: true,
                          })}
                        >
                          {
                            Users?.map((item, index) => (
                              <option
                                key={index}
                                value={item?.id}
                                label={item?.name}
                              ></option>
                            ))}
                        </select>
                        {errors && errors.user && (
                          <p>Slecting a user is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Contact No
                      </label>
                      <div className="col-sm-9 contact_no">
                        <PhoneInput
                          inputExtraProps={{
                            name: "contactno",
                            required: true,
                            autoFocus: true
                          }}
                          country={"US"}
                          value={phone}
                          onChange={handleOnChange}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">
                        Net Profit
                      </label>
                      <div className="col-sm-8">
                        <Form.Control
                          type="number"
                          name="netProfit"
                          {...register("netProfit", { required: true })}
                        />
                        {errors && errors.netProfit && (
                          <p>Net Profit is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Total Revenue
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="number"
                          name="totalRevenue"
                          {...register("totalRevenue", { required: true })}
                        />
                        {errors &&
                          errors.totalRevenue &&
                          errors.totalRevenue.type === "required" && (
                            <p>Total Revenue is required field</p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">Commision To Branch</label>
                      <div className="col-sm-8">
                        <Form.Control
                          type="text"
                          name="commissionBranch"
                          {...register("commissionBranch", { required: true })}
                        />
                        {errors && errors.commissionBranch && (
                          <p>Commission To Branch is required field</p>
                        )}
                      </div>

                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-4 col-form-label">Commision To IBO</label>
                      <div className="col-sm-8">
                        <Form.Control
                          type="text"
                          name="commissionIbo"
                          {...register("commissionIbo", { required: true })}
                        />
                        {errors && errors.commissionIbo && (
                          <p>Commission To Ibo is required field</p>
                        )}
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
  );
};

export default RevenueAdd;
