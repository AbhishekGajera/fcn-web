import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getEmployee ,deleteEmployee,userLogout } from "../../../utils/APIs";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';


const Leave = () => {
  const history = useHistory()
  const [cookies,setCookie ] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
 
  const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
    mode: "onChange"
  });
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );
  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");
  const onSubmit = async (data) => {
  alert(data);
  };

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);

  const [valueToEdit, setvalueToEdit] = useState({})
  // const [first, setfirst] = useState(second)


  const handleClose = () => {
    setShow(false)
    setvalueToEdit({})
  };
  const handleClose1 = () => {
    setShow1(false)
    // setvalueToEdit({})
  };

  const handleShow = (value) =>{ 
    setvalueToEdit(value)
   
      setShow(true);
  
  }
  const handleShow1 = () =>{ 
    // setvalueToEdit(value)
   
      setShow1(true);
  
  }
  console.log(valueToEdit);

  useEffect(() => {
    (async () => {
      const endOffset = itemOffset + itemsPerPage;
      try {
        const items = await (await getEmployee(itemsPerPage, itemOffset)).data;
        console.log(items);
        setitemlist(items?.results);  
        // Fetch items from another resources.
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items?.results?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items?.results?.length / itemsPerPage));
      } catch (error) {
        console.info("error ",error)
        if (
          error?.response?.data?.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error(process.env.REACT_APP_ERROR_MESSAGE);
        }

        if(error?.response?.data?.code === 401){
          const formData = JSON.stringify({
            refreshToken: localStorage.getItem('refreshToken'),
          });
          setCookie('user', null , { path: '/' });
          userLogout(formData).finally(() => {
            history.push('/user-pages/login-1')
          })
        }
      }


    })();
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemlist.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
    const deleteData =(id)=>{
      // console.log("myid",id);
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
        if (result.isConfirmed) {
          return (
            deleteEmployee(id),
            Swal.fire(
              "Deleted!",
              "Your imaginary file has been deleted.",
              "success",
            )
          );
        } else if (result.dismiss === Swal.DismissReason.ccancel) {
          Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    }
   
  return (
    <div>
         <Modal
      show={show1}
      onHide={handleClose1}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Leave</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row auth">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Add Leave </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Users</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="user"
                          defaultValue={valueToEdit.user}
                          
                          {...register("user", { required: true })}
                        />
                        {errors && errors.name && <p>name is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>
{/* 
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
                </div> */}

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                       Reason
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="contactno"
                          defaultValue={valueToEdit.reason}
                          {...register("reason", {
                            required: true,
                            pattern: strongRegexMo,
                          })}
                        />
                        {errors &&
                          errors.reason &&
                          errors.reason.type === "required" && (
                            <p>contact number is required field</p>
                          )}
                        {errors &&
                          errors.contactno &&
                          errors.contactno.type === "pattern" && (
                            <p>invalid phone number please use valid formate</p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Leave Status</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          defaultValue={valueToEdit.leave_status}

                          name="leave_status"
                          {...register("leave_status", { required: true })}
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
                      <label className="col-sm-3 col-form-label">Total Leave</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="total_leave"
                          defaultValue={valueToEdit.total_leave}

                          {...register("total_leave", {
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
                      <label className="col-sm-3 col-form-label">Date From</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          defaultValue={valueToEdit.date_from}

                          name="date_from"
                          {...register("date_from", { required: true })}
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
                      <label className="col-sm-3 col-form-label">Date To</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          defaultValue={valueToEdit.date_to}

                          name="date_to"
                          {...register("date_to", { required: true })}
                        />
                        {errors && errors.branch && (
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
                    ADD
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
        <Modal.Title>Update Leave</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row auth">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Update Leave </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">User</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="user"
                          defaultValue={valueToEdit.user}
                          
                          {...register("user", { required: true })}
                        />
                        {errors && errors.name && <p>name is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>
{/* 
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
                </div> */}

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                       Reason
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="contactno"
                          defaultValue={valueToEdit.reason}
                          {...register("reason", {
                            required: true,
                            pattern: strongRegexMo,
                          })}
                        />
                        {errors &&
                          errors.reason &&
                          errors.reason.type === "required" && (
                            <p>contact number is required field</p>
                          )}
                        {errors &&
                          errors.contactno &&
                          errors.contactno.type === "pattern" && (
                            <p>invalid phone number please use valid formate</p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Leave Status</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          defaultValue={valueToEdit.leave_status}

                          name="leave_status"
                          {...register("leave_status", { required: true })}
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
                      <label className="col-sm-3 col-form-label">Total Leave</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="total_leave"
                          defaultValue={valueToEdit.total_leave}

                          {...register("total_leave", {
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
                      <label className="col-sm-3 col-form-label">Date From</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          defaultValue={valueToEdit.date_from}

                          name="date_from"
                          {...register("date_from", { required: true })}
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
                      <label className="col-sm-3 col-form-label">Date To</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          defaultValue={valueToEdit.date_to}

                          name="date_to"
                          {...register("date_to", { required: true })}
                        />
                        {errors && errors.branch && (
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
        <h3 className="page-title">Employee / Leave </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Leave Management
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Leave Management</h4>
            <h4 className="card-title text-right">
                  <button
                    type="button"
                    className="btn btn-gradient-primary btn-fw"
                    onClick={handleShow1}
                  >
                    Add New
                  </button>
                </h4>
                            {/* <button>hii</button> */}
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> User </th>
                    <th> Reason </th>
                    <th> Leave Status </th>
                    <th> Total Leave </th>
                    <th> Date From </th>
                    <th> Date To </th>
                    <th> Edit </th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {itemlist?.map((item) => {
                    return (
                      <tr>
                        <td>{item?.user.name}</td>
                        <td>{item?.reason}</td>
                        <td>{item?.leave_status}</td>
                        <td>{item?.total_leave}</td>

                        <td>{item?.date_from}</td>
                        <td>{item?.date_to}</td>

                        <td>
                          <i onClick={()=> handleShow(item)} className="mdi mdi-lead-pencil"></i>
                        </td>
                        <td>
                         <i onClick={()=> deleteData(item?.id)} className="mdi mdi-delete"> </i>
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
