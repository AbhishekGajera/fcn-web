import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import {
  userLogout,
  deleteUsr,
  updateProfile,
  getBranches,
  getIBOs,
} from "../../../utils/APIs";
import { useDebounce } from "../../../utils/Functions/useDebounce";

import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { statusOption, formateStatus } from "../../../utils/Functions/commonOptions";
import { password_generator } from "../../../utils/Functions/passwordGenerator";
import Spinner from "../../shared/Spinner";


const IboList = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [showPerfomer, setShowPerfomer] = React.useState(false);


  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(20);
  const [show, setShow] = React.useState(false);
  const [valueToEdit, setvalueToEdit] = useState({});
  const [updateStatus, setupdateStatus] = useState(0);
  const [updatePerfomence, setupdatePerfomence] = useState(1);
  const [branchList, setbranchList] = useState([]);
  const [selectedBranch, setselectedBranch] = useState("");
  const [branchUpdate, setbranchUpdate] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const onChangeBranchUpdate = (e) => {
    setbranchUpdate(e?.target?.value)
  }

  const handlePerfomanceShow = (value) => {
    reset()
    setvalueToEdit(value);
    setShowPerfomer(true);
  };

  const onChangePerfomence = (e) => {
    setupdatePerfomence(+e?.target?.value || 0);
  };

  const viewUser = (Id) => {
    history.push(`/viewUser/${Id}`);
  }

  const onChangeHandlerBranch = (e) => {
    setItemOffset(0);
    setselectedBranch(e.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );

  const handleClose = () => {
    setShow(false);
    setvalueToEdit({});
    setupdateStatus(0)
    reset()
  };

  const handleShow = (value) => {
    reset()
    setvalueToEdit(value);
    setShow(true);
  };

  const onChangeStatusForm = (e) => {
    setupdateStatus(+e?.target?.value || 0)
  }

  const onSubmit = async (data) => {
    data.status = updateStatus
    if (data.password === "") {
      delete data.password;
    }
    try {
      const updatedData = JSON.stringify(data);
      await updateProfile(updatedData, valueToEdit?.id);
      toast.success('User updated Successfully', {
        autoClose: 3000
      })
      list();
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
    } finally {
      setShow(false);
    }
  };

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage]);
  const generatePassword = async (id) => {
    const randomPassword = password_generator();
    const newPassword = JSON.stringify({
      password: randomPassword
    })


    try {
      await updateProfile(newPassword, id)
      toast.success('Password generated and sended to user via Email successfully', { autoClose: 3000 })
    } catch (error) {
      toast.error('Password generation failed, please try again later')
    }

  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    setItemOffset(event.selected);
  };

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage, selectedBranch]);

  useEffect(() => {
    list();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    getBranchList();
  }, []);

  const getBranchList = async () => {
    const items = await (await getBranches(5000, 1, "", "branch")).data;
    setbranchList(items?.results);
  };

  const deleteBranch = (uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#DD6B55",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        return (
          deleteUsr(uid).finally(() => list()),
          Swal.fire(
            "Deleted!",
            "Your imaginary file has been deleted.",
            "success"
          )
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  const onPerformanceSubmit = async () => {
    try {
      const updatedData = JSON.stringify({ perfomance: updatePerfomence })
      await updateProfile(updatedData, valueToEdit?.id);
      toast.success("Add Perfomance Successfully", {
        autoClose: 3000,
      });
      list();
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
    } finally {
      setShowPerfomer(false);
    }
  }

  const list = async () => {
    setIsLoading(true)
    try {
      const items = await (await getIBOs(itemsPerPage, +itemOffset + 1, searchTerm, selectedBranch)).data;
      setitemlist(items?.results);
      setPageCount(items?.totalPages);
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
    setIsLoading(false)
  };

  return (
    <div>
      <Modal
        show={showPerfomer}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Make Top Perfomer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row auth">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-sample"
                  >
                    <p className="card-description"> Make Top Perfomer </p>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Perfomance Rank
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control form-control-sm"
                              id="exampleFormControlSelect3"
                              name="perfomence"
                              onChange={onChangePerfomence}
                            >
                              <option value='1' selected={valueToEdit?.perfomance === 1}>1</option>
                              <option value='2' selected={valueToEdit?.perfomance === 2}>2</option>
                              <option value='3' selected={valueToEdit?.perfomance === 3}>3</option>
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button
                        className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                        type="button"
                        onClick={onPerformanceSubmit}
                      >
                        Submit Perfomance
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Ibo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row auth">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-sample"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <p className="card-description"> Update Ibo </p>
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
                            />
                            {errors && errors.name && (
                              <p>name is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-2 col-form-label">
                            Address{" "}
                          </label>
                          <div className="col-sm-10">
                            <Form.Control
                              type="text"
                              name="address"
                              {...register("address", { required: true })}
                            />
                            {errors && errors.address && (
                              <p>address is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Contact No
                          </label>
                          <div className="col-sm-9 contact_no">
                            <Form.Control
                              type="text"
                              name="contactno"
                              defaultValue={valueToEdit.contactno}
                              {...register("contactno", {
                                required: true,
                                pattern: strongRegexMo,
                              })}
                            />
                            {errors &&
                              errors.contactno &&
                              errors.contactno.type === "required" && (
                                <p>contact number is required field</p>
                              )}
                            {errors &&
                              errors.contactno &&
                              errors.contactno.type === "pattern" && (
                                <p>
                                  invalid phone number please use valid formate
                                </p>
                              )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Search Branch
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-control form-control-sm"
                              id="exampleFormControlSelect2"
                              name="branch"
                              onChange={onChangeBranchUpdate}
                            >
                              {branchList?.map((i) => {
                                return (
                                  <>
                                    <option
                                      selected={i.name === branchUpdate}
                                      value={i.name}
                                    >
                                      {i.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Email
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              name="email"
                              defaultValue={valueToEdit.email}
                              {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                              })}
                            />
                            {errors &&
                              errors.email &&
                              errors.email.type === "required" && (
                                <p>email is required field</p>
                              )}
                            {errors &&
                              errors.email &&
                              errors.email.type === "pattern" && (
                                <p>invalid email formate</p>
                              )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            status
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-control form-control-sm"
                              id="exampleFormControlSelect3"
                              name="status"
                              onChange={onChangeStatusForm}
                            >
                              {statusOption?.map((i) => {
                                return (
                                  <option
                                    value={i?.value}
                                    selected={+updateStatus === +i?.value}
                                  >
                                    {i?.label}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Role
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              defaultValue={valueToEdit.role}
                              name="role"
                              {...register("role", { required: true })}
                            />
                            {errors && errors.branch && (
                              <p>role is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Password
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="password"
                              name="password"
                              {...register("password")}
                            />
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
          </div>
        </Modal.Body>
      </Modal>
      <div className="page-header">
        <h3 className="page-title">ibos / Show Ibos </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show Ibos
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-4 col-form-label">
                    Search Branch
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control form-control-sm"
                      id="exampleFormControlSelect2"
                      name="branch"
                      onChange={onChangeHandlerBranch}
                    >
                      <option selected={"" === selectedBranch} value={""}>
                        Not Selected
                      </option>
                      {branchList?.map((i) => {
                        return (
                          <>
                            <option
                              selected={i.name === selectedBranch}
                              value={i.name}
                            >
                              {i.name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </Form.Group>
              </div>

              <div className="col-md-6">
                <div className="search-field d-none d-md-block">
                  <form className="d-flex align-items-center h-100" action="#">
                    <div className="input-group">
                      <div className="input-group-prepend outline-gray bg-transparent">
                        <i className="input-group-text border-0 mdi mdi-magnify"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control outline-gray bg-transparent border-0"
                        placeholder="Search IBO"
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e?.target?.value);
                          setItemOffset(0);
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <h4 className="card-title">Ibo list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Contact no. </th>
                    <th> Branch </th>
                    <th> Email </th>
                    <th> Role </th>
                    <th> Status </th>
                    <th> Generate Password </th>
                    <th> View </th>
                    <th> Edit </th>
                    <th> Delete </th>
                    {["admin"].includes(cookies?.user?.role) && (
                      <th></th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {
                    isLoading ?
                      <Spinner />
                      : itemlist?.map((item) => {
                        return (
                          <tr>
                            <td>{item?.name}</td>
                            <td>{item?.contactno}</td>
                            <td>{item?.branch}</td>
                            <td>{item?.email}</td>
                            <td>{item?.role}</td>
                            <td>{formateStatus(item?.status)}</td>
                            {/* <td>
                          <label className="badge badge-gradient-success">
                            Active
                          </label>
                          <label className="badge badge-gradient-danger">
                            Inactive
                          </label>
                        </td> */}
                            <td>
                              <button
                                type="button"
                                className="btn btn-gradient-primary btn-sm "
                                onClick={() => generatePassword(item?.id)}
                              >
                                Generate
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-gradient-primary btn-sm "
                                onClick={() => { viewUser(item?.id) }}
                              >
                                View
                              </button>
                            </td>
                            <td>
                              <i
                                onClick={() => handleShow(item)}
                                className="mdi mdi-lead-pencil"
                              ></i>
                            </td>
                            <td>
                              <i
                                onClick={() => deleteBranch(item?.id)}
                                className="mdi mdi-delete"
                              ></i>
                            </td>
                            {["admin"].includes(cookies?.user?.role) && (
                            <td>
                              <button
                                type="button"
                                className="btn btn-gradient-primary btn-sm "
                                onClick={() => handlePerfomanceShow(item)}
                              >
                                Make Top Perfomer
                              </button>
                            </td>
                          )}
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
    </div>
  );
};

export default IboList;
