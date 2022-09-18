import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import {
    getTransaction,
    userLogout,
    getTransactionUsrs,
    updateTransaction,
    deleteTransaction,
} from "../../../utils/APIs";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useUrl } from "../../../utils/Functions/useUrl";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";

const Transaction = () => {
    const history = useHistory();
    const [cookies, setCookie] = useCookies(["user"]);
    const [show, setShow] = React.useState(false);
    const [valueToEdit, setvalueToEdit] = useState({});
    const [itemlist, setitemlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);



    // We start with an empty list of items.
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useUrl("page");
    const [itemsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        list();
    }, [itemOffset, itemsPerPage]);

    useEffect(() => {
        list();
    }, [debouncedSearchTerm]);

    const list = async () => {
        setIsLoading(true)
        try {
            let items

            if (cookies?.user?.role === 'admin') {
              items = await (
                await getTransaction()
              ).data;
            }
            if (cookies?.user?.role === 'IBO' || cookies?.user?.role === 'branch' || cookies?.user?.role === 'user' ) {
                
                items = await (
                  await getTransactionUsrs(cookies?.user?.id)
                ).data;
              }
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


    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        window.scrollTo(0, 0);
        setItemOffset(event.selected);
    };

    const handleClose = () => {
        setShow(false)
        setvalueToEdit({})
        reset()
    };

    const handleShow = (value) => {
        reset()
        setvalueToEdit(value)
        setShow(true);
    }

    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
        mode: "onChange"
    });

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
                    deleteTransaction(uid).finally(() => list()),
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

    const onSubmit = async (data) => {
        try {
            data.trasaction_id = valueToEdit?.id;
            const updatedData = JSON.stringify(data)
            await updateTransaction(updatedData)
            toast.success('Transaction updated Successfully', {
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

    const formateStatus = (status) => {
        switch (+status) {
            case (0):
                return 'Pending';
            case (1):
                return 'approved';
            case (2):
                return 'Declined'            
            default:
                return 'Pending';
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
                    <Modal.Title>Update Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row auth">
                        <div className="col-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                                        <p className="card-description"> Update Transaction </p>
                                        <div className="row" >
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">Status</label>
                                                    <div className="col-sm-9">
                                                        <select
                                                            className="form-control form-control-lg"
                                                            id="exampleFormControlSelect2"
                                                            name="status"
                                                            {...register("status", {
                                                                required: true,
                                                            })}>
                                                            <option value=''>--Select Status--</option>
                                                            <option value='0' selected={valueToEdit.status === 0}>Pending</option>
                                                            <option value='1' selected={valueToEdit.status === 1}>approved</option>
                                                            <option value='2' selected={valueToEdit.status === 2}>Declined</option>
                                                        </select>
                                                        {errors && errors.status && (
                                                            <p>status is required field</p>
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
                    </div >
                </Modal.Body>
            </Modal>
            <div className="page-header">
                <h3 className="page-title">Transaction / Show Transaction </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="!#" onClick={(event) => event.preventDefault()}>
                                {cookies?.user?.role} Dashboard
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Show Transaction
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card p0">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6"></div>
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
                                                placeholder="Search Transaction"
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
                        <h4 className="card-title">Transaction list</h4>

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th> From </th>
                                        <th> TO </th>
                                        <th> Amount </th>
                                        <th> Type </th>
                                        <th> Status </th>
                                        <th> Edit </th>
                                        <th> Delete </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading ? <Spinner />
                                        :
                                        itemlist?.map((item) => {
                                            return (
                                                <tr>
                                                    <td>{item?.from_user?.name}</td>
                                                    <td>{item?.to_user?.name}</td>
                                                    <td>{item?.total}</td>
                                                    <td>{item?.type}</td>
                                                    <td>{formateStatus(item?.status)}</td>
                                                    <td><i onClick={() => handleShow(item)} className="mdi mdi-lead-pencil"></i></td>
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

export default Transaction;
