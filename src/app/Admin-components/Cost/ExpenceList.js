import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { deleteCost, getCostList,userLogout
} from "../../../utils/APIs";
import Swal from "sweetalert2";
import {
  optionForExpenceType,
  optionForCostCategory,
  timeOption,
} from "../../../utils/Functions/commonOptions";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";


const ExpenceList = () => {
  const [selectedExpenceType, setselectedExpenceType] = useState("");
  const [selectedExpenceCategory, setselectedExpenceCategory] = useState("");
  const [selectedExpenceTime, setselectedExpenceTime] = useState("");

  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(20);
  const [cookies,setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const history = useHistory();

  const onChangeHandlerForExpenceType = (e) => {
    setItemOffset(0);
    setselectedExpenceType(e.target.value);
  };

  const onChangeHandlerForExpenceCategory = (e) => {
    setItemOffset(0);
    setselectedExpenceCategory(e.target.value);
  };

  const onChangeHandlerForExpenceTime = (e) => {
    setItemOffset(0);
    setselectedExpenceTime(e.target.value);
  };

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage, selectedExpenceType, selectedExpenceCategory, selectedExpenceTime]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    setItemOffset(event.selected);
  };

  const deleteBranch = (uid) => {
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
          deleteCost(uid).finally(() => list()),
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

  const onClickDownload = (imageURL) => {
    window.open(imageURL, '_blank');
  }

  const list = async () => {
    try {
      const items = await (
        await getCostList(
          itemsPerPage,
          +itemOffset + 1,
          selectedExpenceCategory,
          selectedExpenceType,
          ["IBO", "branch"].includes(cookies?.user?.role) ? cookies?.user?.id : ''
        )
      ).data;
      setitemlist(items?.results);
      console.log("res",items?.results);
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
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">costs / Show Costs </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show Costs
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row">

              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-6 col-form-label">
                    Select Expence Category
                  </label>
                  <div className="col-sm-6">
                    <select
                      className="form-control form-control-sm"
                      id="exampleFormControlSelect2"
                      name="branch"
                      onChange={onChangeHandlerForExpenceCategory}
                    >
                      <option
                        selected={"" === selectedExpenceCategory}
                        value={""}
                      >
                        Not Selected
                      </option>
                      {optionForCostCategory?.map((i) => {
                        return (
                          <>
                            <option
                              selected={i.value === selectedExpenceCategory}
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

              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-4 col-form-label">
                    Select Time
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control form-control-sm"
                      id="exampleFormControlSelect2"
                      name="branch"
                      onChange={onChangeHandlerForExpenceTime}
                    >
                      <option
                        selected={"" === selectedExpenceTime}
                        value={""}
                      >
                        Not Selected
                      </option>
                      {timeOption?.map((i) => {
                        // console.log("val",i,selectedExpenceTime);
                        
                        return (
                          <>
                            <option
                              selected={i.label === selectedExpenceTime}
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

              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-6 col-form-label">
                    Select Expence Type
                  </label>
                  <div className="col-sm-6">
                    <select
                      className="form-control form-control-sm"
                      id="exampleFormControlSelect2"
                      name="branch"
                      onChange={onChangeHandlerForExpenceType}
                    >
                      <option selected={"" === selectedExpenceType} value={""}>
                        Not Selected
                      </option>
                      {optionForExpenceType?.map((i) => {
                        return (
                          <>
                            <option
                              selected={i.value === selectedExpenceType}
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
            <h4 className="card-title">Expence list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Expence Category </th>
                    <th> Total Expence </th>
                    <th> Type </th>
                    <th> Description </th>
                    <th> User </th>
                    <th> User Type</th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {itemlist?.map((item) => {
                    return (
                      <tr>
                        <td>{item?.category}</td>
                        <td>{item?.totalCost}</td>
                        <td>{item?.type}</td>
                        <td>{item?.description}</td>
                        <td>{item?.user?.name}</td>
                        <td>{item?.user?.role}</td>
                        <td>
                          <i
                            onClick={() => deleteBranch(item?.id)}
                            className="mdi mdi-delete"
                          ></i>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-gradient-primary btn-sm "
                            onClick={() => onClickDownload(item?.image)}
                          >
                            Download Invoice
                          </button>
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

export default ExpenceList;
