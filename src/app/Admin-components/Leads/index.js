import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { deleteProductById, getProductsList, userLogout, UpdateProducts } from "../../../utils/APIs";
import Swal from "sweetalert2";
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


const Leads = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [selectedProductType, setselectedProductType] = useState("");
    const [selectedProductCategory, setselectedProductCategory] = useState("");
    const [isChecked, setIsChecked] = useState("");

    // We start with an empty list of items.
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useUrl("page");
    const [itemsPerPage] = useState(10);
    const [cookies, setCookie] = useCookies(["user"]);
    const [show, setShow] = React.useState(false);
    const [itemlist, setitemlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [phone, setPhone] = useState('+91');
    const history = useHistory()

    useEffect(() => {
        list();
    }, [itemOffset, itemsPerPage, selectedProductType, selectedProductCategory, debouncedSearchTerm]);

    // Invoke when user click to request another page. 
    const handlePageClick = (event) => {
        setItemOffset(event.selected);
    };

    const handleOnChange = value => {
        setPhone(value);
    }

    const deleteProduct = (uid) => {
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

                const itemList = Object.keys(isChecked).map((id) => {
                    if (isChecked[id] === true) {
                        deleteProductById(id)
                    }
                    Swal.fire(
                        "Deleted!",
                        "Your imaginary file has been deleted.",
                        "success"
                    )
                })
                Promise.all(itemList).then(() => {
                    list();
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    };

    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
        mode: "onChange"
    });

    const list = async () => {
        setIsLoading(true)
        try {
            const items = await (
                await getProductsList(
                    itemsPerPage,
                    +itemOffset + 1,
                    searchTerm,
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

    const formateStatus = (status) => {
        switch (status) {
            case '0':
                return "Inactive";
            case '1':
                return "Active";
            default:
                return 'Active';
        }
    }

    const handleMultiChange = (e) => {
        setIsChecked({ ...isChecked, [e.target.id]: e.target.checked });
    }

    const handleClose = () => {
        setShow(false)
        reset()
    };

    const onSubmit = async (data) => {
        console.log("data", data)
    }

    const handleShow = () => {
        reset()
        setShow(true);
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
                    <Modal.Title>Create Lead</Modal.Title>
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
                                                    <label className="col-sm-3 col-form-label">status</label>
                                                    <div className="col-sm-9">
                                                        <select
                                                            name="status"
                                                            {...register("status")}
                                                        >
                                                            <option>New</option>
                                                            <option>Working</option>
                                                        </select>
                                                        {errors && errors.status && <p> select Status is required field</p>}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        First Name
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Form.Control
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="First Name"
                                                            autoFocus
                                                            {...register("firstName", {
                                                                required: true,
                                                            })}
                                                        />
                                                        {errors &&
                                                            errors.firstName &&
                                                            errors.firstName.type === "required" && (
                                                                <p>FirstName is required field</p>
                                                            )}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Last Name
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Form.Control
                                                            type="text"
                                                            name="LastName"
                                                            placeholder="Last Name"
                                                            autoFocus
                                                            {...register("LastName", {
                                                                required: true,
                                                            })}
                                                        />
                                                        {errors &&
                                                            errors.LastName &&
                                                            errors.LastName.type === "required" && (
                                                                <p>LastName is required field</p>
                                                            )}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Title
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Form.Control
                                                            type="text"
                                                            name="Title"
                                                            placeholder="Title"
                                                            autoFocus
                                                            {...register("Title", {
                                                                required: true,
                                                            })}
                                                        />
                                                        {errors &&
                                                            errors.Title &&
                                                            errors.Title.type === "required" && (
                                                                <p>Title is required field</p>
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
                                                            placeholder="Email"
                                                            autoFocus
                                                            {...register("email", {
                                                                required: true,
                                                            })}
                                                        />
                                                        {errors &&
                                                            errors.email &&
                                                            errors.email.type === "required" && (
                                                                <p>Email is required field</p>
                                                            )}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">Contact No</label>
                                                    <div className="col-sm-9">
                                                        <PhoneInput
                                                            inputExtraProps={{
                                                                name: "contactno",
                                                                required: true,
                                                                autoFocus: true
                                                            }}
                                                            country={"US"}
                                                            value={phone}
                                                            onChange={handleOnChange}
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">Source</label>
                                                    <div className="col-sm-9">
                                                        <select
                                                            name="source"
                                                            {...register("source")}
                                                        >
                                                            <option>Other</option>
                                                            <option>Partner</option>
                                                        </select>
                                                        {errors && errors.source && <p> select Source is required field</p>}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">Address</label>
                                                    <div className="col-sm-9">
                                                        <Form.Control
                                                            type="text"
                                                            name="address"
                                                            placeholder="Address"
                                                            {...register("address", { required: true })}
                                                        />
                                                        {errors && errors.address && (
                                                            <p>Address is required field</p>
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
                                                CREATE
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
                <h3 className="page-title">Leads / Show Leads </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="!#" onClick={(event) => event.preventDefault()}>
                                {cookies?.user?.role} Dashboard
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Show Leads
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card p0">
                <div className="card">
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <h4 className="card-title">Lead list</h4>
                            </div>
                            <div className="col-md-5">
                                <div className="search-field d-none d-md-block">
                                    <form className="d-flex align-items-center h-100" action="#">
                                        <div className="input-group">
                                            <div className="input-group-prepend outline-gray bg-transparent">
                                                <i className="input-group-text border-0 mdi mdi-magnify"></i>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control outline-gray bg-transparent border-0"
                                                placeholder="Search Lead"
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
                            <div className="col-md-3" style={{ textAlign: 'end' }}>
                                <button
                                    type="button"
                                    className="btn btn-gradient-primary btn-fw"
                                    onClick={() => handleShow()}
                                >
                                    Add Lead
                                </button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th> Name </th>
                                        <th> Title </th>
                                        <th> Email </th>
                                        <th> Source </th>
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
                                                        <td>{item?.name}</td>
                                                        <td>{item?.category}</td>
                                                        <td>{item?.description}</td>
                                                        <td>{formateStatus(item?.status)}</td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                            <i
                                                                onClick={() => deleteProduct(item?.id)}
                                                                className="mdi mdi-delete"
                                                            ></i>
                                                        </td>
                                                        <td>

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

export default Leads;
