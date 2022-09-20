import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { Link } from "react-router-dom";
import {

  getVideoPaid,

  userLogout
} from "../../../utils/APIs";
import { useUrl } from "../../../utils/Functions/useUrl";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


const PaidVideo = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(10);
  const [show, setShow] = React.useState(false);
  const [valueToEdit, setvalueToEdit] = useState({});
  const [cookies, setCookie] = useCookies(["user"]);
  const [itemlist, setitemlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const list = async () => {
    setIsLoading(true);
    try {
        const items = await (
            await getVideoPaid()
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
};
useEffect(() => {
  list();
}, [itemOffset, itemsPerPage]);
console.log("it",itemlist)
  return (
    <div>
    <div className="page-header">
      <h3 className="page-title"> Paid Video </h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Training</a></li>
          <li className="breadcrumb-item active" aria-current="page">Paid Video</li>
        </ol>
      </nav>
    </div>
    <div className="video-section">
        <div class="container">
          <div class="card-group vgr-cards">
          {itemlist?.map((item) => {
                    return (
            <div class="card">
              <div class="card-img-body">
                {/* <video
                  class="card-img"
                  src={item.url}
                  alt="Card image cap"
                /> */}
                   <Video cloudName="dihq2mfsj" publicId="khmmih18bjul8qndwbv0">
  <Transformation height='1' overlay="text:arial_60:watchme" gravity="north" y="10" />
</Video>
              </div>
              <div class="card-body">
                <h4 class="card-title">
                 {item.title}
                </h4>
                <p class="card-text">
                 {item.description}
                </p>
                <div></div>
                <small className="instructor card-text">
                  Kalob Taulien{" "}
                </small>{" "}
                <br />
                <div>
                  <div className="pt-2">
                    <span>
                      <b>Total: </b> 12 Lectures
                    </span>{" "}
                    <br />
                    <span>
                      <b>Duration: </b> 37 min
                    </span>
                  </div>
                  <Link
                    to="#"
                    className="btn-enrollment mt-3 btn btn-outline-primary"
                  >
                    Enroll
                  </Link>
                </div>
              </div>
            </div>
              );
            })}
           
          </div>
        </div>
      </div>
  </div>
  )
}

export default PaidVideo