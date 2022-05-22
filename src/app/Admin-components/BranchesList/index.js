import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getBranches } from "../../../utils/APIs";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';

const BranchList = () => {
  const [cookies] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [show, setShow] = React.useState(false);
  const [valueToEdit, setvalueToEdit] = useState({})

  const { register, handleSubmit, formState: { errors , isDirty, isValid } } = useForm({
    mode: "onChange"
  });
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );
  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");

  const handleClose = () => {
    setShow(false)
    setvalueToEdit({})
  };

  const handleShow = (value) =>{ 
    setvalueToEdit(value)
   
      setShow(true);
  
  }
  console.log(valueToEdit);
  const onSubmit = async (data) => {
    alert(data);
    };


  useEffect(() => {
    (async () => {
      const endOffset = itemOffset + itemsPerPage;
      const items = await (await getBranches(itemsPerPage, itemOffset)).data;
      setitemlist(items?.results);
      console.info("items ", items);

      // Fetch items from another resources.
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items?.results?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items?.results?.length / itemsPerPage));
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
  const deleteBranch =(uid)=>{
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
        // return (
        //   deleteUsr(uid, () => {
        //     list();
        //   }),
        //   Swal.fire(
        //     "Deleted!",
        //     "Your imaginary file has been deleted.",
        //     "success",
        //   )
        // );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
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
        <Modal.Title>Update Client</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row auth">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Update Client </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="name"
                          defaultValue={valueToEdit.name}
                          {...register("name", { required: true })}
                       
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
                            <p>invalid phone number please use valid formate</p>
                          )}
                      </div>
                    </Form.Group>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Branch</label>
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
                      <label className="col-sm-3 col-form-label">Email</label>
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
                      <label className="col-sm-3 col-form-label">Role</label>
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
        <h3 className="page-title">branches / Fetch Branch </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Fetch branches
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Branch list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Contact no. </th>
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
                        <td>{item?.contactno}</td>
                        <td>{item?.branch}</td>
                        <td>{item?.email}</td>
                        <td>{item?.role}</td>
                        <td>
                          <i onClick={()=> handleShow(item)} className="mdi mdi-lead-pencil"></i>
                        </td>
                        <td>
                          <i  onClick={()=> deleteBranch(item?.id)} className="mdi mdi-delete"></i>
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

export default BranchList;
