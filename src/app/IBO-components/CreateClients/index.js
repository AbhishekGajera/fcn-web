import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { CreateUser, getBranchesClient, getIBOsClient, getConnect, getIBOs, userLogout, ImageUpload, getProductsListClient, getConnectedById } from "../../../utils/APIs";
import { useHistory, useLocation } from "react-router-dom";
import moment from 'moment';
import PhoneInput from "react-phone-input-2";
import queryString from "query-string";
import 'react-phone-input-2/lib/style.css'
import Spinner from "../../shared/Spinner";


const CreateClints = () => {
  const queryParams = queryString.parse(window.location.search)
  const [clientlist, setClientlist] = useState();
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [branchlist, setBranchlist] = useState([]);
  const [productlist, setproductlist] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [phone, setPhone] = useState(clientlist?.contactno || '+91');
  const [isShow, setIsShow] = useState(false);

  const toInputUppercase = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };
  const history = useHistory()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );
  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");

  var strongRegexcode = new RegExp("^[A-Z]{4}0[A-Z0-9]{6}$");

  var strongaadharcode = new RegExp("^([0-9]){12}$");

  const values = getValues();

  const handleOnChange = value => {
    setPhone(value);
  }

  const getClientDetail = async () => {
    try {
      const items = await (
        await getConnectedById(queryParams.id)
      ).data;
      setClientlist(items);
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE);
      }
    }
  }

  const onSubmit = async (data) => {
    setisLoading(true)
    const Data = new FormData();
    var aadharcard_img = '';
    var pancard_img = '';
    if (data.aadhar_card_img.length !== 0) {
      Data.append('file', data.aadhar_card_img[0]);
      aadharcard_img = await ImageUpload(Data)
    }
    if (data.pan_card_img.length !== 0) {
      Data.append('file', data.pan_card_img[0]);
      pancard_img = await ImageUpload(Data)
    }

    if (aadharcard_img.error || pancard_img.error) {
      toast.error(aadharcard_img.error.message);
    } else {
      try {
        data.contactno = phone;
        data.name = data.first_name + ' ' + data.last_name;
        delete data.first_name;
        delete data.last_name;
        data.aadhar_card_img = aadharcard_img.secure_url;
        data.pan_card_img = pancard_img.secure_url;
        await CreateUser(data)
        setisLoading(false)
        toast.success("user created successfully");
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
        setisLoading(false)
      }
    }
  };
  useEffect(() => {
    list();
  }, []);
  useEffect(() => {
    if (queryParams.id) {
      getClientDetail();
    }
    branchList();
  }, []);
  useEffect(() => {
    productList();
  }, []);

  const list = async () => {
    try {
      const items = await (await getBranchesClient()).data;
      setitemlist(items?.results);
      // setPageCount(items?.totalPages);
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
        setCookie("user", null, { path: "/" });
        userLogout(formData).finally(() => {
          history.push("/user-pages/login-1");
        });
      }
    }
  };
  const branchList = async () => {
    try {
      const items = await (await getIBOsClient()).data;
      // console.log("itm",items)
      setBranchlist(items?.results);
      // setPageCount(items?.totalPages);
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
        setCookie("user", null, { path: "/" });
        userLogout(formData).finally(() => {
          history.push("/user-pages/login-1");
        });
      }
    }
  };

  const productList = async () => {
    try {
      const items = await (await getProductsListClient()).data;
      // console.log("itm", items)
      setproductlist(items?.results);
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
        setCookie("user", null, { path: "/" });
        userLogout(formData).finally(() => {
          history.push("/user-pages/login-1");
        });
      }
    }
  };


  const handlePanUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-panId');
    if (element) {
      element.click()
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
        <h3 className="page-title">Clients / create Clients </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create clients
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          {isLoading ? <Spinner /> : (
            <div className="card">
              <div className="card-body">
                <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                  <p className="card-description"> Personal info </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">First Name</label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="text"
                            name="first_name"
                            defaultValue={clientlist?.name.split(" ")[0]}
                            onChange={(e) => setClientlist({ ...clientlist, name: e?.target?.value })}
                            {...register("first_name", { required: true })}
                          />
                          {errors && errors.first_name && <p style={{ color: "red" }}>first name is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Last Name</label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="text"
                            name="last_name"
                            defaultValue={clientlist?.name.split(" ")[1]}
                            onChange={(e) => setClientlist({ ...clientlist, name: e?.target?.value })}
                            {...register("last_name", { required: true })}
                          />
                          {errors && errors.last_name && <p style={{ color: "red" }}>last name is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Address{" "}
                        </label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="text"
                            name="address"
                            {...register("address", { required: true })}
                          />
                          {errors && errors.address && (
                            <p style={{ color: "red" }}>address is required field</p>
                          )}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">DOB</label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="date"
                            name="dob"
                            max={moment().format("YYYY-MM-DD")}
                            {...register("dob", { required: true })}
                          />
                          {errors && errors.dob && <p style={{ color: "red" }}>DOB is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Product</label>
                        <div className="col-sm-8">
                          <select
                            className="form-control form-control-lg"
                            id="exampleFormControlSelect2"
                            name="product"
                            {...register("product", {
                              required: true,
                            })}
                          >
                            <option value=''>--Select product--</option>
                            {productlist.map((item, index) => (

                              <option key={index} value={item?.id} label={item?.name}></option>
                            ))}
                          </select>
                          {errors && errors.product && <p style={{ color: "red" }}>Select product is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Branch</label>
                        <div className="col-sm-8">
                          <select
                            className="form-control form-control-lg"
                            id="exampleFormControlSelect2"
                            name="branch"
                            {...register("branch", {
                              required: true,
                            })}
                          >
                            <option value=''>--Select branch--</option>
                            {itemlist.map((item, index) => (
                              <option key={index} value={item?.name} label={item?.name} selected={clientlist?.branch === item?.name}></option>
                            ))}
                          </select>
                          {errors && errors.branch && <p style={{ color: "red" }}>Select branch is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Ibo</label>
                        <div className="col-sm-9">
                          <select
                            className="form-control form-control-lg"
                            id="exampleFormControlSelect2"
                            name="IBO"
                            {...register("IBO", {
                              required: true,
                            })}
                          >
                            <option value=''>--Select ibo--</option>
                            {branchlist.map((item, index) => (
                              <option key={index} value={item?.id} label={item?.name}></option>
                            ))}
                          </select>
                          {errors && errors.IBO && <p style={{ color: "red" }}>Select Ibo is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Registration Date</label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="date"
                            name="registration_date"
                            // max={moment().format("YYYY-MM-DD")}
                            {...register("registration_date", { required: true })}
                          />
                          {errors && errors.registration_date && <p style={{ color: "red" }}>Registration Date is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Maturity Date</label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="date"
                            name="maturity_date"
                            // max={moment().format("YYYY-MM-DD")}
                            {...register("maturity_date", { required: true })}
                          />
                          {errors && errors.maturity_date && <p style={{ color: "red" }}>Maturity Date is required field</p>}
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="text"
                            name="email"
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                          />
                          {errors &&
                            errors.email &&
                            errors.email.type === "required" && (
                              <p style={{ color: "red" }}>email is required field</p>
                            )}
                          {errors &&
                            errors.email &&
                            errors.email.type === "pattern" && (
                              <p>invalid email formate</p>
                            )}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Password
                        </label>
                        <div className="col-sm-8">
                          <Form.Control
                            type={isShow ? "text" : "password"}
                            name="password"
                            {...register("password", {
                              required: true,
                              pattern: strongRegex,
                            })}
                          />

                          <span className="d-flex" style={{ float: 'right', marginTop: "10px" }} >
                            <input style={{ marginRight: "10px" }} type="checkbox" value={isShow} onChange={() => {
                              if (isShow) {
                                setIsShow(false)
                              } else {
                                setIsShow(true)
                              }
                            }} />
                            show password
                          </span>
                          {errors &&
                            errors.password &&
                            errors.password.type === "required" && (
                              <p style={{ color: "red" }}>password is required field</p>
                            )}
                          {errors &&
                            errors.password &&
                            errors.password.type === "pattern" && (
                              <p style={{ color: "red" }}>
                                password should have at least 8 characters , 1
                                number and latter
                              </p>
                            )}
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Select Country</label>
                        <div className="col-sm-8">
                          <select
                            className="form-control form-control-lg"
                            id="exampleFormControlSelect2"
                            name="country"
                            {...register("country", {
                              required: true,
                            })}
                          >
                            <option>Country</option>
                            <option>United States of America</option>
                            <option selected>India</option>
                            <option>United Kingdom</option>
                            <option>Germany</option>
                            <option>Argentina</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Contact
                        </label>
                        <div className="col-sm-8 contact_no">
                          <PhoneInput
                            inputExtraProps={{
                              name: "contactno",
                              required: true,
                              autoFocus: true
                            }}
                            country={"US"}
                            value={phone}
                            // value={clientlist? clientlist.contactno : phone}
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
                          Bank Account no
                        </label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="text"
                            name="bankAccNo"
                            {...register("bankAccNo", { required: true })}
                          />
                          {errors && errors.bankAccNo && (
                            <p style={{ color: "red" }}>Bank Account number is required field</p>
                          )}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          IFSC code
                        </label>
                        <div className="col-sm-9">
                          <Form.Control
                            type="text"
                            name="bankIfscCode"
                            onInput={toInputUppercase}
                            {...register("bankIfscCode", { required: true, pattern: strongRegex })}
                          />
                          {errors && errors.bankIfscCode &&
                            errors.bankIfscCode.type === "required" && (
                              <p style={{ color: "red" }}>Bank IFSC number is required field</p>
                            )}
                          {errors &&
                            errors.bankIfscCode &&
                            errors.bankIfscCode.type === "pattern" && (
                              <p style={{ color: "red" }}>
                                IFSC code should have Capital latter and Number
                              </p>
                            )}
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-5 col-form-label">
                          AadharCard Number
                        </label>
                        <div className="col-sm-7">
                          <Form.Control
                            type="text"
                            name="aadhar_card_no"
                            {...register("aadhar_card_no", { required: true, pattern: strongaadharcode })}
                          />
                          {errors && errors.aadhar_card_no &&
                            errors.aadhar_card_no.type === "required" && (
                              <p style={{ color: "red" }}>Aadharcard number is required field</p>
                            )}
                          {errors &&
                            errors.aadhar_card_no &&
                            errors.aadhar_card_no.type === "pattern" && (
                              <p style={{ color: "red" }}>
                                Aadharcard should have number
                              </p>
                            )}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-6 col-form-label">
                          Aadharcard Image{" "}</label>

                        <div className="col-sm-6">
                          <Form.Control
                            id="input-id"
                            className="d-none"
                            type="file"
                            name="aadhar_card_img"
                            multiple={false}
                            {...register("aadhar_card_img")}
                          />

                          <button
                            onClick={handleUpload}
                            className={`btn btn-outline-${values?.aadhar_card_img?.[0]?.name ? " btn-primary" : " btn-primary"
                              }`}
                          >
                            {values?.aadhar_card_img?.[0]?.name ? values?.aadhar_card_img?.[0]?.name : "Upload Image"}
                          </button>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          PanCard Number
                        </label>
                        <div className="col-sm-8">
                          <Form.Control
                            type="text"
                            name="pan_card_no"
                            onInput={toInputUppercase}
                            {...register("pan_card_no", { required: true })}
                          />
                          {errors && errors.pan_card_no && (
                            <p style={{ color: "red" }}>PanCard number is required field</p>
                          )}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-6 col-form-label">
                          PanCard Image{" "}</label>

                        <div className="col-sm-6">
                          <Form.Control
                            id="input-panId"
                            className="d-none"
                            type="file"
                            name="pan_card_img"
                            multiple={false}
                            {...register("pan_card_img")}
                          />
                          <button
                            onClick={handlePanUpload}
                            className={`btn btn-outline-${values?.pan_card_img?.[0]?.name ? " btn-primary" : " btn-primary"
                              }`}
                          >
                            {values?.pan_card_img?.[0]?.name ? values?.pan_card_img?.[0]?.name : "Upload Image"}
                          </button>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Min Amount{" "}</label>

                        <div className="col-sm-8">
                          <Form.Control
                            id="minamount"
                            className="form-control"
                            type="number"
                            name="minAmount"
                            placeholder="minamount"
                            {...register("minAmount", { required: true })}
                          />
                          {errors && errors.minAmount && (
                            <p style={{ color: "red" }}>Product minamount is required field</p>
                          )}
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Max Amount{" "}</label>

                        <div className="col-sm-8">
                          <Form.Control
                            id="maxamount"
                            className="form-control"
                            type="number"
                            name="maxAmount"
                            placeholder="maxamount"
                            {...register("maxAmount", { required: true })}
                          />
                          {errors && errors.maxAmount && (
                            <p style={{ color: "red" }}>Product maxamount is required field</p>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateClints;
