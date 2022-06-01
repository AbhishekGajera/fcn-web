import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { deleteProductById, getProductsList } from "../../../utils/APIs";
import Swal from "sweetalert2";
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";


const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [selectedProductType, setselectedProductType] = useState("");
  const [selectedProductCategory, setselectedProductCategory] = useState("");

  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(10);
  const [cookies] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage, selectedProductType, selectedProductCategory, debouncedSearchTerm]);

  // Invoke when user click to request another page. 
  const handlePageClick = (event) => {
    setItemOffset(event.selected);
  };

  const deleteProduct = (uid) => {
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
          deleteProductById(uid).finally(() => list()),
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
    setIsLoading(true)
    const items = await (
      await getProductsList(
        itemsPerPage,
        +itemOffset + 1,
        searchTerm,
      )
    ).data;
    setitemlist(items?.results);
    setPageCount(items?.totalPages);
    setIsLoading(false)
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Products / Fetch Products </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Fetch Products
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
                        placeholder="Search Products"
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
            <h4 className="card-title">Product list</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> Name </th>
                    <th> Category </th>
                    <th> Description </th>
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
                          <td>{item?.name}</td>
                          <td>{item?.category}</td>
                          <td>{item?.description}</td>
                          <td>
                            <i
                              onClick={() => deleteProduct(item?.id)}
                              className="mdi mdi-delete"
                            ></i>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-gradient-primary btn-sm "
                              onClick={() => onClickDownload(item?.image)}
                            >
                              Download Product Image
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

export default ProductList;
