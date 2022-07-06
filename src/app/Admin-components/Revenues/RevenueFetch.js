import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getAppoinmentsList ,userLogout } from "../../../utils/APIs";
import { Form } from "react-bootstrap";
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { timeOption } from "../../../utils/Functions/commonOptions";


const RevenueFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  const [selectedExpenceTime, setselectedExpenceTime] = useState("");
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(10);
  const [cookies,setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()
  
  const onChangeHandlerForExpenceTime = (e) => {
    setItemOffset(0);
    setselectedExpenceTime(e.target.value);
  };

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage, debouncedSearchTerm]);

  // Invoke when user click to request another page. 
  const handlePageClick = (event) => {
    setItemOffset(event.selected);
  };


  const list = async () => {
    setIsLoading(true);
    try {
      
      const items = await (
         await getAppoinmentsList(itemsPerPage, +itemOffset + 1)
       ).data;

      setitemlist(items?.results);
      setPageCount(items?.totalPages);
      setIsLoading(false);
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

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Revenue / Show Revenue </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show Revenue
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
                        return (
                          <>
                            <option
                              selected={i.value === selectedExpenceTime}
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
                <div className="search-field d-none d-md-block">
                  <form className="d-flex align-items-center h-100" action="#">
                    <div className="input-group">
                      <div className="input-group-prepend outline-gray bg-transparent">
                        <i className="input-group-text border-0 mdi mdi-magnify"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control outline-gray bg-transparent border-0"
                        placeholder="Search Revenue"
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
            <h4 className="card-title">Revenue list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Earning From </th>
                    <th> Product </th>
                    <th> Total Revenue </th>
                    <th> Net Profit </th>
                    <th> Commision To Branch </th>
                    <th> Commission To IBO </th>
                  </tr>
                </thead>
                <tbody>
                  {
                  isLoading ? <React.Fragment><Spinner /></React.Fragment>
                    :
                    itemlist?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item?.fromDate}</td>
                          <td>{item?.toDate}</td>
                          <td>{item?.Description}</td>
                          <td>{item?.user?.name}</td>
                          <td>{item?.user?.role}</td>
                          <td></td>
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

export default RevenueFetch;
