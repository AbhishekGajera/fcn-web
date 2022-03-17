import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { withCookies } from 'react-cookie';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/products', state: 'ourProducts'},
      {path:'/training', state: 'ourTraining'},
      {path:'/trading', state: 'ourTrading'},
      {path:'/investment', state: 'ourInvestment'},
      {path:'/utils', state: 'ourUtils'},

      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>{this.state.user && this.state.user.name}</Trans></span>
                <span className="text-secondary text-small"><Trans>Project Manager</Trans></span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>
          {/* <li className={ this.isPathActive('/appoinment') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/appoinment">
              <span className="menu-title"><Trans>Book Apoinment</Trans></span>
              <i className="mdi mdi-account-check menu-icon"></i>
            </Link>
          </li> */}
           <li className={ this.isPathActive('/training') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourTraining ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourTraining') } data-toggle="collapse">
              <span className="menu-title"><Trans>Training</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={this.state.ourTraining}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/training/free') ? 'nav-link active' : 'nav-link' } to="/training/free"><Trans>Free</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/training/paid') ? 'nav-link active' : 'nav-link' } to="/training/paid"><Trans>Paid</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/trading') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourTrading ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourTrading') } data-toggle="collapse">
              <span className="menu-title"><Trans>Trading</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={this.state.ourTrading}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/trading/demat') ? 'nav-link active' : 'nav-link' } to="/trading/demat"><Trans>Demat</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/trading/equity') ? 'nav-link active' : 'nav-link' } to="/trading/equity"><Trans>Equity</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/trading/forex') ? 'nav-link active' : 'nav-link' } to="/trading/forex"><Trans>Forex</Trans></Link></li>

              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/investment') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourInvestment ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourInvestment') } data-toggle="collapse">
              <span className="menu-title"><Trans>Investment</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={this.state.ourInvestment}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/investment/powerone') ? 'nav-link active' : 'nav-link' } to="/investment/powerone"><Trans>PowerOne</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/investment/ssp') ? 'nav-link active' : 'nav-link' } to="/investment/ssp"><Trans>SSP</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/investment/cp') ? 'nav-link active' : 'nav-link' } to="/investment/cp"><Trans>CP</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/investment/insurance') ? 'nav-link active' : 'nav-link' } to="/investment/insurance"><Trans>Insurance</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/utils') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourUtils ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourUtils') } data-toggle="collapse">
              <span className="menu-title"><Trans>Utils</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={this.state.ourUtils}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/utils/offer') ? 'nav-link active' : 'nav-link' } to="/utils/offer"><Trans>Offer</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/utils/calculator') ? 'nav-link active' : 'nav-link' } to="/utils/calculator"><Trans>Calculator</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/utils/literature') ? 'nav-link active' : 'nav-link' } to="/utils/literature"><Trans>Literature</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          {/* <li className={ this.isPathActive('/balance') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourBalance ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourBalance') } data-toggle="collapse">
              <span className="menu-title"><Trans>Balance</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={this.state.ourBalance}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/balance/deposit') ? 'nav-link active' : 'nav-link' } to="/balance/deposit"><Trans>Deposit</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/balance/withdraw') ? 'nav-link active' : 'nav-link' } to="/balance/withdraw"><Trans>WithDraw</Trans></Link></li>
              </ul>
            </Collapse>
          </li> */}
          <li className={ this.isPathActive('/balance') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/balance">
              <span className="menu-title"><Trans>Balance</Trans></span>
              <i className="mdi mdi-account-check menu-icon"></i>
            </Link>
          </li>
         
          {/* <li className={ this.isPathActive('/products') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourProducts ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourProducts') } data-toggle="collapse">
              <span className="menu-title"><Trans>Our Products</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={this.state.ourProducts}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/products/training') ? 'nav-link active' : 'nav-link' } to="/products/training"><Trans>Training</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/products/trading') ? 'nav-link active' : 'nav-link' } to="/products/trading"><Trans>Trading</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/products/investments') ? 'nav-link active' : 'nav-link' } to="/products/investments"><Trans>Investments</Trans></Link></li>
              </ul>
            </Collapse>
          </li> */}
          <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Basic UI Elements</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Buttons</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Dropdowns</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>Typography</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          {/* <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Form Elements</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            </div>
            <Collapse in={ this.state.formElementsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/basic-elements"><Trans>Basic Elements</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Tables</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-table-large menu-icon"></i>
            </div>
            <Collapse in={ this.state.tablesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Basic Table</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Icons</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-contacts menu-icon"></i>
            </div>
            <Collapse in={ this.state.iconsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } to="/icons/mdi"><Trans>Material</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('chartsMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Charts</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-chart-bar menu-icon"></i>
            </div>
            <Collapse in={ this.state.chartsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js"><Trans>Chart Js</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>User Pages</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-lock menu-icon"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1"><Trans>Login</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1"><Trans>Register</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/lockscreen') ? 'nav-link active' : 'nav-link' } to="/user-pages/lockscreen"><Trans>Lockscreen</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/error-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Error Pages</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-security menu-icon"></i>
            </div>
            <Collapse in={ this.state.errorPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-500">500</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/general-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('generalPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>General Pages</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-medical-bag menu-icon"></i>
            </div>
            <Collapse in={ this.state.generalPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/blank-page"><Trans>Blank Page</Trans></Link></li>
              </ul>
            </Collapse>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="http://bootstrapdash.com/demo/purple-react-free/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
              <span className="menu-title"><Trans>Documentation</Trans></span>
              <i className="mdi mdi-file-document-box menu-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });

    if(this.props && this.props.cookies && this.props.cookies.cookies && this.props.cookies.cookies.user){
      this.setState({ user : JSON.parse(this.props.cookies.cookies.user) })
    }
  }

}

export default withCookies(withRouter(Sidebar));