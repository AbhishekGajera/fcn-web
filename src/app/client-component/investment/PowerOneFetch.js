import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { deletePowerone, getpowerone, userLogout, UpdateProducts, updatePowerone } from "../../../utils/APIs";
import Swal from "sweetalert2";
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const PowerOneFetch = () => {
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
    const [itemsPerPage] = useState(20);
    const [cookies, setCookie] = useCookies(["user"]);
    const [show, setShow] = React.useState(false);
    const [valueToEdit, setvalueToEdit] = useState({});
    const [itemlist, setitemlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        list();
    }, [itemOffset, itemsPerPage, debouncedSearchTerm]);

    // Invoke when user click to request another page. 
    const handlePageClick = (event) => {
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

    const deletePowerOne = (uid) => {
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
                    deletePowerone(uid).finally(() => list()),
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
            await updatePowerone(valueToEdit?.id, data)
            toast.success('Powerone updated Successfully', {
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


    const list = async () => {
        setIsLoading(true)
        try {
            const items = await (
                await getpowerone(
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

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Powerone</Modal.Title>
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
                                                        {errors && errors.name && <p>name is required field</p>}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Email{" "}
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Form.Control
                                                            type="text"
                                                            name="email"
                                                            defaultValue={valueToEdit.email}
                                                            {...register("email", { required: true })}
                                                            placeholder="email"
                                                        />
                                                        {errors && errors.address && (
                                                            <p>Email is required field</p>
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
                                                            as="textarea"
                                                            name="address"
                                                            defaultValue={valueToEdit.address}
                                                            {...register("address", { required: true })}
                                                            placeholder="address"
                                                        />
                                                        {errors && errors.desc && (
                                                            <p>Address is required field</p>
                                                        )}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row" >
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">Mobile</label>
                                                    <div className="col-sm-9">
                                                        <Form.Control type="text"
                                                            name="mobile"
                                                            defaultValue={valueToEdit?.mobile}
                                                            {...register("mobile", { required: true })} />
                                                        {errors && errors.mobile && <p style={{ color: "red" }}>Mobile is required field</p>}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row" >
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">City</label>
                                                    <div className="col-sm-9">
                                                        <Form.Control type="text" name="city" placeholder="Enter Your city"
                                                            defaultValue={valueToEdit?.city}
                                                            {...register("city", { required: true })} />

                                                        {errors && errors.city && <p style={{ color: "red" }}>city is required field</p>}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">State</label>
                                                    <div className="col-sm-9">
                                                        <Form.Control type="text" name="state" placeholder="Enter Your state"
                                                            defaultValue={valueToEdit?.state}
                                                            {...register("state", { required: true })} />
                                                        {errors && errors.state && <p style={{ color: "red" }}>state is required field</p>}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">Country</label>
                                                    <div className="col-sm-9">
                                                        <Form.Control type="text" name="country" placeholder="Enter Your country"
                                                           defaultValue={valueToEdit?.country}
                                                           {...register("country", { required: true })} />
                                                        {errors && errors.country && <p style={{ color: "red" }}>country is required field</p>}
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
                <h3 className="page-title">Powerone / Show Powerone </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="!#" onClick={(event) => event.preventDefault()}>
                                {cookies?.user?.role} Dashboard
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Show Powerone
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
                                                placeholder="Search Powerone"
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
                        <h4 className="card-title">Powerone list</h4>

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th> Name </th>
                                        <th> Email </th>
                                        <th> Mobile </th>
                                        <th> Address</th>
                                        <th> City </th>
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
                                                        <td>{item?.name}</td>
                                                        <td>{item?.email}</td>
                                                        <td>{item?.mobile}</td>
                                                        <td>{item?.address}</td>
                                                        <td>{item?.city}</td>
                                                        <td><i onClick={() => handleShow(item)} className="mdi mdi-lead-pencil"></i></td>
                                                        <td>
                                                            <i
                                                                onClick={() => deletePowerOne(item?.id)}
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

export default PowerOneFetch;
