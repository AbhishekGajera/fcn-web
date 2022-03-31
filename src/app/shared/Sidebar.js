import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { withCookies } from 'react-cookie';

class Sidebar extends Component {

  state = {};
  userData = JSON.parse(this.props.cookies.cookies.user)

  setFirstActiveItem = (itemName) => {
    if(itemName === 'ourTraining'){
      this.props.history.push('/training/free')
    }

    if(itemName === 'ourTrading'){
      this.props.history.push('/trading/demat')
    }

    if(itemName === 'ourInvestment'){
      this.props.history.push('/investment/powerone')
    }

    if(itemName === 'ourUtils'){
      this.props.history.push('/utilities/offers')
    }
    if(itemName === 'ourTravels'){
      this.props.history.push('/travel/ourplan')
    }

    if(itemName === 'clients'){
      this.props.history.push('/clients')
    }
  }

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setFirstActiveItem(menuState)
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setFirstActiveItem(menuState)
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
      {path:'/clients', state: 'clients'},
      {path:'/products', state: 'ourProducts'},
      {path:'/training', state: 'ourTraining'},
      {path:'/trading', state: 'ourTrading'},
      {path:'/investment', state: 'ourInvestment'},
      {path:'/utilities', state: 'ourUtils'},
      {path:'/travel', state: 'ourTravels'},
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
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>
         {this.userData?.role === 'IBO' && <li className={ this.isPathActive('/clients') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.clients ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('clients') } data-toggle="collapse">
              <span className="menu-title"><Trans>Clients</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-account-key menu-icon"></i>
            </div>
          </li>}
           <li className={ this.isPathActive('/training') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourTraining ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourTraining') } data-toggle="collapse">
              <span className="menu-title"><Trans>Training</Trans></span>
              <i className="menu-arrow"></i>
              <i className=" mdi mdi-lead-pencil menu-icon"></i>
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
              <i className="mdi mdi-chart-line menu-icon"></i>
            </div>
            <Collapse in={this.state.ourTrading}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/trading/demat') ? 'nav-link active' : 'nav-link' } to="/trading/demat"><Trans>Demat</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/trading/commodity') ? 'nav-link active' : 'nav-link' } to="/trading/commodity"><Trans>Commodity</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/trading/forex') ? 'nav-link active' : 'nav-link' } to="/trading/forex"><Trans>Forex</Trans></Link></li>

              </ul>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/investment') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourInvestment ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourInvestment') } data-toggle="collapse">
              <span className="menu-title"><Trans>Investment</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-briefcase-upload menu-icon"></i>
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
         
          <li className={ this.isPathActive('/balance') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/balance">
              <span className="menu-title"><Trans>Balance</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-account-check menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/utilities') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourUtils ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourUtils') } data-toggle="collapse">
              <span className="menu-title"><Trans>Utilities</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-gift menu-icon"></i>
            </div>
            <Collapse in={this.state.ourUtils}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/utilities/offers') ? 'nav-link active' : 'nav-link' } to="/utilities/offers"><Trans>Offers</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/utilities/calculator') ? 'nav-link active' : 'nav-link' } to="/utilities/calculator"><Trans>Calculator</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/utilities/literature') ? 'nav-link active' : 'nav-link' } to="/utilities/literature"><Trans>Literature</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/travel') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.ourTravels ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('ourTravels') } data-toggle="collapse">
              <span className="menu-title"><Trans>Travel</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-airplane menu-icon"></i>
            </div>
            <Collapse in={this.state.ourTravels}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/travel/ourplan') ? 'nav-link active' : 'nav-link' } to="/travel/ourplan"><Trans>Our Plans</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/travel/departure') ? 'nav-link active' : 'nav-link' } to="/travel/departure"><Trans>Pre Departure</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/travel/tour') ? 'nav-link active' : 'nav-link' } to="/travel/tour"><Trans>Customize Tour</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/travel/passport') ? 'nav-link active' : 'nav-link' } to="/travel/passport"><Trans>Passport</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/travel/visa') ? 'nav-link active' : 'nav-link' } to="/travel/visa"><Trans>Visa</Trans></Link></li>
              </ul>
            </Collapse>
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