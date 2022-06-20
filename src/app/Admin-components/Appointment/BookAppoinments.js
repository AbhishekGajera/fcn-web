import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { CreateAppoinments } from "../../../utils/APIs";
import { useHistory } from "react-router-dom";

const BookAppoinment = () => {
  const [cookies] = useCookies(["user"]);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const formData = JSON.stringify({
      'user' : cookies?.user?.id,
      'toDate' : data?.toDate,
      'fromDate' : data?.fromDate,
      'Description' : data?.Description,
      'status' : 1
    })

    try {
      await CreateAppoinments(formData);
      toast.success("Appoinment Booked successfully");
      history.push('/appointment/fetchAppoinment');

      
   
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

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Appoinments / Book Appoinment </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Book Appoinment
            </li>
          </ol>
        </nav>
      </div>
      <div
        className="row auth"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="card-description"> Book Appoinment </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">From :</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="datetime-local"
                          name="fromDate"
                          {...register("fromDate", { required: true })}
                          placeholder="fromDate"
                        />
                        {errors && errors.fromDate && (
                          <p> selecting From is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">To :</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="datetime-local"
                          name="toDate"
                          {...register("toDate", { required: true })}
                          placeholder="toDate"
                        />
                        {errors && errors.toDate && (
                          <p> selecting To is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Description{" "}
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="Description"
                          as="textarea"
                          {...register("Description", { required: true })}
                        />
                        {errors && errors.desc && (
                          <p>description is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div
                  className="mt-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
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
    </div>
  );
};

export default BookAppoinment;
