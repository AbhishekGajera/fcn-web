import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import {
  getUsers,
  userLogout,
  deleteUsr,
  updateProfile,
} from "../../../utils/APIs";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { password_generator } from "../../../utils/Functions/passwordGenerator";
import { useUrl } from "../../../utils/Functions/useUrl";
import { statusOption,formateStatus } from "../../../utils/Functions/commonOptions";

const ClientList = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);

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

  const onSubmit = async (data) => {
    data.status = updateStatus
    try {
      const updatedData = JSON.stringify(data);
      await updateProfile(updatedData, valueToEdit?.id);
      toast.success('User updated Successfully',{
        autoClose : 3000
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

  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(10);
  const [show, setShow] = React.useState(false);
  const [valueToEdit, setvalueToEdit] = useState({});
  const [updateStatus, setupdateStatus] = useState(0);

  const onChangeStatusForm = (e) => {
    setupdateStatus(+e?.target?.value || 0)
  }

  const handleClose = () => {
    setShow(false);
    setvalueToEdit({});
    setupdateStatus(0)
  };

  const handleShow = (value) => {
    setvalueToEdit(value);
    setupdateStatus(value?.status || 0)
    setShow(true);
  };

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage]);

  const list = async () => {
    try {
      const items = await (await getUsers(itemsPerPage, +itemOffset + 1)).data;
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
  };

  const generatePassword = async (id) => {
    const randomPassword = password_generator();
    const newPassword = JSON.stringify({
      password: randomPassword,
    });

    try {
      await updateProfile(newPassword, id);
      toast.success(
        "Password generated and sended to user via Email successfully",
        { autoClose: 3000 }
      );
    } catch (error) {
      toast.error("Password generation failed, please try again later");
    }
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    setItemOffset(event.selected);
  };

  const deleteData = (uid) => {
    // console.log(uid);
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

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Client</Modal.Title>
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
                    <p className="card-description"> Update Client </p>
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
                          <label className="col-sm-3 col-form-label">
                            Address{" "}
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              name="address"
                              defaultValue={valueToEdit.address}
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
                          <div className="col-sm-9">
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
                            Branch
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              defaultValue={valueToEdit.branch}
                              name="branch"
                              {...register("branch", { required: true })}
                            />
                            {errors && errors.branch && (
                              <p>branch is required field</p>
                            )}
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
                          <select
                            className="form-control form-control-sm col-sm-9"
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
                            {errors && errors.role && (
                              <p>role is required field</p>
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
        <h3 className="page-title">Clients / Fetch Clients </h3>
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
                      className="form-control form-control-lg"
                      id="exampleFormControlSelect2"
                      name="branch"
                    >
                      <option>Branches</option>
                      <option>United States of America</option>
                      <option>India</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select>
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">
                    Search Name:
                  </label>
                  <div className="col-sm-9">
                    <Form.Control type="text" name="contactno" />
                  </div>
                </Form.Group>
              </div>
            </div>
            <h4 className="card-title">Client list</h4>

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
                    <th> Edit </th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {itemlist?.map((item) => {
                    return (
                      <tr>
                        <td>{item?.name}</td>
                        <td>{item?.contactno}</td>
                        <td>{item?.branch}</td>
                        <td>{item?.email}</td>
                        <td>{item?.role}</td>
                        <td>{formateStatus(item?.status)}</td>
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
                          <i
                            onClick={() => handleShow(item)}
                            className="mdi mdi-lead-pencil"
                          ></i>
                        </td>
                        <td>
                          <i
                            onClick={() => deleteData(item?.id)}
                            className="mdi mdi-delete"
                          >
                            {" "}
                          </i>
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
    </div>
  );
};

export default ClientList;
