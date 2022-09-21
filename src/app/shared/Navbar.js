import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";

import { userLogout, getNotification, getNotificationByAudience } from '../../utils/APIs';

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
    try {
      let items
      if (cookies?.user?.role === 'admin') {
        items = await (
          await getNotification()
        ).data;
      } else if (cookies?.user?.role === 'IBO') {
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
      setNotificationList(items?.results.slice(0, 4));
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
          <li className="nav-item nav-profile notification-nav">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link">
                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-q4gpdn" tabindex="0" type="button">
                  <span className="MuiBadge-root BaseBadge-root css-klzqj9">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-6952u1" focusable="false" aria-hidden="true"
                      viewBox="0 0 24 24" data-testid="NotificationImportantOutlinedIcon">
                      <path
                        d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zM12 6c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5zm0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5zM11 8h2v4h-2zm0 6h2v2h-2z">
                      </path>
                    </svg>
                    <span
                      className="MuiBadge-badge MuiBadge-dot MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular BaseBadge-badge css-t5kacf"></span>
                  </span>
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown">
                <Dropdown.Item>
                  <Trans>Notification</Trans>
                </Dropdown.Item>
                {notificationList?.map((item) => {
                  return (
                    <Dropdown.Item>
                      <img src={item?.attachment} alt="attachment" />
                      <Trans>{item?.title}</Trans>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall css-jwj1vn"
                        tabindex="0" type="button" onClick={() => {viewNotification(item?.id)}}
                      >
                        View
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </button>
                    </Dropdown.Item>
                  )
                })}
                <Dropdown.Item style={{ justifyContent: 'center' }}>
                  <Link to='/notification/all' style={{ color: '#7251c7' }} className='MuiButton-containedPrimary text-center'>
                    <Trans>View All</Trans>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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