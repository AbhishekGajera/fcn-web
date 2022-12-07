import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUrl } from "../../../utils/Functions/useUrl";
import { Form } from 'react-bootstrap';
import { ImageUpload, userLogout, addNotification, updateNotification, getNotification, deleteNotification, getNotificationByAll, getPersonalizedNotification, getNotificationByAudience, getAllUsers } from "../../../utils/APIs";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import Spinner from "../../shared/Spinner";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import MySelect from "../../../common/MySelect";


const AllNotification = () => {

  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [show, setShow] = React.useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [pagepersonalizeCount, setPersonalizeCount] = useState(0);
  const [pageAudienceCount, setAudienceCount] = useState(0);
  const [itemOffset, setItemOffset] = useUrl("page");
  const [audienceOffset, setAudienceOffset] = useUrl("page");
  const [personalizeOffset, setpersonalizeOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);
  const [itemlist, setitemlist] = useState([]);
  const [audiencelist, setaudiencelist] = useState([]);
  const [personalizelist, setpersonalizelist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [img, setimg] = useState()
  const [userOptions, setuserOptions] = useState([]);
  const [selectedUser, setselectedUser] = useState('')

  const onChangeImage = (e) => {
    setimg(e?.target?.files[0])
  }

  const handleClose = () => {
    setShow(false)
    reset()
  };

  useEffect(() => {
    list()
    getUser()
  }, [itemOffset, itemsPerPage])

  useEffect(() => {
    const timer = setTimeout(() => {
      list()
    }, 5000);
    return () => clearTimeout(timer);
  }, [])

  const deleteNotifications = (uid) => {
    const data = JSON.stringify({
      is_delete: 'true'
    })
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
        if (cookies?.user?.role !== 'admin') {
          return (
            updateNotification(uid, data).finally(() => list()),
            Swal.fire(
              "Deleted!",
              "Your imaginary file has been deleted.",
              "success"
            )
          );
        } else {
          return (
            deleteNotification(uid).finally(() => list()),
            Swal.fire(
              "Deleted!",
              "Your imaginary file has been deleted.",
              "success"
            )
          );
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  const viewNotification = (Id) => {
    history.push({
      pathname: '/viewNotification',
      search: "?" + new URLSearchParams({ id: Id }).toString()
    })
  }

  const getUser = async (name = '') => {
    const { data } = await getAllUsers(500, 1, name)
    setuserOptions(data?.results?.map((i) => ({ ...i, value: i?.id, label: i?.name })))
    return data?.results?.map((i) => ({ ...i, value: i?.id, label: i?.name }))
  }

  const list = async () => {
    setIsLoading(true)
    try {
      let items
      if (cookies?.user?.role === 'admin') {
        items = await (
          await getNotification('1', itemsPerPage, +itemOffset + 1,)
        ).data;
        setitemlist(items?.results);
      } else if (cookies?.user?.role === 'IBO') {
        items = await (
          await getNotificationByAudience(1, 'all', itemsPerPage, +itemOffset + 1,)
        ).data;
        setitemlist(items?.results?.filter(data => data.is_delete === 'false'));
      } else if (cookies?.user?.role === 'branch') {
        items = await (
          await getNotificationByAudience(1, 'all', itemsPerPage, +itemOffset + 1,)
        ).data;
        setitemlist(items?.results?.filter(data => data.is_delete === 'false'));
      } else if (cookies?.user?.role === 'user') {
        items = await (
          await getNotificationByAudience(1, 'all', itemsPerPage, +itemOffset + 1,)
        ).data;
        setitemlist(items?.results?.filter(data => data.is_delete === 'false'));
      }
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
    if (cookies?.user?.role !== 'admin') {
      let name;
      try {
        if (cookies?.user?.role === 'IBO') {
          name = 'ibo';
        } else if (cookies?.user?.role === 'branch') {
          name = 'branch';
        } else if (cookies?.user?.role === 'user') {
          name = 'user';
        }
        const audienceData = await (
          await getNotificationByAudience(1, name, itemsPerPage, +audienceOffset + 1,)
        ).data;
        setaudiencelist(audienceData?.results?.filter(data => data.is_delete === 'false'));
        setAudienceCount(audienceData?.totalPages);
      } catch (error) {
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error(process.env.REACT_APP_ERROR_MESSAGE);
        }
      }
      try {
        const personalizeData = await (
          await getPersonalizedNotification(cookies?.user?.id, itemsPerPage, +audienceOffset)
        ).data;
        setpersonalizelist(personalizeData?.results?.results?.filter(data => data.is_delete === 'false'));
        setPersonalizeCount(personalizeData?.totalPages);
      } catch (error) {
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error(process.env.REACT_APP_ERROR_MESSAGE);
        }
      }
    }
    setIsLoading(false)
  };

  const handlePageClick = (event) => {
    setItemOffset(event.selected);
  };

  const handleaudiencePageClick = (event) => {
    setAudienceOffset(event.selected);
  };

  const handlepersonlizePageClick = (event) => {
    setpersonalizeOffset(event.selected);
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
    reset,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const values = getValues();

  const onSubmit = async (data) => {
    handleClose();
    const Data = new FormData();
    let fileResult;
    if (img) {
      Data.append('file', img);
      fileResult = await ImageUpload(Data)
      if (fileResult.error) {
        toast.error(fileResult.error.message);
      }
    }
    try {
      data.attachment = fileResult ? fileResult.secure_url : '';
      data.user = cookies?.user?.id;
      data.type = "all";
      data.status = 1;
      if (data?.targetAudience === 'specificUser') {
        data.user = selectedUser
      }
      const result = await addNotification(data)
      toast.success("Notification Added successfully");
      list();
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

  const loadOptions = async inputValue => {
    return new Promise(resolve => resolve(getOptions(inputValue)));
  };

  const getOptions = async inputValue => {
    // how to trigger this to be called within loadOptions when option is selected?
    return getUser(inputValue);
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
                              <option value="specificUser">Specific User</option>
                            </select>
                          </div>
                        </Form.Group>
                        {values?.targetAudience === 'specificUser' && <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Select user to target{" "}
                          </label>
                          <div className="col-sm-8">

                            <MySelect
                              name="addressLookup"
                              className="addressLookupContainer"
                              label="Address Lookup"
                              asyncSelect={true}
                              loadOptions={loadOptions}
                              onSelect={val => setselectedUser(val?.value)}
                              defaultOptions={userOptions}
                            />
                          </div>
                        </Form.Group>}
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
                            <input type="file" id="input-id" className="d-none" onChange={onChangeImage} />
                            <button
                              onClick={handleUpload}
                              className={`btn btn-outline-${img?.name ? " btn-primary" : " btn-primary"
                                }`}
                            >
                              {img?.name ? img?.name : "Upload Image"}
                            </button>
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
            <h4 className="card-title"></h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Title </th>
                    <th> content </th>
                    <th> Type </th>
                    <th> Target Audience </th>
                    <th> View </th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? <Spinner />
                    :
                    itemlist?.map((item) => (
                      <>
                        <tr>
                          <td>{item?.title}</td>
                          <td className="max-width-200">{item?.content}</td>
                          <td>{item?.type}</td>
                          <td>{item?.targetAudience}</td>
                          <td><button
                            type="button"
                            className="btn btn-gradient-primary btn-sm "
                            onClick={() => { viewNotification(item?.id) }}
                          >
                            View
                          </button>
                          </td>
                          <td>
                            <td>
                              <i
                                onClick={() => deleteNotifications(item?.id)}
                                className="mdi mdi-delete"
                              ></i>
                            </td>
                          </td>
                        </tr>
                      </>
                    )
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

      {cookies?.user?.role !== 'admin' && audiencelist.length !== '0' && (
        <div className="col-lg-12 grid-margin stretch-card p0">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{cookies?.user.role} Notification list</h4>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Title </th>
                      <th> content </th>
                      <th> Type </th>
                      <th> Target Audience </th>
                      <th> View </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? <Spinner />
                      :
                      audiencelist?.map((item) => {
                        return (
                          <tr>
                            <td>{item?.title}</td>
                            <td>{item?.content}</td>
                            <td>{item?.type}</td>
                            <td>{item?.targetAudience}</td>
                            <td><button
                              type="button"
                              className="btn btn-gradient-primary btn-sm "
                              onClick={() => { viewNotification(item?.id) }}
                            >
                              View
                            </button>
                            </td>
                            <td>
                              <td>
                                <i
                                  onClick={() => deleteNotifications(item?.id)}
                                  className="mdi mdi-delete"
                                ></i>
                              </td>
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
                  onPageChange={handleaudiencePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageAudienceCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                  forcePage={audienceOffset}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {cookies?.user?.role !== 'admin' && personalizelist.length !== '0' && (
        <div className="col-lg-12 grid-margin stretch-card p0">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Personalize </h4>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Title </th>
                      <th> content </th>
                      <th> Type </th>
                      <th> Target Audience </th>
                      <th> View </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? <Spinner />
                      :
                      personalizelist?.map((item) => {
                        return (
                          <tr>
                            <td>{item?.title}</td>
                            <td>{item?.content}</td>
                            <td>{item?.type}</td>
                            <td>{item?.targetAudience}</td>
                            <td><button
                              type="button"
                              className="btn btn-gradient-primary btn-sm "
                              onClick={() => { viewNotification(item?.id) }}
                            >
                              View
                            </button>
                            </td>
                            <td>
                              <td>
                                <i
                                  onClick={() => deleteNotifications(item?.id)}
                                  className="mdi mdi-delete"
                                ></i>
                              </td>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                {/* <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  className="client-list"
                  onPageChange={handlepersonlizePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pagepersonalizeCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                  forcePage={personalizeOffset}
                /> */}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default AllNotification;

