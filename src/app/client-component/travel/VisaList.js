import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { deleteVisa, updateVisa, getVisas, userLogout } from "../../../utils/APIs";
import Swal from "sweetalert2";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';

const VisaList = () => {
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [valueToEdit, setvalueToEdit] = useState({});
  const [show, setShow] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory();

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
    mode: "onChange"
  });

  const handleShow = (value) => {
    reset()
    setvalueToEdit(value)
    setShow(true);
  }

  const handleClose = () => {
    setShow(false)
    setvalueToEdit({})
    reset()
  };

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page. 
  const handlePageClick = (event) => {
    setItemOffset(event.selected);
  };

  const onSubmit = async (data) => {
    try {
      data.id = valueToEdit?.id;
      await updateVisa(valueToEdit?.id,data)
      toast.success('Visa updated Successfully', {
        autoClose: 3000
      })
      list()
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
    } finally {
      setShow(false)
    }
  };

  const deletevisa = async (uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#DD6B55",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.value) {
        await deleteVisa(uid)
        Swal.fire(
          "Deleted!",
          "Your imaginary file has been deleted.",
          "success"
        )
        list()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  const list = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getVisas(
          itemsPerPage,
          +itemOffset + 1,
        )
      ).data;
      setitemlist(items?.results);
      setPageCount(items?.totalPages);
      setIsLoading(false)
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
  }

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Visa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row auth">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                    <p className="card-description"> Update Visa </p>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Name
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              name="name"
                              defaultValue={valueToEdit.name}
                              {...register("name", { required: true })}
                              placeholder="name"
                            />
                            {errors && errors.name && <p>Name is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Surname</label>
                          <div className="col-sm-9">
                            <Form.Control type="text"
                              name="surname"
                              defaultValue={valueToEdit.surname}
                              placeholder="Enter Your surname"
                              {...register("surname", { required: true })} />
                            {errors && errors.surname && <p style={{ color: "red" }}>surname is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label" htmlFor="exampleFormControlSelect1">Gender</label>
                          <div className="col-sm-9">
                            <select className="form-control form-control-lg" name="gender" {...register("gender")} id="exampleFormControlSelect1">
                              <option selected={valueToEdit.gender === 'Male'} value="Male">Male</option>
                              <option selected={valueToEdit.gender === 'Female'} value="Female">Female</option>
                              <option selected={valueToEdit.gender === 'Transgender'} value="Transgender">Transgender</option>
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-6 col-form-label">Is Your Place of Birth out of India? *</label>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" defaultChecked={valueToEdit.isOutIndiaBirth === 'yes'} name="isOutIndiaBirth" {...register("isOutIndiaBirth", { required: false })} value="yes" id="membershipRadios1" /> Yes
                                <i className="input-helper"></i>
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" defaultChecked={valueToEdit.isOutIndiaBirth === 'no'} name="isOutIndiaBirth" {...register("isOutIndiaBirth", { required: false })} value="no" id="membershipRadios2" /> No
                                <i className="input-helper"></i>
                              </label>
                            </div>
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">City</label>
                          <div className="col-sm-9">
                            <Form.Control type="text"
                              name="city"
                              defaultValue={valueToEdit.city}
                              placeholder="Enter Your city"
                              {...register("city", { required: true })} />
                            {errors && errors.city && <p style={{ color: "red" }}>City is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row" >
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-5 col-form-label" htmlFor="exampleFormControlSelect1">Date Of Birth</label>
                          <div className="col-sm-7">
                            <Form.Control type="date"
                              name="dob"
                              defaultValue={moment(valueToEdit.dob).format("YYYY-MM-DD")}
                              placeholder="Enter Your Date of Birth"
                              max={moment().format("YYYY-MM-DD")}
                              {...register("dob", { required: true })} />
                            {errors && errors.dob && <p style={{ color: "red" }}>Date of birth is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-5 col-form-label">PAN Number</label>
                          <div className="col-sm-7">
                            <Form.Control type="text"
                              name="pan"
                              defaultValue={valueToEdit.pan}
                              placeholder="Enter Your PanNumber"
                              {...register("pan", { required: true })} />
                            {errors && errors.pan && <p style={{ color: "red" }}>PAN Number is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-5 col-form-label">Voter ID Number</label>
                          <div className="col-sm-7">
                            <Form.Control type="text"
                              name="voter"
                              defaultValue={valueToEdit.voter}
                              placeholder="Enter Your Voter ID"
                              {...register("voter", { required: true })} />
                            {errors && errors.voter && <p style={{ color: "red" }}>voter id is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button
                        className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                        type="submit"
                      >
                        UPDATE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div >
        </Modal.Body >
      </Modal >
      <div className="page-header">
        <h3 className="page-title">Travel / Show Visa </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show Visa
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
              </div>
            </div>
            <h4 className="card-title">Visa list</h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Pancard </th>
                    <th> City </th>
                    <th> Voter Id </th>
                    <th> Date of Birth </th>
                    <th> Edit </th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    isLoading ? <React.Fragment><Spinner /></React.Fragment>
                      :
                      itemlist?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item?.name +' '+ item?.surname}</td>
                            <td>{item?.pan}</td>
                            <td>{item?.city}</td>
                            <td>{item?.voter}</td>
                            <td>{moment(item?.dob).format('DD/MM/YYYY')}</td>
                            <td><i onClick={() => handleShow(item)} className="mdi mdi-lead-pencil"></i></td>
                            <td>
                              <i
                                onClick={() => deletevisa(item?.id)}
                                className="mdi mdi-delete"
                              ></i>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                className="client-list"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                forcePage={itemOffset}
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default VisaList;
