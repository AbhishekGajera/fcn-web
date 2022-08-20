import React, { useEffect, useState } from "react";

import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

import { CreateUser, getBranches,getUsersList,getBranchesClient,getIBOsClient, getIBOs, userLogout, getProductsList, getProductsListClient } from "../../../utils/APIs";


const AssignProduct = () => {
  const [productlist, setproductlist] = useState([]);
  const [userlist, setuserlist] = useState([]);

  const [cookies, setCookie] = useCookies(["user"]);

  const history = useHistory()


  const productList = async () => {
    try {
      const items = await (await getProductsListClient()).data;
      console.log("itm", items)
      setproductlist(items?.results);
      // setPageCount(items?.totalPages);
    } catch (error) {
     

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

  const userList = async () => {
    try {
      const items = await (await getUsersList()).data;
      console.log("itm", items)
      setuserlist(items?.results);
      // setPageCount(items?.totalPages);
    } catch (error) {
     

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
useEffect(() => {
    productList();
    userList();
  }, []);

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
                                                       {userlist.map((item, index) => (
                                                    
                                                    <option key={index} value={item?.name} label={item?.name}></option>
                                                    ))}
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
                                                
                                                <option value=''>--Select product--</option>
                                                    {productlist.map((item, index) => (
                                                    
                                                        <option key={index} value={item?.name} label={item?.name}></option>
                                                        ))}
                                                
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