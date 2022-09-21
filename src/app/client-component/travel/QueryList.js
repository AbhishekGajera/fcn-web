import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { deleteTravelQuery, getTravelQuery, userLogout, updateTravelQuery } from "../../../utils/APIs";
import Swal from "sweetalert2";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const QueryList = () => {
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page. 
  const handlePageClick = (event) => {
    setItemOffset(event.selected);
  };

  const deleteProduct = async (uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#DD6B55",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then( async (result) => {
      if (result.value) {
            await  deleteTravelQuery(uid)
              Swal.fire(
                "Deleted!",
                "Your imaginary file has been deleted.",
                "success"
                )
                list()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  const list = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getTravelQuery(
          itemsPerPage,
          +itemOffset + 1,
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
  const statusChanged = (id, e) => {

    const formdata = JSON.stringify({
      travel_id : id,
      status : e.target.value
    })

    updateTravelQuery(formdata)
    toast.success('Status updated successfully', {
      autoClose: true
    })
  }




  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Travel / Show Queries </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show Products
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
              </div>

            </div>
            <h4 className="card-title">Query's list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Source </th>
                    <th> Destination </th>
                    <th> Start Date </th>
                    <th> End Date</th>
                    <th> User </th>
                    <th> Status </th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    isLoading ? <React.Fragment><Spinner /></React.Fragment>
                      :
                      itemlist?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item?.source}</td>
                            <td>{item?.destination}</td>
                            <td>{item?.start_date}</td>
                            <td>{item?.end_date}</td>
                            <td>{item?.user?.name}</td>
                            <td>
                              <select
                                id={item.id}
                                onChange={(e) => statusChanged(item.id, e)}
                              >
                                <option
                                  value="0"
                                  selected={item.status == 0 ? "selected" : false}
                                >
                                  pending
                                </option>
                                <option
                                  value="1"
                                  selected={item.status == 1 ? "selected" : false}
                                >
                                  approved
                                </option>
                                <option
                                  value="1"
                                  selected={item.status == 2 ? "selected" : false}
                                >
                                  declined
                                </option>
                              </select>
                            </td>
                            <td>
                              <i
                                onClick={() => deleteProduct(item?.id)}
                                className="mdi mdi-delete"
                              ></i>
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
    </div >
  );
};

export default QueryList;
