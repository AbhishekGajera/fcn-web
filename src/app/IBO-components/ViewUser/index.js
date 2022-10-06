import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { userLogout, getUserById } from '../../../utils/APIs';
import { useCookies } from "react-cookie";
import moment from 'moment';

const ViewUser = () => {
    const { id } = useParams();
    const [itemlist, setitemlist] = useState([]);
    const [cookies, setCookie] = useCookies(["user"]);
    const history = useHistory();

    const getUserDetail = async () => {
        try {
            const items = await (
                await getUserById(id)
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
        getUserDetail();
    }, [id])

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> View Detail </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            View
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            View Detail
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="video-section">
                <div class="">
                    <div class="card-group vgr-cards">
                        <div class="card">
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='row'>
                                            <span>
                                                <b>Name: </b> {itemlist?.name}
                                            </span>
                                        </div>
                                        <div className='row'>
                                            <span>
                                                <b>Email: </b> {itemlist?.email}
                                            </span>
                                        </div>
                                        <div className='row'>
                                            <span>
                                                <b>Contact No: </b> {itemlist?.contactno}
                                            </span>
                                        </div>
                                        <div className='row'>
                                            <span>
                                                <b>Date Of Birth: </b> {moment(itemlist?.dob).format('DD-MM-YYYY')}
                                            </span>
                                        </div>
                                        <div className='row'>
                                            <span>
                                                <b>Address: </b> {itemlist?.address}
                                            </span>
                                        </div>
                                        <div className='row'>
                                            <span>
                                                <b>Country: </b> {itemlist?.country}
                                            </span>
                                        </div>
                                        {itemlist?.bankAccNo && (
                                            <div className='row'>
                                                <span>
                                                    <b>Bank Account No: </b> {itemlist?.bankAccNo}
                                                </span>
                                            </div>
                                        )}
                                        {itemlist?.bankIfscCode && (
                                            <div className='row'>
                                                <span>
                                                    <b>Bank IFSC Code: </b> {itemlist?.bankIfscCode}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='row'>
                                            <span>
                                                <b>Role: </b> {itemlist?.role}
                                            </span>
                                        </div>
                                        {itemlist?.aadhar_card_no && (
                                            <div className='row'>
                                                <span>
                                                    <b>Aadhar Card No: </b> {itemlist?.aadhar_card_no}
                                                </span>
                                            </div>
                                        )}
                                         {itemlist?.pan_card_no && (
                                            <div className='row'>
                                                <span>
                                                    <b>Pan Card No: </b> {itemlist?.pan_card_no}
                                                </span>
                                            </div>
                                        )}
                                        {itemlist?.branch && (
                                            <div className='row'>
                                                <span>
                                                    <b>Branch: </b> {itemlist?.branch}
                                                </span>
                                            </div>
                                        )}
                                        {itemlist?.b_head_name && (
                                            <div className='row'>
                                                <span>
                                                    <b>Branch Head Name: </b> {itemlist?.b_head_name}
                                                </span>
                                            </div>
                                        )}
                                         {itemlist?.b_aadhar_card_no && (
                                            <div className='row'>
                                                <span>
                                                    <b>Branch AadharCard No: </b> {itemlist?.b_aadhar_card_no}
                                                </span>
                                            </div>
                                        )}
                                         {itemlist?.b_head_contact_no && (
                                            <div className='row'>
                                                <span>
                                                    <b>Branch Head Contact No: </b> {itemlist?.b_head_contact_no}
                                                </span>
                                            </div>
                                        )}
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


export default ViewUser;