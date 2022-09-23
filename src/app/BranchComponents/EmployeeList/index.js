import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getEmployeeList,getEmployeeByBranch, userLogout, deleteEmployee ,getBranches, UpdateEmployee} from "../../../utils/APIs";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const EmployeeList = () => {
  const history = useHistory();
  const [show, setShow] = React.useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);
  const [valueToEdit, setvalueToEdit] = useState({});
  const [branchUpdate, setbranchUpdate] = useState('')
  const [branchList, setbranchList] = useState([]);
  const [selectedBranch, setselectedBranch] = useState("");

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

  const handleClose = () => {
    setShow(false);
    setvalueToEdit({});
    setbranchUpdate('');
    reset()
  };

  const handleShow = (value) => {
    reset()
    setvalueToEdit(value);
    setbranchUpdate(value?.branch?.id)
    setShow(true);
  };

  const onSubmit = async (data) => {
    data.branch = branchUpdate;
    try {
      const updatedData = JSON.stringify(data);
      await UpdateEmployee(valueToEdit?.id,updatedData);
      toast.success("Employee updated Successfully", {
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
      setShow(false);
    }
  };

  useEffect(() => {
    getBranchList();
    list();
  }, []);

  const getBranchList = async () => {
    const items = await (await getBranches(5000, 1, "", "branch")).data;

    setbranchList(items?.results);
  };

  const list = async() =>{
    try {
      let items
      if (cookies?.user?.role === "branch") {
        items = await (await getEmployeeByBranch(cookies?.user?.id,itemsPerPage, +itemOffset+1)).data;
      }else{
        items = await (await getEmployeeList(itemsPerPage, +itemOffset+1)).data;
      }
      setitemlist(items?.results);
      setPageCount(items?.totalPages);
    } catch (error) {
      console.info("error ", error);
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

  useEffect(() => {
   list()
  }, [itemOffset, itemsPerPage]);

  const deleteData = (uid) => {
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
          deleteEmployee(uid).finally(() => list()),
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

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setItemOffset(event.selected);
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
          <Modal.Title>Update Employee</Modal.Title>
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
                    <p className="card-description"> Update Employee </p>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            First Name
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="first_name"
                              defaultValue={valueToEdit.first_name}
                              {...register("first_name", { required: true })}
                            />
                            {errors && errors.name && (
                              <p>First Name is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Last Name
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="last_name"
                              defaultValue={valueToEdit.last_name}
                              {...register("last_name", { required: true })}
                            />
                            {errors && errors.name && (
                              <p>Last Name is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Email
                          </label>
                          <div className="col-sm-8">
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
                              {branchList?.map((i) => {
                                return (
                                  <>
                                    <option
                                      selected={i.id === branchUpdate}
                                      value={i.id}
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
        <h3 className="page-title">Employee / Fetch Employee </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Fetch Employee
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Employee list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Branch </th>
                    <th> Email </th>
                    <th> Role </th>
                    <th> Edit </th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {itemlist?.map((item) => {
                    return (
                      <tr>
                        <td>{item?.name}</td>
                        <td>{item?.branch?.name}</td>
                        <td>{item?.email}</td>
                        <td>{item?.role}</td>
                        <td>
                          <i className="mdi mdi-lead-pencil" onClick={() => handleShow(item)}></i>
                        </td>
                        <td>
                          <i className="mdi mdi-delete" onClick={() => deleteData(item?.id)}></i>
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

export default EmployeeList;
