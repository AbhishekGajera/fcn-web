import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from "query-string";
import { toast } from "react-toastify";
import { userLogout, getNotificationById } from '../../../utils/APIs';
import { useCookies } from "react-cookie";

const ViewNotification = () => {
    const queryParams = queryString.parse(window.location.search)
    const [itemlist, setitemlist] = useState([]);
    const [cookies, setCookie] = useCookies(["user"]);
    const history = useHistory();

    const getNotificationList = async () => {
        try {
            const items = await (
                await getNotificationById(queryParams.id)
            ).data;
            setitemlist(items);
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

    useEffect(() => {
        getNotificationList();
    }, [])

    useEffect(()=>{
        getNotificationList();
    },[queryParams])

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> View Notification </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            Notification
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            View Notification
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="video-section">
                <div class="">
                    <div class="card-group vgr-cards">
                        <div class="card">
                            <div class="card-img-body">
                                <img
                                    class="card-img"
                                    src={itemlist?.attachment}
                                    alt="Card image cap"
                                />
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">
                                    {itemlist?.title}
                                </h4>
                                <p class="card-text">
                                    {itemlist?.content}
                                </p>
                                <div></div>
                                <br />
                                <div>
                                    <div className="pt-2">
                                        <span>
                                            <b>Target Audience: </b> {itemlist?.targetAudience}
                                        </span>{" "}
                                        <br />
                                        <span>
                                            <b>Type: </b> {itemlist?.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ViewNotification;