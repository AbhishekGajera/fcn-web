import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getUsers ,userLogout } from "../../../utils/APIs";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const ClientList = () => {
  const history = useHistory()
  const [cookies,setCookie ] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const endOffset = itemOffset + itemsPerPage;
      try {
        const items = await (await getUsers(itemsPerPage, itemOffset)).data;
        setitemlist(items?.results);  
        // Fetch items from another resources.
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items?.results?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items?.results?.length / itemsPerPage));
      } catch (error) {
        console.info("error ",error)
        if (
          error?.response?.data?.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error(process.env.REACT_APP_ERROR_MESSAGE);
        }

        if(error?.response?.data?.code === 401){
          const formData = JSON.stringify({
            refreshToken: localStorage.getItem('refreshToken'),
          });
          setCookie('user', null , { path: '/' });
          userLogout(formData).finally(() => {
            history.push('/user-pages/login-1')
          })
        }
      }


    })();
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemlist.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Clients / create Clients </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create clients
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Client list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Contact no. </th>
                    <th> Branch </th>
                    <th> Email </th>
                    <th> Role </th>
                    <th> Edit </th>
                    <th> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {itemlist?.map((item) => {
                    return (
                      <tr>
                        <td>{item?.name}</td>
                        <td>{item?.contactno}</td>
                        <td>{item?.branch}</td>
                        <td>{item?.email}</td>
                        <td>{item?.role}</td>
                        <td>
                          <i className="mdi mdi-lead-pencil"></i>
                        </td>
                        <td>
                          <i className="mdi mdi-delete"></i>
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
