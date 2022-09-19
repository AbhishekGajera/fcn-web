import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUrl } from "../../../utils/Functions/useUrl";
import { Form } from 'react-bootstrap';
import { ImageUpload, userLogout, addNotification, getNotification } from "../../../utils/APIs";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import Spinner from "../../shared/Spinner";
import ReactPaginate from "react-paginate";


const AllNotification = () => {

  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [show, setShow] = React.useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);
  const [itemlist, setitemlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const handleClose = () => {
    setShow(false)
  };

  useEffect(() => {
    list()
  },[])



  // setTimeout(() => {
  //   list()
  // }, 3000);

  const list = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getNotification()
      ).data;
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

  const handlePageClick = (event) => {
    setItemOffset(event.selected);
  };

  const handleUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-id');
    if (element) {
      element.click()
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const values = getValues();

  const onSubmit = async (data) => {
    setShow(false);
    const Data = new FormData();
    Data.append('file', data.file[0]);
    const fileResult = await ImageUpload(Data)
    if (fileResult.error) {
      toast.error(fileResult.error.message);
    } else {
      try {
        delete data.file;
        data.attachment = fileResult.secure_url;
        data.user = cookies?.user?.id;
        data.type = "all";
        data.status = 1;
        const result = await addNotification(data)
        toast.success("Notification Added successfully");
        history.push('/notification/all')
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
          <Modal.Title>Send Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row auth">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                    <p className="card-description"> Send Notification </p>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Title</label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              name="title"
                              {...register("title", { required: true })}

                            />
                            {errors && errors.title && <p>Title is required field</p>}
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Select targetAudience{" "}
                          </label>
                          <div className="col-sm-8">
                            <select name='targetAudience' className="form-control form-control-lg"
                              {...register("targetAudience", {
                                required: true,
                              })}>
                              <option value="all">All</option>
                              <option value="branch">Branch</option>
                              <option value="ibo">IBO</option>
                              <option value="client">Client</option>
                            </select>
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Description{" "}
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="content"
                              {...register("content", { required: true })}
                            />
                            {errors && errors.content && (
                              <p>Content is required field</p>
                            )}
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Notification Image{" "}</label>

                          <div className="col-sm-8">
                            <Form.Control
                              id="input-id"
                              className="d-none"
                              type="file"
                              name="file"
                              multiple={false}
                              {...register("file", { required: true })}
                            />

                            <button
                              onClick={handleUpload}
                              className={`btn btn-outline-${values?.file?.[0]?.name ? " btn-primary" : " btn-primary"
                                }`}
                            >
                              {values?.file?.[0]?.name ? values?.file?.[0]?.name : "Upload Image"}
                            </button>
                            {errors && errors.file && (
                              <p>Notification image is required field</p>
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
                        Send
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
        <h3 className="page-title">Notification / All </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {/* {cookies?.user?.role}  */}
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              All
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row" style={{ marginBottom: '14px' }}>
              <div className="col-md-3">
                {cookies?.user?.role === "admin" && (
                  <button className="btn btn-gradient-primary btn-lg" type="button" onClick={() => setShow(true)}>
                    Send Notification
                  </button>
                )}
              </div>
              <div className="col-md-9">
              </div>
            </div>
            <h4 className="card-title">Notification list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Title </th>
                    <th> content </th>
                    <th> Type </th>
                    <th> Target Audience </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? <Spinner />
                    :
                    itemlist?.map((item) => {
                      return (
                        <tr>
                          <td>{item?.title}</td>
                          <td>{item?.content}</td>
                          <td>{item?.type}</td>
                          <td>{item?.targetAudience}</td>
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
}

export default AllNotification;

