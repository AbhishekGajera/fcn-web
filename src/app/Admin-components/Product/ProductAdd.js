import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Modal } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { CreateProduct } from "../../../utils/APIs";
import { useHistory } from "react-router-dom";

const ProductAdd = () => {
  const [cookies] = useCookies(["user"]);
  const history = useHistory();
  const [data, setdata] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-id');
    if (element) {
      element.click()
    }
  };

  document.addEventListener('keypress', function (e) {
    if(e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const values = getValues();

  const submit = async () => {
    const formData = new FormData()
    formData.append("user", cookies?.user?.id)
    formData.append("category", data?.category)
    formData.append("description", data?.description)
    formData.append("image", data?.file[0])
    formData.append("name", data?.name)
    formData.append("commision", data?.commision)
    formData.append("status", data?.status)
    try {
      await CreateProduct(formData);
      toast.success("Product created successfully");
      history.push("/products/productslist");
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
  const onSubmit = async (data) => {
    setdata(data)
    setShow(!show)
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} size='xl' >
        <Modal.Header closeButton>
          <Modal.Title>Terms And Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ml-3">
          <p>This memorandum of understanding is made and entered on this the ___Day of JUL , 2022 at Surat in the State of Gujarat between Vijay Pitha Kanpariya (proprietor of FCN Training Academy)</p>

          <p>Having address U7-8, SHREE NIVAS COMPLEX, B/S I.C.GANDHI SCHOOL, SUMUL DAIRY ROAD, SURAT-395004. Herein after referred to as FIRST PART AND _________________, ADDRESS_________________________ Herein after referred to as SECOND PART. Whereas First Part is engaged in the business of Forex, Share, Commodity Trading &amp; Broking and other business. The Second Part is an Independent individual having been decided to help and invest in the business of the First Part and shall be earning yearly remuneration from the said investments. Whereas parties have mutually arrived to decision and entered into the said MOU to subscribe their hands as per decisions. The terms and conditions of the said Memorandum of Understanding are as under: Second Part has hereby agreed to invest an amount of Rs ____- (TWO LAKHS Only) in the business of the First Part. It is further agreed by and between the parties that First Part shall pay a Yearly remuneration of 24 % (Twenty Four Percent Only) by Cheque or by Online payment yearly to the Second part up till 12 months from the date of investment. 1. It is further agreed by and between the parties that Second Part shall have no claims, rights or interest of any manner in the business of the First Part.</p>

          <p>2. It is also agreed by and between the parties that First Part shall pay by Cheque or - Online Payment in for the compensation to the Second Part for the agreed period i.e. of one year.</p>

          <p>3. It is agreed by and between the parties, that First Part shall return the investment made by Second Part, the amount invested by the Second  Part shall be compensated and refunded together in the form as agreed in Para 2 of the said understanding i.e. of one year.</p>

          <p>4. It is also agreed by and between the party that, Second Part shall have no right or claim as to which of the business the said amount is to be invested, however claim of the Second Part shall be only on the agreed and decided remuneration.</p>

          <p>5. First Part has agreed to give Post Dated Cheque dated of IDBI Bank Having A/C No.1337102000010168 as following to second part and second part can deposit cheque in bank on the date of the cheque or can online payment to first part.  Cheque Number Amount Date       In case of any delay in the clearance of the said Cheque , the First Part shall pay the interest at the rate of 24% p.a. on default amount till the date of payment.</p>

          <p>6. A minimum lock-in period of one year has been fixed and both the Parties have agreed upon the same. In case the Second part would wish to withdraw the sum invested he shall do so only on completion of a period of one year (1 Year) from the date of investment by giving 30 days prior intimation of the same.</p>

          <p>7. In future if any happened with First Part, and First part paid 2,00,000/- through Cheque or online payment to second part then after second part don&rsquo;t have right to claim on the First Part for his invest amount.</p>

          <p>8. The above agreed terms and conditions shall be binding on both the Parties.   9. It is agreed by and between the parties that any dispute arising out of The agreement will be subject to Surat Jurisdiction.</p>

          <p></p>

          <p> 10. It is further agreed by and between the parties that an Arbitrator shall Be appointed as under Arbitration Act to resolve the any dispute amongst the parties. In witness whereof the First Part as well as the Second Part by way of acceptance of the said MOU have put their respective hands the day and year first hereinabove written.</p>

          <p>11. First part will give Post Dated Cheque to Second part and will not  Withdraw amount for one year from commencement date of agreement without inform to second part and Second Part will not force to withdraw first part to break agreement amount before maturity date.</p>

          <p> </p>

        </Modal.Body>
        <div >
          <p style={{
            marginLeft: '35%'
          }}><input type="checkbox" id="agree" onClick={submit} />
            <label htmlFor="agree" style={{
              marginLeft: '1%'
            }}> I agree to <b>terms and conditions</b></label></p>
        </div>
      </Modal>
      <div className="page-header">
        <h3 className="page-title">Products / Add Product </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Product
            </li>
          </ol>
        </nav>
      </div>
      <div
        className="row auth"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form className="form-sample" onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                <p className="card-description"> Add Product </p>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="name"
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
                        Category{" "}
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="text"
                          name="category"
                          {...register("category", { required: true })}
                          placeholder="category"
                        />
                        {errors && errors.address && (
                          <p>Category is required field</p>
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
                          as="textarea"
                          name="description"
                          {...register("description", { required: true })}
                          placeholder="description"
                        />
                        {errors && errors.desc && (
                          <p>Description is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row" >
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Status</label>
                      <div className="col-sm-9">
                        <select
                          className="form-control form-control-lg"
                          id="exampleFormControlSelect2"
                          name="status"
                          {...register("status", {
                            required: true,
                          })}>
                          <option value=''>--Select Status--</option>
                          <option value='1'>Active</option>
                          <option value='0'>Inactive</option>
                        </select>
                        {errors && errors.status && (
                          <p>status is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Commision{" "}
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          type="number"
                          step="0.00001"
                          name="commision"
                          {...register("commision", { required: true })}
                          placeholder="commision"
                        />
                        {errors && errors.commision && (
                          <p>Commision is required field</p>
                        )}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
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

export default ProductAdd;
