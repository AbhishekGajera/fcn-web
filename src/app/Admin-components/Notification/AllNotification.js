import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import { getusersbyfilter } from "../../../utils/APIs";
// import { useCookies } from "react-cookie"
import Select from 'react-select'

const AllNotification = () => {

  // const [cookies, setCookie] = useCookies(["user"]);
  const [show, setShow] = React.useState(false);
  const [searchTerm, setsearchTerm] = React.useState('');
  const [dropDownOpt, setdropDownOpt] = React.useState([]);

  const handleClose = () => {
    setShow(false)
  };

  useEffect(() => {
    getUserlist();
  }, [searchTerm]);

  const getUserlist = async () => {
    const items = await (await getusersbyfilter(searchTerm));
    const Userlist = items?.data?.results;
    const dropDownValue = Userlist.map((response) => ({
      "value": response.email,
      "label" : response.email
    }))
    // console.log("dropDownValue",dropDownValue)
    setdropDownOpt(dropDownValue)
  }

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
    console.log("data", data);
    setShow(false);
  }

  const searchUpdated = (term) => {
    console.log("term", term);
    setsearchTerm(term)
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
                            Select User{" "}
                          </label>
                          <div className="col-sm-8">
                            <Select
                              options={dropDownOpt}
                              onChange={searchUpdated}
                              name='user'
                              isMulti
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Description{" "}
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="description"
                              {...register("description", { required: true })}
                            />
                            {errors && errors.description && (
                              <p>Description is required field</p>
                            )}
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Upload Image{" "}</label>

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
                              <p>Upload image is required field</p>
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
                <button className="btn btn-gradient-primary btn-lg" type="button" onClick={() => setShow(true)}>
                  Send Notification
                </button>
              </div>
              <div className="col-md-9">
              </div>
            </div>
            <h4 className="card-title">Receiver list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Title </th>
                    <th> Description </th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllNotification;

