import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getEmployeeLeaves ,deleteEmployeeLeave,userLogout,getAllEmployee, updateEmployeeLeave,approveEmployee } from "../../../utils/APIs";
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
  const [employeeList, setemployeeList] = useState([])
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(10);
  const [show, setShow] = React.useState(false);
  const [valueToEdit, setvalueToEdit] = useState({});
 
  const { register, handleSubmit,reset, formState: { errors , isDirty, isValid } } = useForm({
    mode: "onChange"
  });

  const [modelMode, setmodelMode] = useState('create')

  const onSubmit = async (data) => {
    const date1 = new Date(data?.date_from);
    const date2 = new Date(data?.date_to);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(modelMode === 'edit'){
    try {
      const formData = JSON.stringify({
        leave_id: valueToEdit?.id,
        user: data.user,
        reason: data?.reason,
        leave_status: data?.leave_status,
        total_leave : diffDays,
        date_from : new Date(data?.date_from).toISOString(),
        date_to : new Date(data?.date_to).toISOString(),
      });
      await updateEmployeeLeave(formData)
      toast.success('Leave updated successfully',{
        autoClose : true
      })
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
    finally {
      handleClose()
      getData()
    }
  }

  if(modelMode === 'create'){
    try {
      const formData = JSON.stringify({
        user: data.user,
        reason: data?.reason,
        leave_status: data?.leave_status,
        total_leave : diffDays,
        date_from : new Date(data?.date_from).toISOString(),
        date_to : new Date(data?.date_to).toISOString(),
      });
      await approveEmployee(formData)
      toast.success('Leave added successfully',{
        autoClose : true
      })
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
    finally {
      handleClose()
      getData()
    }
  }
  };

  const handleClose = () => {
    setShow(false)
    setvalueToEdit({})
    reset()
  };


  const handleShow = (value,mode) => { 
    reset()

    if(mode === 'edit'){
      setvalueToEdit(value)
      setmodelMode('edit')
    }

    if(mode === 'create'){
      setvalueToEdit(value)
      setmodelMode('create')
    }
    setShow(true);
  }

  useEffect(() => {
    getData()
  }, [itemOffset, itemsPerPage]);

  useEffect(() => {
    getEmployeeData()
  }, []);

  const getEmployeeData = async () => {
      try {
        const result = await getAllEmployee()
        setemployeeList(result.data.results)
      } catch (error) {
        getEmployeeData()
      }
  }

  const getData = async () => {
      try {
        const result = await (await getEmployeeLeaves(itemsPerPage, itemOffset)).data;
        setitemlist(result?.results);  
        // Fetch items from another resources.
        setPageCount(result?.totalPages);
      } catch (error) {
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

  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected + 1);
    setItemOffset(newOffset);
  };


  const deleteData = (id) => {
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
          deleteEmployeeLeave(id),
          Swal.fire(
            "Deleted!",
            "Your imaginary file has been deleted.",
            "success",
          )
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    }).finally(() => {
      getData()
    })
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
        <Modal.Title>{modelMode === 'edit' ? 'Update' : 'Create'} Leave</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row auth">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">User</label>
                      <div className="col-sm-9">
                      <select
                          name="user"
                          {...register("user")}
                          defaultValue={valueToEdit?.user?.id}
                        >
                            {employeeList?.map((item) => {
                              return <>
                                <option value={item?.id} selected={valueToEdit?.user?.id === item?.id}>{item?.name}</option>
                              </>
                            })}
                        </select>
                        {errors && errors.user && <p> select employee is required field</p>}
                      </div>
                    </Form.Group>
                  </div>
                </div>

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
                          defaultValue={valueToEdit?.reason}
                          autoFocus
                          {...register("reason", {
                            required: true,
                          })}
                        />
                        {errors &&
                          errors.reason &&
                          errors.reason.type === "required" && (
                            <p>reason is required field</p>
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
                        <select
                          name="leave_status"
                          {...register("leave_status")}
                        >
                            <option value="pending" selected={valueToEdit.leave_status === 'pending'} >pending</option>
                            <option value="approved" selected={valueToEdit.leave_status === 'approved'} >approved</option>
                            <option value="rejected" selected={valueToEdit.leave_status === 'rejected'} >rejected</option>
                        </select>
                        {errors && errors.leave_status && (
                          <p>Leave status is required field</p>
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
                          type="date"
                          defaultValue={(valueToEdit?.date_from)?.substring(0, 10)}
                          name="date_from"
                          {...register("date_from", { required: true })}
                        />
                        {errors && errors.date_from && (
                          <p>date_from is required field</p>
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
                          type="date"
                          defaultValue={(valueToEdit?.date_to)?.substring(0, 10)}
                          name="date_to"
                          {...register("date_to", { required: true })}
                        />
                        {errors && errors.date_to && (
                          <p>date_to is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                    disabled={!isDirty || !isValid}
                  >
                    {modelMode === 'edit' ? 'UPDATE' : 'CREATE'}
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
                    onClick={() => handleShow({},'create')}
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

                        <td>{new Date(item?.date_from)?.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                        <td>{new Date(item?.date_to)?.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                        <td>
                          <i onClick={()=> handleShow(item,'edit')} className="mdi mdi-lead-pencil"></i>
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
                forcePage={0}
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
