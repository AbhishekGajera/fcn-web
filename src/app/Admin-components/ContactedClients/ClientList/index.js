import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { userLogout, getConnect, getBranches, deleteContact, getConnectByBranch } from "../../../../utils/APIs";
import { CSVLink } from "react-csv";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useUrl } from "../../../../utils/Functions/useUrl";
import { useDebounce } from "../../../../utils/Functions/useDebounce";
import Spinner from "../../../shared/Spinner";
import moment from 'moment';
import { Form } from "react-bootstrap";

const ClientList = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState();
  const [selectedBranch, setselectedBranch] = useState("");
  const [branchList, setbranchList] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const {
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage,searchType, selectedBranch, debouncedSearchTerm]);

  useEffect(() => {
    getBranchList()
  },[])

  const list = async () => {
    setIsLoading(true);
    try {
      let items
      if (cookies?.user?.role === 'branch') {
        items = await (
          await getConnectByBranch(itemsPerPage, +itemOffset + 1, searchTerm, cookies?.user?.name)
        ).data;
      }

      if (cookies?.user?.role === 'admin') {
        items = await (
          await getConnect(itemsPerPage, +itemOffset + 1, selectedBranch ,searchType)
        ).data;
      }
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
    setIsLoading(false);
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    setItemOffset(event.selected);
  };

  const convertClient = (Id) => {
    history.push({
      pathname: '/clients/createclient',
      search: "?" + new URLSearchParams({ id: Id }).toString()
    })
  }


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
    { label: "Date", key: "date", },
    { label: "Type", key: "type", },
  ]

  const csvreport = {
    data: itemlist,
    headers: headers,
    filename: 'Clue_Mediator_Report.csv'
  };

  const getBranchList = async () => {
    const items = await (await getBranches(5000, 1, "", "branch")).data;

    setbranchList(items?.results);
  };

  const onChangeHandlerBranch = (e) => {
    setItemOffset(0);
    setselectedBranch(e.target.value);
  };

  const onChangeHandlerType = (e) => {
    setItemOffset(0);
    setSearchType(e.target.value);
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
          deleteContact(uid).finally(() => list()),
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

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Contacted clients / Fetch Clients </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              fetch clients
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-3">
                <button
                  type="button"
                  className="btn btn-gradient-primary btn-sm "
                >
                  <CSVLink {...csvreport} className="text-white">Export to CSV</CSVLink>
                </button>
              </div>

              <div className="col-md-3">
                <button
                  type="button"
                  className="btn btn-gradient-primary btn-sm "
                  onClick={() => exportToCSV('test')}
                >
                  Download Excel
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <Form.Group className="row">
                  <label className="col-sm-6 col-form-label">
                    Search Branch
                  </label>
                  <div className="col-sm-6">
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

              <div className="col-md-4">
                <Form.Group className="row">
                  <label className="col-sm-6 col-form-label">
                    Search Type
                  </label>
                  <div className="col-sm-6">
                    <select
                      className="form-control form-control-sm"
                      id="exampleFormControlSelect2"
                      name="type"
                      onChange={onChangeHandlerType}
                    >
                      <option selected={"" === searchType} value={""}>
                        Not Selected
                      </option>
                      <option value={1}>Free</option>
                      <option value={2}>Paid</option>
                    </select>
                  </div>
                </Form.Group>
              </div>

              {/* <div className="col-md-4">
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
              </div> */}
            </div>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Contact no. </th>
                    <th> Branch </th>
                    <th> Date </th>
                    <th> Type </th>
                    <th> Convert </th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    itemlist?.map((item) => {
                      return (
                        <tr>
                          <td>{item?.name}</td>
                          <td>{item?.contactno}</td>
                          <td>{item?.branch}</td>
                          <td>{moment(item?.fromDate).format('DD-MM-YYYY')}</td>
                          <td>{item?.type === 1 ? "Free" : "Paid"}</td>
                          <td><button
                            type="button"
                            className="btn btn-gradient-primary btn-sm "
                            onClick={() => { convertClient(item?.id) }}
                          >
                            Convert
                          </button></td>
                          <td> <i
                            onClick={() => deleteData(item?.id)}
                            className="mdi mdi-delete"
                          >
                            {" "}
                          </i>
                          </td>
                        </tr>
                      );
                    })
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
    </div>
  );
};

export default ClientList;
