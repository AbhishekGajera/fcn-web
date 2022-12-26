import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";

import { userLogout, getNotification, getNotificationByAudience, getPersonalizedNotification } from '../../utils/APIs';

const Navbar = () => {

  const history = useHistory();
  const [cookies, setCookie] = useCookies(['user']);
  const [notificationList, setNotificationList] = useState([]);

  const toggleOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  const onClickLogoutHandler = async (evt) => {
    evt.preventDefault()
    const formData = JSON.stringify({
      refreshToken: localStorage.getItem('refreshToken'),
    });
    setCookie('user', null, { path: '/' });
    userLogout(formData).finally(() => {
      history.push('/user-pages/login-1')
    })
  }

  const getNotificationList = async () => {
    if (cookies?.user?.role) {
      try {
        let items
        let data
        let allitems
        if (cookies?.user?.role === 'admin') {
          allitems = await (
            await getNotification()
          ).data;
        }
        if (cookies?.user?.role === 'IBO') {
          items = await (
            await getNotificationByAudience(1, 'ibo')
          ).data;
        } else if (cookies?.user?.role === 'branch') {
          items = await (
            await getNotificationByAudience(1, 'branch')
          ).data;
        } else if (cookies?.user?.role === 'user') {
          items = await (
            await getNotificationByAudience(1, 'client')
          ).data;
        }

        if (cookies?.user?.role !== 'admin') {
          allitems = await (
            await getPersonalizedNotification(cookies?.user?.id)
          ).data;
        }

        if (cookies?.user?.role !== 'admin') {
          data = [...allitems?.results, ...items?.results];
        } else {
          data = [...allitems?.results];
        }
        const notificationData = data.filter((item) => item.hasShowen === false)
        setNotificationList(notificationData.slice(0, 4));

      } catch (error) {
        // console.info("error+++ ",error)
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          // toast.error(process.env.REACT_APP_ERROR_MESSAGE);
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
  }


  const viewNotification = (Id) => {
    history.push({
      pathname: '/viewNotification',
      search: "?" + new URLSearchParams({ id: Id }).toString()
    })
  }

  useEffect(() => {
    getNotificationList();
  }, [])

  const onClickSettingHandler = (evt) => {
    evt.preventDefault()
    history.push('/user-pages/settings-1')
  }

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo" to="/dashboard"><img src={require('../../assets/images/fcn_logo.png')} alt="logo" /></Link>
        <Link className="navbar-brand brand-logo-mini" to="/dashboard"><img src={require('../../assets/images/fcn_logo_mini.png')} alt="logo" /></Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={() => document.body.classList.toggle('sidebar-icon-only')}>
          <span className="mdi mdi-menu"></span>
        </button>
        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input type="text" className="form-control bg-transparent border-0" placeholder="Search Anything" />
            </div>
          </form>
        </div>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item notification-Info">
            <Dropdown alignRight style={{ marginRight: '10px' }}>
              <Dropdown.Toggle className="nav-link count-indicator notification-label css-1oiueny">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count-symbol bg-danger"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                <h6 className="p-3 mb-0"><Trans>Notifications</Trans></h6>
                <div className="dropdown-divider"></div>
                {notificationList?.map((item) => {
                  return (
                    <>
                      <Dropdown.Item className="dropdown-item preview-item" onClick={evt => evt.preventDefault()}>
                        <div className="preview-thumbnail">
                          {item?.attachment ? (
                            <div className="preview-icon">
                              <img src={item?.attachment} alt="attachment" />
                            </div>
                          ) : (
                            <div className="preview-icon bg-success">
                              <i className="mdi mdi-link-variant"></i>
                            </div>
                          )
                          }
                        </div>
                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                          <h6 className="preview-subject font-weight-normal mb-1"><Trans>{item?.title}</Trans></h6>
                          <p className="text-gray ellipsis mb-0">
                            <Trans>{item?.content}</Trans>
                          </p>
                          <button type="button" class="btn btn-gradient-primary btn-rounded btn-sm" onClick={() => { viewNotification(item?.id) }}>View</button>
                        </div>
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                    </>
                  )
                })}
                {notificationList.length === 0 && (
                  <h6 className="p-3 mb-0 text-center"><Trans>No Data Found</Trans></h6>
                )}
                <h6 className="p-3 mb-0 text-center cursor-pointer" onClick={() => { history.push('/notification/all') }}><Trans>See all notifications</Trans></h6>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item nav-profile">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link">
                <div className="nav-profile-img">
                  {cookies?.user?.avatar ? (
                    <img src={cookies?.user?.avatar} alt="user" />
                  ) : (
                    <img src={require("../../assets/images/faces/face1.jpg")}
                      alt="user"
                    />
                  )}
                  <span className="availability-status online"></span>
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black"><Trans>{cookies?.user?.name}</Trans></p>
                  <p className="mb-1 text-black"><Trans>{String(cookies?.user?.contactno)}</Trans></p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item href="!#" onClick={evt => evt.preventDefault()}>
                  <i className="mdi mdi-email mr-2 text-success"></i>
                  <Trans>{cookies?.user?.email}</Trans>
                </Dropdown.Item>
                <Dropdown.Item href="!#" onClick={evt => evt.preventDefault()}>
                  <i className="mdi mdi-cake mr-2 text-primary"></i>
                  <Trans>{cookies?.user?.dob}</Trans>
                </Dropdown.Item>
                <Dropdown.Item href="!#" onClick={evt => evt.preventDefault()}>
                  <i className="mdi mdi-cached mr-2 text-success"></i>
                  <Trans>Activity Log</Trans>
                </Dropdown.Item>
                <Dropdown.Item href="!#" onClick={onClickSettingHandler}>
                  <i className="mdi mdi-settings mr-2 text-primary"></i>
                  <Trans>Settings</Trans>
                </Dropdown.Item>
                <Dropdown.Item href="!#" onClick={onClickLogoutHandler}>
                  <i className="mdi mdi-logout mr-2 text-success"></i>
                  <Trans>Signout</Trans>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffcanvas}>
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar