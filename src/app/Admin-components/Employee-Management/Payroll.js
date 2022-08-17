import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getLeads, getBranchesClient, deleteLead, userLogout, getBranches } from "../../../utils/APIs";
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

const Payroll = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(10);

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
        <h3 className="page-title">Employee / Show Payroll </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show Payroll
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-12">
                <h4 className="card-title">Payroll list</h4>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Month </th>
                    <th> Total Amount </th>
                    <th> Status </th>
                    <th> </th>
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
                            <td>Active</td>
                            <td><Link to='/employee_manage/run-payroll'><button className="btn btn-sm btn-gradient-primary">Run Payroll</button></Link></td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll




