import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import {
  getUsers,
  userLogout,
  deleteUsr,
  updateProfile,
  getBranches,
  getIBOs,
  getUserBranch,
  getUserIbo,
  getProductsListClient,
  ImageUpload,
  CreateUser
} from "../../../utils/APIs";
import { CSVLink } from "react-csv";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { password_generator } from "../../../utils/Functions/passwordGenerator";
import { useUrl } from "../../../utils/Functions/useUrl";
import {
  statusOption,
  formateStatus,
  roleOption
} from "../../../utils/Functions/commonOptions";
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";
import moment from "moment";

const ClientList = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [productlist, setproductlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [showPerfomer, setShowPerfomer] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );

  const onPerformanceSubmit = async () => {
    try {
      const updatedData = JSON.stringify({ perfomance: updatePerfomence })
      await updateProfile(updatedData, valueToEdit?.id);
      toast.success("Add Perfomance Successfully", {
        autoClose: 3000,
      });
      list();
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
    } finally {
      setShowPerfomer(false);
    }
  }

  const onSubmit = async (data) => {
    data.status = updateStatus;
    data.branch = branchUpdate;
    // data.IBO = IBOUpdate;
    data.role = roleUpdate;
    if (data.password === "") {
      delete data.password;
    }
    try {
      const updatedData = JSON.stringify(data);
      await updateProfile(updatedData, valueToEdit?.id);
      toast.success("User updated Successfully", {
        autoClose: 3000,
      });
      list();
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
    } finally {
      setShow(false);
    }
  };


  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);
  const [show, setShow] = React.useState(false);
  const [valueToEdit, setvalueToEdit] = useState({});
  const [updateStatus, setupdateStatus] = useState(0);
  const [updatePerfomence, setupdatePerfomence] = useState(1);
  const [branchList, setbranchList] = useState([]);
  const [selectedBranch, setselectedBranch] = useState("");
  const [IBOList, setIBOList] = useState([]);
  const [selectedIBO, setselectedIBO] = useState("");
  const [selectedProduct, setselectedProduct] = useState("");
  const [branchUpdate, setbranchUpdate] = useState('')
  const [IBOUpdate, setIBOUpdate] = useState('')
  const [roleUpdate, setroleUpdate] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const onChangeBranchUpdate = (e) => {
    setbranchUpdate(e?.target?.value)
  }

  const onChangePerfomence = (e) => {
    setupdatePerfomence(+e?.target?.value || 0);
  };

  const onChangeStatusForm = (e) => {
    setupdateStatus(+e?.target?.value || 0);
  };

  const onChangeIBOpdate = (e) => {
    setIBOUpdate(e?.target?.value)
  }

  const onChangeRolepdate = (e) => {
    setroleUpdate(e?.target?.value)
  }

  const handleClose = () => {
    setShow(false);
    setShowPerfomer(false);
    setvalueToEdit({});
    setupdateStatus(0);
    setbranchUpdate('');
    setIBOUpdate('');
    setroleUpdate('')
    reset()
  };

  const handleShow = (value) => {
    reset()
    setvalueToEdit(value);
    setupdateStatus(value?.status || 0);
    setbranchUpdate(value?.branch)
    setIBOUpdate(value?.IBO?.name)
    setroleUpdate(value?.role)
    setShow(true);
  };

  const handlePerfomanceShow = (value) => {
    reset()
    setvalueToEdit(value);
    setShowPerfomer(true);
  };


  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage, selectedBranch, selectedIBO, selectedProduct]);

  useEffect(() => {
    list();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    getBranchList();
    getIBOList();
    productList();
  }, []);

  const productList = async () => {
    try {
      const items = await (await getProductsListClient()).data;
      setproductlist(items?.results);
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

  const getBranchList = async () => {
    const items = await (await getBranches(5000, 1, "", "branch")).data;

    setbranchList(items?.results);
  };

  const onChangeHandlerBranch = (e) => {
    setItemOffset(0);
    setselectedBranch(e.target.value);
  };

  const getIBOList = async () => {
    const items = await (await getIBOs(5000, 1, "")).data;
    setIBOList(items?.results);
  };

  const onChangeHandlerIBO = (e) => {
    setItemOffset(0);
    setselectedIBO(e.target.value);
  };

  const onChangeHandlerProduct = (e) =>{
    setItemOffset(0);
    setselectedProduct(e.target.value);
  }

  const list = async () => {
    setIsLoading(true)
    try {
      let items
      if (cookies?.user?.role === "branch") {
        items = await (
          await getUserBranch(
            cookies?.user?.name,
            selectedProduct
          )
        ).data;
        setitemlist(items.results);
      } else if (cookies?.user?.role === "IBO") {
        items = await (
          await getUserIbo(
            cookies?.user?.id,
            selectedProduct
          )
        ).data;
        setitemlist(items);
      } else {
        items = await (
          await getUsers(
            itemsPerPage,
            +itemOffset + 1,
            searchTerm,
            "user",
            selectedProduct,
            selectedBranch,
            selectedIBO
          )
        ).data;
        setitemlist(items?.results);
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
    setIsLoading(false)
  };

  const viewUser = (Id) => {
    history.push(`/viewUser/${Id}`);
  }

  const generatePassword = async (id) => {
    const randomPassword = password_generator();
    const newPassword = JSON.stringify({
      password: randomPassword,
    });

    try {
      await updateProfile(newPassword, id);
      toast.success(
        "Password generated and sended to user via Email successfully",
        { autoClose: 3000 }
      );
    } catch (error) {
      toast.error("Password generation failed, please try again later");
    }
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    setItemOffset(event.selected);
  };

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
          deleteUsr(uid).finally(() => list()),
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
  // console.log("it",itemlist[0])

  // excel export
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";


  // csv export
  const exportToCSV = (fileName) => {
    const ws = XLSX.utils.json_to_sheet(itemlist);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  const headers = [
    { label: "Name", key: "name", },
    { label: "Contact no", key: "contactno", },
    { label: "Branch", key: "branch", },
    { label: "IBO", key: "IBO.name", },
    { label: "Email", key: "email", },
    { label: "Branch", key: "branch", },
    { label: "DOB", key: "dob", },
    { label: "Role", key: "role", },
    { label: "Status", key: "status", },
    { label: "Bank Account No", key: "bankAccNo", },
    { label: "Bank IFSC Code", key: "bankIfscCode", },
    { label: "Bank AadharCard No", key: "b_aadhar_card_no", },
    { label: "Address", key: "address", },

  ]

  const csvreport = {
    data: itemlist,
    headers: headers,
    filename: 'Clue_Mediator_Report.csv'
  };

  const handleUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-id');
    if (element) {
      element.click()
    }
  };

  const fileHandler = (e) => {
    var files = e.target.files;
    var f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: 'binary' });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
      dataParse.splice(0, 1);
      const formData = {};
      setIsLoading(true)
      dataParse.map((item, index) => {
        formData.name = item[0];
        formData.branch = item[1];
        formData.contactno = item[2].toString();
        formData.email = item[3];
        formData.address = item[4];
        formData.bankIfscCode = item[5];
        formData.bankAccNo = item[6].toString();
        formData.password = item[7];
        formData.dob = item[8] ? moment(moment(item[8], 'DD-MM-YYYY')).toISOString() : new Date().toISOString().slice(0, 10);
        formData.product = item[9].toString();
        formData.registration_date =  item[10] ? moment(moment(item[10], 'DD-MM-YYYY')).toISOString() : new Date().toISOString().slice(0, 10);
        formData.maturity_date = item[11] ? moment(moment(item[11], 'DD-MM-YYYY')).toISOString() : new Date().toISOString().slice(0, 10);
        formData.IBO = item[10] ? item[12] : "633a99010d6d0aedc0e9d5b0";
        formData.aadhar_card_no = item[13].toString();
        formData.pan_card_no = item[14].toString();
        formData.maxAmount = '0';
        formData.minAmount = '0';
        formData.country = 'India';
        formData.aadhar_card_img = "http://fcn.ziadoz.com/static/media/fcn_logo.782c8a9c.png";
        formData.pan_card_img = "http://fcn.ziadoz.com/static/media/fcn_logo.782c8a9c.png";
        onSubmitClient(formData);
      })
      setIsLoading(false)
      history.push('/clients/clientlist')
    };
    reader.readAsBinaryString(f)
  }

  const onSubmitClient = async (data) => {
    try {
      await CreateUser(JSON.stringify(data));
      toast.success("user created successfully");
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
      <Modal
        show={showPerfomer}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Make Top Perfomer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row auth">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-sample"
                  >
                    <p className="card-description"> Make Top Perfomer </p>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Perfomance Rank
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control form-control-sm"
                              id="exampleFormControlSelect3"
                              name="perfomence"
                              onChange={onChangePerfomence}
                            >
                              <option value='1' selected={valueToEdit?.perfomance === 1}>1</option>
                              <option value='2' selected={valueToEdit?.perfomance === 2}>2</option>
                              <option value='3' selected={valueToEdit?.perfomance === 3}>3</option>
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button
                        className="btn  btn-primary btn-lg font-weight-medium auth-form-btn"
                        type="button"
                        onClick={onPerformanceSubmit}
                      >
                        Submit Perfomance
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row auth">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-sample"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <p className="card-description"> Update Client </p>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Name
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="name"
                              defaultValue={valueToEdit.name}
                              {...register("name", { required: true })}
                            />
                            {errors && errors.name && (
                              <p>name is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Address{" "}
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="address"
                              defaultValue={valueToEdit.address}
                              {...register("address", { required: true })}
                            />
                            {errors && errors.address && (
                              <p>address is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Contact No
                          </label>
                          <div className="col-sm-8 contact_no">
                            <Form.Control
                              type="text"
                              name="contactno"
                              defaultValue={valueToEdit.contactno}
                              {...register("contactno", {
                                required: true,
                                pattern: strongRegexMo,
                              })}
                            />
                            {errors &&
                              errors.contactno &&
                              errors.contactno.type === "required" && (
                                <p>contact number is required field</p>
                              )}
                            {errors &&
                              errors.contactno &&
                              errors.contactno.type === "pattern" && (
                                <p>
                                  invalid phone number please use valid formate
                                </p>
                              )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Email
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="email"
                              defaultValue={valueToEdit.email}
                              {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                              })}
                            />
                            {errors &&
                              errors.email &&
                              errors.email.type === "required" && (
                                <p>email is required field</p>
                              )}
                            {errors &&
                              errors.email &&
                              errors.email.type === "pattern" && (
                                <p>invalid email formate</p>
                              )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            status
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control form-control-sm"
                              id="exampleFormControlSelect3"
                              name="status"
                              onChange={onChangeStatusForm}
                            >
                              {statusOption?.map((i) => {
                                return (
                                  <option
                                    value={i?.value}
                                    selected={+updateStatus === +i?.value}
                                  >
                                    {i?.label}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Search Branch
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control form-control-sm"
                              id="exampleFormControlSelect2"
                              name="branch"
                              onChange={onChangeBranchUpdate}
                            >
                              {branchList?.map((i) => {
                                return (
                                  <>
                                    <option
                                      selected={i.name === branchUpdate}
                                      value={i.name}
                                    >
                                      {i.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Select IBO
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control form-control-sm"
                              id="exampleFormControlSelect2"
                              name="branch"
                              onChange={onChangeIBOpdate}
                            >
                              {IBOList?.map((i) => {
                                return (
                                  <>
                                    <option
                                      selected={i.name === IBOUpdate}
                                      value={i.name}
                                    >
                                      {i.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Select Role
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control form-control-sm"
                              id="exampleFormControlSelect2"
                              name="branch"
                              onChange={onChangeRolepdate}
                            >
                              {roleOption?.map((i) => {
                                return (
                                  <>
                                    <option
                                      selected={i.value === roleUpdate}
                                      value={i.value}
                                    >
                                      {i.label}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            AadharCard Number
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="aadhar_card_no"
                              defaultValue={valueToEdit.aadhar_card_no}
                              {...register("aadhar_card_no", { required: true })}
                            />
                            {errors && errors.aadhar_card_no && (
                              <p>Aadharcard number is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            PanCard Number
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="text"
                              name="pan_card_no"
                              defaultValue={valueToEdit.pan_card_no}
                              {...register("pan_card_no", { required: true })}
                            />
                            {errors && errors.pan_card_no && (
                              <p>PanCard number is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-4 col-form-label">
                            Password
                          </label>
                          <div className="col-sm-8">
                            <Form.Control
                              type="password"
                              name="password"
                              {...register("password")}
                            />
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
          </div>
        </Modal.Body>
      </Modal>
      <div className="page-header">
        <h3 className="page-title">Clients / Show Clients </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show clients
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row">
              {cookies?.user?.role !== "IBO" && cookies?.user?.role !== "branch" && (
                <>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-5 col-form-label">
                        Search Branch
                      </label>
                      <div className="col-sm-7">
                        <select
                          className="form-control form-control-sm"
                          id="exampleFormControlSelect2"
                          name="branch"
                          onChange={onChangeHandlerBranch}
                        >
                          <option selected={"" === selectedBranch} value={""}>
                            Not Selected
                          </option>
                          {branchList?.map((i) => {
                            return (
                              <>
                                <option
                                  selected={i.name === selectedBranch}
                                  value={i.name}
                                >
                                  {i.name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-5 col-form-label">Search IBO</label>
                      <div className="col-sm-7">
                        <select
                          className="form-control form-control-sm"
                          id="exampleFormControlSelect2"
                          name="branch"
                          onChange={onChangeHandlerIBO}
                        >
                          <option selected={"" === selectedIBO} value={""}>
                            Not Selected
                          </option>
                          {IBOList?.map((i) => {
                            return (
                              <>
                                <option
                                  selected={i.id === selectedIBO}
                                  value={i.id}
                                >
                                  {i.name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </Form.Group>
                  </div>

                </>
              )}
            </div>
            <div className="row">
              <>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-5 col-form-label">Search Product</label>
                    <div className="col-sm-7">
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect2"
                        name="branch"
                        onChange={onChangeHandlerProduct}
                      >
                        <option value=''>--Select product--</option>
                            {productlist.map((item, index) => (

                              <option key={index} value={item?.id} label={item?.name} selected={selectedProduct === item?.id}></option>
                            ))}                        
                        </select>
                    </div>
                  </Form.Group>
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
                          placeholder="Search Clients"
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
              </>
            </div>
            <h4 className="card-title">Client list</h4>
            <div className="row">
              <div className="col-md-4">
                <button
                  type="button"
                  className="btn btn-gradient-primary btn-sm "
                >
                  <CSVLink {...csvreport} className="text-white">Export to CSV</CSVLink>
                </button>
              </div>

              <div className="col-md-4">
                <button
                  type="button"
                  className="btn btn-gradient-primary btn-sm "
                  onClick={() => exportToCSV('Client')}
                >
                  Download Excel
                </button>
              </div>
              <div className="col-md-4">
                <Form.Control
                  id="input-id"
                  className="d-none"
                  type="file"
                  name="import_client"
                  multiple={false}
                  onChange={(e) => { fileHandler(e) }}
                  accept=".csv"
                />
                <button
                  onClick={handleUpload}
                  className={`btn btn-gradient-primary btn-sm`}
                >Import Clients
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Contact no. </th>
                    <th> Branch </th>
                    <th> IBO </th>
                    <th> Email </th>
                    <th> Product </th>
                    <th> Maturity Date </th>
                    <th> Status </th>
                    <th> Generate Password </th>
                    <th> View </th>
                    <th> Edit </th>
                    <th> Delete </th>
                    {["admin"].includes(cookies?.user?.role) && (
                      <th></th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? <Spinner />
                    :
                    itemlist && itemlist?.map((item) => {
                      return (
                        <tr>
                          <td>{item?.name}</td>
                          <td>{item?.contactno}</td>
                          <td>{item?.branch}</td>
                          <td>{item?.IBO?.name}</td>
                          <td>{item?.email}</td>
                          <td>{item?.products[0]?.product?.name}</td>
                          <td>{item?.maturity_date ? moment(item?.maturity_date).format('DD-MM-YYYY') : '-'}</td>
                          <td>{formateStatus(item?.status)}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-gradient-primary btn-sm "
                              onClick={() => generatePassword(item?.id)}
                            >
                              Generate
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-gradient-primary btn-sm "
                              onClick={() => { viewUser(item?.id) }}
                            >
                              View
                            </button>
                          </td>
                          <td>
                            <i
                              onClick={() => handleShow(item)}
                              className="mdi mdi-lead-pencil"
                            ></i>
                          </td>
                          <td>
                            <i
                              onClick={() => deleteData(item?.id)}
                              className="mdi mdi-delete"
                            >
                              {" "}
                            </i>
                          </td>
                          {["admin"].includes(cookies?.user?.role) && (
                            <td>
                              <button
                                type="button"
                                className="btn btn-gradient-primary btn-sm "
                                onClick={() => handlePerfomanceShow(item)}
                              >
                                Make Top Perfomer
                              </button>
                            </td>
                          )}
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
};

export default ClientList;
