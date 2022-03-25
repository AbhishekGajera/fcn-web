import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

const Deposit = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    handleClose()
    toast.success('Your request sended successfully')
    console.log(data);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 ">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-sample"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Enter Amount
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Amount"
                              name="amount"
                              {...register("amount", { required: false })}
                            />
                            {errors?.amount && <p>{errors?.amount?.message}</p>}
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Enter Account-number
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              placeholder="Enter Account-number"
                              name="account-number"
                              {...register("account-number", {
                                required: false,
                              })}
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Enter Account-number
                          </label>
                          <div className="col-sm-9">
                            <select className="form-select">
                              <option selected={true}>Surat</option>
                              <option>Masma</option>
                              <option>Olpad</option>
                              <option>Navsari</option>
                              <option>Valsad</option>
                            </select>
                          </div>
                        </Form.Group>
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Training Type
                          </label>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="demat"
                                  {...register("demat", { required: false })}
                                />
                                <i className="input-helper"></i>
                                Demat
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="commoditiy"
                                  {...register("commoditiy", { required: false })}
                                />
                                <i className="input-helper"></i>
                                Commoditiy
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="forex"
                                  {...register("forex", { required: false })}
                                />
                                <i className="input-helper"></i>
                                Forex
                              </label>
                            </div>
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="text-center mb-4 font-weight-light">
                      for bank details{" "}
                      <a
                        onClick={() => window.open("/user-pages/bank-details")}
                        className="text-primary"
                      >
                        click here
                      </a>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn  btn-primary btn-sm font-weight-medium auth-form-btn "
                        type="submit"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="col-md-4 stretch-card grid-margin">
        <div className="card bg-gradient-success card-img-holder text-white">
          <div className="card-body">
            <img
              src={require("../../../assets/images/dashboard/circle.svg")}
              className="card-img-absolute"
              alt="circle"
            />
            <h4 className="font-weight-normal mb-4">
              Deposit{" "}
              <i className="mdi mdi-chart-line mdi-24px float-right"></i>
            </h4>

            <button
              type="button"
              className="btn btn-gradient-primary btn-fw mb-2 center"
              onClick={handleShow}
            >
              Click Here
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
