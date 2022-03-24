import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { useCookies  } from 'react-cookie';
import { userLogout } from '../../utils/APIs';

const Navbar = () => {

  const history = useHistory();
  const [cookies, setCookie] = useCookies(['user']);

  const toggleOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  const onClickLogoutHandler = async (evt) => {
    evt.preventDefault()
    const formData = JSON.stringify({
      refreshToken: localStorage.getItem('refreshToken'),
    });
    setCookie('user', null , { path: '/' });
    userLogout(formData).finally(() => {
      history.push('/user-pages/login-1')
    })
  }

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
      <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
        <span className="mdi mdi-menu"></span>
      </button>
      <div className="search-field d-none d-md-block">
        <form className="d-flex align-items-center h-100" action="#">
          <div className="input-group">
            <div className="input-group-prepend bg-transparent">
              <i className="input-group-text border-0 mdi mdi-magnify"></i>
            </div>
            <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects"/>
          </div>
        </form>
      </div>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item nav-profile">
          <Dropdown alignRight>
            <Dropdown.Toggle className="nav-link">
              <div className="nav-profile-img">
                <img src={require("../../assets/images/faces/face1.jpg")} alt="user"/>
                <span className="availability-status online"></span>
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black"><Trans>{cookies?.user?.name}</Trans></p>
                <p className="mb-1 text-black"><Trans>{String(cookies?.user?.contactno)}</Trans></p>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="navbar-dropdown">
              <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                <i className="mdi mdi-email mr-2 text-success"></i>
                <Trans>{cookies?.user?.email}</Trans>
              </Dropdown.Item>
              <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                <i className="mdi mdi-cake mr-2 text-primary"></i>
                <Trans>{cookies?.user?.dob}</Trans>
              </Dropdown.Item>
              <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
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