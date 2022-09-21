import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { getAppoinmentsList, getAppoinmentsListByUser, userLogout, UpdateAppoinments } from "../../../utils/APIs";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from 'react-bootstrap';


const FetchAppoinments = () => {
  const history = useHistory()
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(20);
  const [ setShow] = React.useState(false);
  const [ setvalueToEdit] = useState({});

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
    mode: "onChange"
  });

  const [modelMode, setmodelMode] = useState('create')
  const statusChanged = (id, e) => {
    console.log(e.target.value, id);
    UpdateAppoinments({
      "appoinments_id": id,
      "status": e.target.value
    })
    toast.success('Status updated successfully', {
      autoClose: true
    })
  }


  const onSubmit = async (data) => {
    const date1 = new Date(data?.date_from);
    const date2 = new Date(data?.date_to);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    //   if(modelMode === 'edit'){
    //   try {
    //     const formData = JSON.stringify({
    //       leave_id: valueToEdit?.id,
    //       user: data.user,
    //       reason: data?.reason,
    //       leave_status: data?.leave_status,
    //       total_leave : diffDays,
    //       date_from : new Date(data?.date_from).toISOString(),
    //       date_to : new Date(data?.date_to).toISOString(),
    //     });
    //     await updateEmployeeLeave(formData)
    // toast.success('Leave updated successfully',{
    //   autoClose : true
    // })
    //   } catch (error) {
    //     if (
    //       error &&
    //       error.response &&
    //       error.response.data &&
    //       error.response.data.message
    //     ) {
    //       toast.error(error.response.data.message);
    //     } else {
    //       toast.error(process.env.REACT_APP_ERROR_MESSAGE);
    //     }
    //   }
    //   finally {
    //     handleClose()
    //     getData()
    //   }
    // }


  };

  const handleClose = () => {
    setShow(false)
    setvalueToEdit({})
    reset()
  };


  const handleShow = (value, mode) => {
    reset()

    if (mode === 'edit') {
      setvalueToEdit(value)
      setmodelMode('edit')
    }

    if (mode === 'create') {
      setvalueToEdit(value)
      setmodelMode('create')
    }
    setShow(true);
  }

  useEffect(() => {
    getData()
  }, [itemOffset, itemsPerPage]);

  // useEffect(() => {
  //   getEmployeeData()
  // }, []);

  // const getEmployeeData = async () => {
  //     try {
  //       const result = await getAllEmployee()
  //       setemployeeList(result.data.results)
  //     } catch (error) {
  //       getEmployeeData()
  //     }
  // }

  const getData = async () => {
    try {
      if(cookies?.user?.role === 'admin'){
        const result = await (await getAppoinmentsList(itemsPerPage, itemOffset)).data;
        setitemlist(result?.results);
        setPageCount(result?.totalPages);
      }else{
        const result = await (await getAppoinmentsListByUser(itemsPerPage, itemOffset,cookies?.user?.id)).data;
        setitemlist(result?.results);
        setPageCount(result?.totalPages);
      }      
      // console.log("res", result?.results)
      // Fetch items from another resources.
      
    } catch (error) {
      if (
        error?.response?.data?.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error(process.env.REACT_APP_ERROR_MESSAGE);
      }

      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem('refreshToken'),
        });
        setCookie('user', null, { path: '/' });
        userLogout(formData).finally(() => {
          history.push('/user-pages/login-1')
        })
      }
    }

  }

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected + 1);
    setItemOffset(newOffset);
  };

  const showStatus = (status) => {
    switch (+status) {
      case (1):
        return 'Processing';
      case (2):
        return 'Approved';
      case (3):
        return 'Rejected';
      case (4):
        return 'Successfull';
      case (5):
        return 'Terminated'
      default:
        return 'Processing';
    }
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Appoinments / Book Appoinment </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                {cookies?.user?.role} Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Show Appoinment
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12 grid-margin stretch-card p0">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Show Appoinment</h4>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> User </th>
                    <th> Date From </th>
                    <th> Date To </th>
                    <th> Description </th>
                    <th> Status </th>
                  </tr>
                </thead>
                <tbody>
                  {itemlist?.map((item) => {
                    return (
                      <tr>
                        <td>{item?.user?.name}</td>
                        <td>{new Date(item?.fromDate)?.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                        <td>{new Date(item?.toDate)?.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                        <td>{item?.desc}</td>
                        <td>{cookies?.user?.role === 'admin' ? (
                          <select

                            id={item.id}

                            onChange={(e) => statusChanged(item.id, e)}
                          >
                            <option
                              value="1"
                              selected={item.status == 1 ? "selected" : false}
                            >
                              Processing
                            </option>
                            <option
                              value="2"
                              selected={item.status == 2 ? "selected" : false}
                            >
                              Approved
                            </option>
                            <option
                              value="3"
                              selected={item.status == 3 ? "selected" : false}
                            >
                              Rejected
                            </option>
                            <option
                              value="4"
                              selected={item.status == 4 ? "selected" : false}
                            >
                              Successfull
                            </option>
                            <option
                              value="5"
                              selected={item.status == 5 ? "selected" : false}
                            >
                              Terminated
                            </option>
                          </select>
                        ) : (
                          showStatus(item.status)
                        )}
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
                forcePage={0}
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

export default FetchAppoinments;
