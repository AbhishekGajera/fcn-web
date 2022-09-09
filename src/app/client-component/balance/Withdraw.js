import React from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  addTransaction,
  getBranchesClient,
  userLogout
} from "../../../utils/APIs";

const Withdraw = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = React.useState([]);
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

  const list = async () => {
    try {
      const items = await (await getBranchesClient()).data;
      setitemlist(items?.results);
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

  const onSubmit = async (data) => {
    handleClose();
    const formData = JSON.stringify({
      'total': data.amount,
      'from_user': data.branch,
      'to_user': cookies?.user?.id,
      'type': "withdraw",
      'status': 0
    })
    try {
      await addTransaction(formData);
      toast.success("Withdraw Request successfully");
      history.push("/balance");
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
  };

  React.useEffect(() => {
    list();
  }, []);

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
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            From
                          </label>
                          <div className="col-sm-9">
                            <select
                              className="form-control form-control-lg"
                              id="exampleFormControlSelect2"
                              name="branch"
                              {...register("branch", {
                                required: true,
                              })}
                            >
                              <option value=''>--Select branch--</option>
                              {itemlist.map((item, index) => (
                                <option key={index} value={item?.id} label={item?.name} ></option>
                              ))}
                            </select>
                            {errors && errors.branch && <p>Select branch is required field</p>}
                          </div>
                        </Form.Group>
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
