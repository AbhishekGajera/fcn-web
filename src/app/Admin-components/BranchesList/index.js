import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getUsers } from "../../../utils/APIs";
import Swal from "sweetalert2";

const BranchList = () => {
  const [cookies] = useCookies(["user"]);
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
      const items = await (await getUsers(itemsPerPage, itemOffset)).data;
      setitemlist(items?.results);
      console.info("items ", items);

      // Fetch items from another resources.
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
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
  const deleteBranch =(uid)=>{
    // console.log(uid);
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
      if (result.isConfirmed) {
        // return (
        //   deleteUsr(uid, () => {
        //     list();
        //   }),
        //   Swal.fire(
        //     "Deleted!",
        //     "Your imaginary file has been deleted.",
        //     "success",
        //   )
        // );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Clients / Fetch Branch </h3>
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
                          <i  onClick={()=> deleteBranch(item?.id)} className="mdi mdi-delete"></i>
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

export default BranchList;
