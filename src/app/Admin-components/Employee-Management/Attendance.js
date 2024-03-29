import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getLeads, getBranchesClient, deleteLead, userLogout, getBranches } from "../../../utils/APIs";
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);

  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [branchlist, setbranchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage, debouncedSearchTerm]);

  const list = async () => {
    setIsLoading(true)
    try {
      const branch = await (await getBranchesClient()).data;
      setbranchlist(branch?.results);
      const items = await (
        await getLeads(
          itemsPerPage,
          +itemOffset + 1,
          searchTerm
        )
      ).data;
      setitemlist(items?.results);
      setPageCount(items?.totalPages);
      setIsLoading(false)
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
  }
  const handlePageClick = (event) => {
    setItemOffset(event.selected);
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Employee / Show Attendance </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show Attendance
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6">
                <h4 className="card-title">Attendance list</h4>
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
                        placeholder="Search Attendance"
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
            </div>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Status </th>
                    <th> Note </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    isLoading ? <React.Fragment><Spinner /></React.Fragment>
                      :
                      itemlist?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item?.name}</td>
                            <td>{item?.title}</td>
                            <td><input type='text' name='note' /></td>
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

export default Attendance




