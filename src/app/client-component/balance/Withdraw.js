import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

const Withdraw = () => {
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
          <Modal.Title>Withdraw</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 ">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form"
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
                            {errors?.amount && <p>amount is required field</p>}
                          </div>
                        </Form.Group>

                          <div className="card">
                            <div className="card-body">
                              <h4 className="card-title">Your bank details</h4>
                              <div className="media">
                                <i className="mdi mdi-pencil icon-md text-info d-flex align-self-start mr-3"></i>
                                <div className="media-body">
                                  <p className="card-text">
                                    FCN ADMIN
                                  </p>
                                  <address>IDBI Bank Katargam Branch</address>
                                  <p className="card-text">IFSC: IBKLO001337</p>
                                  <p className="card-text">
                                    A/c. No.: 1337102000010168
                                  </p>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
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
        <div className="card bg-gradient-danger card-img-holder text-white">
          <div className="card-body">
            <img
              src={require("../../../assets/images/dashboard/circle.svg")}
              className="card-img-absolute"
              alt="circle"
            />
            <h4 className="font-weight-normal mb-4">
              WithDraw{" "}
              <i className=" mdi mdi-logout-variant mdi-24px float-right"></i>
            </h4>

            <button
              type="button"
              className="btn btn-gradient-primary btn-fw mb-2"
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

export default Withdraw;
