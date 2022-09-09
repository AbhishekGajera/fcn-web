import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import {
    deleteVideo,
    getVideo,
    UpdateTargets,
    userLogout
} from "../../../utils/APIs";
import Swal from "sweetalert2";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const FetchVideo = () => {

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useUrl("page");
    const [itemsPerPage] = useState(10);
    const [show, setShow] = React.useState(false);
    const [valueToEdit, setvalueToEdit] = useState({});
    const [cookies, setCookie] = useCookies(["user"]);
    const [itemlist, setitemlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        list();
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        setItemOffset(event.selected);
    };

    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
        mode: "onChange"
    });

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
                    deleteVideo(uid).finally(() => list()),
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
            data.target_id = valueToEdit?.id;
            const updatedData = JSON.stringify(data)
            await UpdateTargets(updatedData)
            toast.success('Target updated Successfully', {
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
        setIsLoading(true);
        try {
            const items = await (
                await getVideo()
            ).data;
            setitemlist(items?.results);
            setPageCount(items?.totalPages);
            setIsLoading(false);
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

    const onClickDownload = (videoURL) => {
        window.open(videoURL, '_blank');
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
                    <Modal.Title>Update Target</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row auth">
                        <div className="col-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                                        <p className="card-description"> Update Target </p>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Group className="row">
                                                    <label className="col-sm-3 col-form-label">
                                                        Description
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Form.Control
                                                            as="textarea"
                                                            type="text"
                                                            name="Description"
                                                            defaultValue={valueToEdit.Description}
                                                            {...register("Description", { required: true })}
                                                            placeholder="Description"
                                                        />
                                                        {errors && errors.Description && (
                                                            <p>Description is required field</p>
                                                        )}
                                                    </div>
                                                </Form.Group>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">

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
                <h3 className="page-title">Video / Show Video </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="!#" onClick={(event) => event.preventDefault()}>
                                {cookies?.user?.role} Dashboard
                            </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Show Video
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card p0">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Video list</h4>

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th> Type </th>
                                        <th> Title </th>
                                        <th> Delete </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading ? (
                                        <React.Fragment>
                                            <Spinner />
                                        </React.Fragment>
                                    ) : (
                                        itemlist?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item?.type}</td>
                                                    <td>{item?.title}</td>
                                                    <td>
                                                        <i
                                                            onClick={() => deleteData(item?.id)}
                                                            className="mdi mdi-delete"
                                                        ></i>
                                                    </td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-gradient-primary btn-sm "
                                                            onClick={() => onClickDownload(item?.url)}
                                                        >
                                                            Download Video
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
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

export default FetchVideo;
