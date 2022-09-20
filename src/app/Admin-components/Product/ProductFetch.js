import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { deleteProductById, getProductsList, userLogout, UpdateProducts } from "../../../utils/APIs";
import Swal from "sweetalert2";
import { useDebounce } from "../../../utils/Functions/useDebounce";
import Spinner from "../../shared/Spinner";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [selectedProductType, setselectedProductType] = useState("");
  const [selectedProductCategory, setselectedProductCategory] = useState("");
  const [isChecked, setIsChecked] = useState("");

  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(20);
  const [cookies, setCookie] = useCookies(["user"]);
  const [show, setShow] = React.useState(false);
  const [valueToEdit, setvalueToEdit] = useState({});
  const [itemlist, setitemlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage, debouncedSearchTerm]);

  // Invoke when user click to request another page. 
  const handlePageClick = (event) => {
    setItemOffset(event.selected);
  };

  const handleClose = () => {
    setShow(false)
    setvalueToEdit({})
    reset()
  };

  const handleShow = (value) => {
    reset()
    setvalueToEdit(value)
    setShow(true);
  }

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
    mode: "onChange"
  });

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
        if (isChecked == '') {
          return (
            deleteProductById(uid).finally(() => list()),
            Swal.fire(
              "Deleted!",
              "Your imaginary file has been deleted.",
              "success"
            )
          );
        } else {
          const itemList = Object.keys(isChecked).map((id) => {
            if (isChecked[id] === true) {
              deleteProductById(id)
            }
            Swal.fire(
              "Deleted!",
              "Your imaginary file has been deleted.",
              "success"
            )
          })
          Promise.all(itemList).then(() => {
            list();
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData()
      formData.append("productId", valueToEdit?.id);
      formData.append("user", cookies?.user?.id)
      formData.append("category", data?.category)
      formData.append("description", data?.description)
      formData.append("name", data?.name)
      formData.append("commision", data?.commision)
      formData.append("status", data?.status)
      await UpdateProducts(formData)
      toast.success('Product updated Successfully', {
        autoClose: 3000
      })
      list()
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
    } finally {
      setShow(false)
    }
  };

  const onClickDownload = (imageURL) => {
    window.open(imageURL, '_blank');
  }

  const list = async () => {
    setIsLoading(true)
    try {
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

    const formdata = new FormData();
    formdata.append("productId", id);
    formdata.append("status", e.target.value);

    UpdateProducts(formdata)
    toast.success('Status updated successfully', {
      autoClose: true
    })
  }

  const handleMultiChange = (e) => {
    setIsChecked({ ...isChecked, [e.target.id]: e.target.checked });
  }




  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row auth">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
                    <p className="card-description"> Update Product </p>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Name
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              name="name"
                              defaultValue={valueToEdit.name}
                              {...register("name", { required: true })}
                              placeholder="name"
                            />
                            {errors && errors.name && <p>name is required field</p>}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Category{" "}
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="text"
                              name="category"
                              defaultValue={valueToEdit.category}
                              {...register("category", { required: true })}
                              placeholder="category"
                            />
                            {errors && errors.address && (
                              <p>Category is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Description{" "}
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              as="textarea"
                              name="description"
                              defaultValue={valueToEdit.description}
                              {...register("description", { required: true })}
                              placeholder="description"
                            />
                            {errors && errors.desc && (
                              <p>Description is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row" >
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">Status</label>
                          <div className="col-sm-9">
                            <select
                              className="form-control form-control-lg"
                              id="exampleFormControlSelect2"
                              name="status"
                              {...register("status", {
                                required: true,
                              })}>
                              <option value=''>--Select Status--</option>
                              <option value='1' selected={valueToEdit.status === '1'}>Active</option>
                              <option value='0' selected={valueToEdit.status === '0'}>Inactive</option>
                            </select>
                            {errors && errors.status && (
                              <p>status is required field</p>
                            )}
                          </div>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Form.Group className="row">
                          <label className="col-sm-3 col-form-label">
                            Commision{" "}
                          </label>
                          <div className="col-sm-9">
                            <Form.Control
                              type="number"
                              step="0.00001"
                              name="commision"
                              defaultValue={valueToEdit.commision}
                              {...register("commision", { required: true })}
                              placeholder="commision"
                            />
                            {errors && errors.commision && (
                              <p>Commision is required field</p>
                            )}
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
          </div >
        </Modal.Body >
      </Modal >
      <div className="page-header">
        <h3 className="page-title">Products / Show Products </h3>
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
                    <th> Commision</th>
                    <th> Status </th>
                    <th> Edit </th>
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
                            <td>{item?.commision}</td>
                            <td>
                              <select
                                id={item.id}
                                onChange={(e) => statusChanged(item.id, e)}
                              >
                                <option
                                  value="0"
                                  selected={item.status == 0 ? "selected" : false}
                                >
                                  InActive
                                </option>
                                <option
                                  value="1"
                                  selected={item.status == 1 ? "selected" : false}
                                >
                                  Active
                                </option>
                              </select>
                            </td>
                            <td><i onClick={() => handleShow(item)} className="mdi mdi-lead-pencil"></i></td>
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
    </div >
  );
};

export default ProductList;
