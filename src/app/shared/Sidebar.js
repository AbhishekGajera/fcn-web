import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { withCookies } from 'react-cookie';

class Sidebar extends Component {

  state = {};
  userData = JSON.parse(this.props?.cookies?.cookies?.user || '{"name":"John", "age":30, "city":"New York"}')
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

    if(itemName === 'fcnClients'){
      this.props.history.push('/clients/createclient')
    }

    if(itemName === 'fcnBranches'){
      this.props.history.push('/branches/createbranches')
    }

    if(itemName === 'fcnIbo'){
      this.props.history.push('/ibo/createibo')
    }
    
    if(itemName === 'connectedUsers'){
      this.props.history.push('/connectedusers/getuserList')
    }

    if(itemName === 'fcnProducts'){
      this.props.history.push('/products/addproducts')
    }

    if(itemName === 'fcnTargets'){
      if(["admin"].includes(this.userData?.role)){
        this.props.history.push('/targets/addtarget')
      }

      if(["IBO","branch","user"].includes(this.userData?.role)){
        this.props.history.push('/targets/viewtarget')
      }
    }

    if(itemName === 'fcnEmployee'){
      this.props.history.push('/employee_manage/leave')
    }

    if(itemName === 'fcnPasswords'){
      this.props.history.push('/password/random')
    }

    if(itemName === 'fcnCosts'){
      this.props.history.push('/costs/expences')
    }

    if(itemName === 'fcnRevenues'){
      this.props.history.push('/revenue/addrevenue')
    }

    if(itemName === 'fcnFees'){
      this.props.history.push('/fees/invoice')
    }

    if(itemName === 'fcnMarketing'){
      this.props.history.push('/marketing/announcement')
    }

    if(itemName === 'fcnAppointments'){
      {["user","IBO","branch"].includes(this.userData?.role) && 
      this.props.history.push('/appointment/book-appoinment')
      }
      {["admin"].includes(this.userData?.role) && 
        this.props.history.push('/appointment/fetch-appoinment')
      }
    }

    if(itemName === 'fcnWelcome'){
      this.props.history.push('/welcome/account_opening')
    }

    if(itemName === 'fcnProductAssign'){
      this.props.history.push('/product-assign/product')
    }

    if(itemName === 'fcnPerformance'){
      this.props.history.push('/performance/employee')
    }

    if(itemName === 'fcnNotification'){
      this.props.history.push('/notification/employee')
    }

    if(itemName === 'fcnCalculation'){
      this.props.history.push('/calculation/ssp')
    }

    if(itemName === 'fcnEmployees'){
      this.props.history.push('/employees/createEmployees')
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
      {path:'/clients', state: 'fcnClients'},
      {path:'/branches', state: 'fcnBranches'},
      {path:'/ibo', state: 'fcnIbo'},
      {path:'/products', state: 'fcnProducts'},
      {path:'/appointment', state: 'fcnAppointments'},
      {path:'/targets', state: 'fcnTargets'},
      // {path:'/password', state: 'fcnPasswords'},
      {path:'/employee_manage', state: 'fcnEmployee'},
      {path:'/costs', state: 'fcnCosts'},
      {path:'/revenue', state: 'fcnRevenues'},
      {path:'/fees', state: 'fcnFees'},
      {path:'/marketing', state: 'fcnMarketing'},
      {path:'/welcome', state: 'fcnWelcome'},
      {path:'/product-assign', state: 'fcnProductAssign'},
      {path:'/performance', state: 'fcnPerformance'},
      {path:'/notification', state: 'fcnNotification'},
      {path:'/calculation', state: 'fcnCalculation'},
      {path:'/employee', state: 'fcnEmployees'},
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
         {["IBO"].includes(this.userData?.role) && 
         <>
         <li className={ this.isPathActive('/clients') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnClients ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnClients') } data-toggle="collapse">
              <span className="menu-title"><Trans>Clients</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-account-key menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnClients}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/clients/createclient') ? 'nav-link active' : 'nav-link' } to="/clients/createclient"><Trans>Create Clients</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          </>
          }
           {["IBO","user"].includes(this.userData?.role) &&  <>
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
           </>}
           {["admin","branch"].includes(this.userData?.role) && 
           <>
           <li className={ this.isPathActive('/clients') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnClients ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnClients') } data-toggle="collapse">
              <span className="menu-title"><Trans>Clients</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-account-key menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnClients}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/clients/createclient') ? 'nav-link active' : 'nav-link' } to="/clients/createclient"><Trans>Create Clients</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/clients/clientlist') ? 'nav-link active' : 'nav-link' } to="/clients/clientlist"><Trans>Fetch Clients</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          </>}
          {["admin"].includes(this.userData?.role) && 
          <li className={ this.isPathActive('/branches') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnBranches ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnBranches') } data-toggle="collapse">
              <span className="menu-title"><Trans>Branches</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-source-branch menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnBranches}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/branches/createbranches') ? 'nav-link active' : 'nav-link' } to="/branches/createbranches"><Trans>Create Branch</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/branches/brancheslist') ? 'nav-link active' : 'nav-link' } to="/branches/brancheslist"><Trans>Fetch Branch</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
  }
           {["admin","branch"].includes(this.userData?.role) && 
          <li className={ this.isPathActive('/ibo') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnIbo ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnIbo') } data-toggle="collapse">
              <span className="menu-title"><Trans>Ibo</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-source-branch menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnIbo}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/ibo/createibo') ? 'nav-link active' : 'nav-link' } to="/ibo/createibo"><Trans>Create Ibo</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/ibo/ibolist') ? 'nav-link active' : 'nav-link' } to="/ibo/ibolist"><Trans>Fetch Ibo</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
  }
             {["admin"].includes(this.userData?.role) && 
            <li className={ this.isPathActive('/connectedusers') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.connectedUsers ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('connectedUsers') } data-toggle="collapse">
                <span className="menu-title"><Trans>Connected Users</Trans></span>
                <i className="menu-arrow"></i>
                <i className="mdi mdi-store menu-icon"></i>
              </div>
              <Collapse in={this.state.connectedUsers}>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/connectedusers/getuserList') ? 'nav-link active' : 'nav-link' } to="/connectedusers/getuserList"><Trans>fetch users</Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            }
           {["admin"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/products') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnProducts ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnProducts') } data-toggle="collapse">
              <span className="menu-title"><Trans>Products</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-store menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnProducts}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/products/addproducts') ? 'nav-link active' : 'nav-link' } to="/products/addproducts"><Trans>Add Product</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/products/productslist') ? 'nav-link active' : 'nav-link' } to="/products/productslist"><Trans>Fetch Product</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
  }
           {["admin","IBO","branch"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/targets') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnTargets ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnTargets') } data-toggle="collapse">
              <span className="menu-title"><Trans>Targets</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-target menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnTargets}>
              <ul className="nav flex-column sub-menu">
              {["admin"].includes(this.userData?.role) && <li className="nav-item"> <Link className={ this.isPathActive('/targets/addtarget') ? 'nav-link active' : 'nav-link' } to="/targets/addtarget"><Trans>Add Targets</Trans></Link></li>}  
                {<li className="nav-item"> <Link className={ this.isPathActive('/targets/viewtarget') ? 'nav-link active' : 'nav-link' } to="/targets/viewtarget"><Trans>View Targets</Trans></Link></li>}
              </ul>
            </Collapse>
          </li>
  }
           {["admin","branch","IBO"].includes(this.userData?.role) && 
          <li className={ this.isPathActive('/costs') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnCosts ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnCosts') } data-toggle="collapse">
              <span className="menu-title"><Trans>Costs</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-format-strikethrough-variant menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnCosts}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/costs/expences') ? 'nav-link active' : 'nav-link' } to="/costs/expences"><Trans>Add Expences</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/costs/fetchExpences') === true ? 'nav-link active' : 'nav-link' } to="/costs/fetchExpences"><Trans>Fetch Expense</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
  }
           {["admin"].includes(this.userData?.role) && 
  
          <li className={ this.isPathActive('/revenue') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnRevenues ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnRevenues') } data-toggle="collapse">
              <span className="menu-title"><Trans>Revenues</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-flask menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnRevenues}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/revenue/addrevenue') ? 'nav-link active' : 'nav-link' } to="/revenue/addrevenue"><Trans>Add Revenue</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/revenue/revenuelist') ? 'nav-link active' : 'nav-link' } to="/revenue/revenuelist"><Trans>Fetch Revenue</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        }
           {["admin"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/fees') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnFees ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnFees') } data-toggle="collapse">
              <span className="menu-title"><Trans>Fees</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-table-row-plus-after menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnFees}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/fees/invoice') ? 'nav-link active' : 'nav-link' } to="/fees/invoice"><Trans>Invoice</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/fees/technology') ? 'nav-link active' : 'nav-link' } to="/fees/technology"><Trans>Technology</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/fees/deposit') ? 'nav-link active' : 'nav-link' } to="/fees/deposit"><Trans>Deposit & Withdrawal</Trans></Link></li>

              </ul>
            </Collapse>
          </li>
        }
           {["admin"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/marketing') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnMarketing ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnMarketing') } data-toggle="collapse">
              <span className="menu-title"><Trans>Marketing</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-shopping menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnMarketing}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/marketing/announcement') ? 'nav-link active' : 'nav-link' } to="/marketing/announcement"><Trans>Announcement Promotions</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/marketing/flyers') ? 'nav-link active' : 'nav-link' } to="/marketing/flyers"><Trans>Flyers Award</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/marketing/browchures') ? 'nav-link active' : 'nav-link' } to="/marketing/browchures"><Trans>Browchures Appreciation</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        }
           {["admin"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/employee_manage') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnEmployee ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnEmployee') } data-toggle="collapse">
              <span className="menu-title"><Trans>Employee Management</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-account-switch menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnEmployee}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/employee_manage/leave') ? 'nav-link active' : 'nav-link' } to="/employee_manage/leave"><Trans>Leave</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employee_manage/advances') ? 'nav-link active' : 'nav-link' } to="/employee_manage/advances"><Trans>Advances</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employee_manage/salary') ? 'nav-link active' : 'nav-link' } to="/employee_manage/salary"><Trans>salary</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employee_manage/bonus') ? 'nav-link active' : 'nav-link' } to="/employee_manage/bonus"><Trans>Bonus</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employee_manage/commision') ? 'nav-link active' : 'nav-link' } to="/employee_manage/commision"><Trans>Commision</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employee_manage/brokerages') ? 'nav-link active' : 'nav-link' } to="/employee_manage_manage/browchures"><Trans>Browchures</Trans></Link></li>

              </ul>
            </Collapse>
          </li>
        }
        {["user","admin","IBO","branch"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/appointment') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnAppointments ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnAppointments') } data-toggle="collapse">
              <span className="menu-title"><Trans>Appointments</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-move-resize menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnAppointments}>
              <ul className="nav flex-column sub-menu">
                {["user","IBO","branch"].includes(this.userData?.role) && 
                  <li className="nav-item"> <Link className={ this.isPathActive('/appointment/book-appoinment') ? 'nav-link active' : 'nav-link' } to="/appointment/book-appoinment"><Trans>Book Appoinment</Trans></Link></li>
                }
                <li className="nav-item"> <Link className={ this.isPathActive('/appointment/fetch-appoinment') ? 'nav-link active' : 'nav-link' } to="/appointment/fetch-appoinment"><Trans>Fetch Appoinment</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        }
           {["admin"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/welcome') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnWelcome ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnWelcome') } data-toggle="collapse">
              <span className="menu-title"><Trans>Welcome</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-logout-variant menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnWelcome}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/welcome/account_opening') ? 'nav-link active' : 'nav-link' } to="/welcome/account_opening"><Trans>Account Opening Welcome Letter</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/welcome/product_aquire') ? 'nav-link active' : 'nav-link' } to="/welcome/product_aquire"><Trans>Prodict Aquire IBO Letter</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/welcome/terminate_branch') ? 'nav-link active' : 'nav-link' } to="/welcome/terminate_branch"><Trans>Terminate Branch Letter</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        }
           {["admin"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/product-assign') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnProductAssign ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnProductAssign') } data-toggle="collapse">
              <span className="menu-title"><Trans>Products Assign</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-reproduction menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnProductAssign}>
              <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className={ this.isPathActive('/product-assign/product') ? 'nav-link active' : 'nav-link' } to="/product-assign/product"><Trans>Assign Product</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/product-assign/client') ? 'nav-link active' : 'nav-link' } to="/product-assign/client"><Trans>Client</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/product-assign/ibo') ? 'nav-link active' : 'nav-link' } to="/product-assign/ibo"><Trans>IBO</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/product-assign/branch') ? 'nav-link active' : 'nav-link' } to="/product-assign/branch"><Trans>Branch</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
  }
           {["admin"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/calculation') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnCalculation ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnCalculation') } data-toggle="collapse">
              <span className="menu-title"><Trans>Calculation</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-calculator menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnCalculation}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/calculation/ssp') ? 'nav-link active' : 'nav-link' } to="/calculation/ssp"><Trans>SSP Fix Brokerage</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/calculation/powerone') ? 'nav-link active' : 'nav-link' } to="/calculation/powerone"><Trans>Powerone Equity Brokrage</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/calculation/cp') ? 'nav-link active' : 'nav-link' } to="/calculation/cp"><Trans>Cp Travels</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
  }
           {["admin"].includes(this.userData?.role) && 
          <li className={ this.isPathActive('/performance') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnPerformance ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnPerformance') } data-toggle="collapse">
              <span className="menu-title"><Trans>Best Performance</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-chart-bar menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnPerformance}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/performance/employee') ? 'nav-link active' : 'nav-link' } to="/performance/employee"><Trans>Employee</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/performance/ibo') ? 'nav-link active' : 'nav-link' } to="/performance/ibo"><Trans>IBO</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/performance/branch') ? 'nav-link active' : 'nav-link' } to="/performance/branch"><Trans>Branch</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
  }
           {["admin"].includes(this.userData?.role) && 

          <li className={ this.isPathActive('/notification') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnNotification ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnNotification') } data-toggle="collapse">
              <span className="menu-title"><Trans>Notfication</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-notification-clear-all menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnNotification}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/notification/employee') ? 'nav-link active' : 'nav-link' } to="/notification/employee"><Trans>Employee</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/notification/ibo') ? 'nav-link active' : 'nav-link' } to="/notification/ibo"><Trans>IBO</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/notification/branch') ? 'nav-link active' : 'nav-link' } to="/notification/branch"><Trans>Branch</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/notification/client') ? 'nav-link active' : 'nav-link' } to="/notification/client"><Trans>Client</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
  }
          {["branch"].includes(this.userData?.role) && 
         <>
         <li className={ this.isPathActive('/employees') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.fcnEmployees ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('fcnEmployees') } data-toggle="collapse">
              <span className="menu-title"><Trans>Employees</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-account-key menu-icon"></i>
            </div>
            <Collapse in={this.state.fcnEmployees}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/createEmployees') ? 'nav-link active' : 'nav-link' } to="/employees/createEmployees"><Trans>Create Employees</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/listEmployee') ? 'nav-link active' : 'nav-link' } to="/employees/listEmployee"><Trans>Fetch Employees</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          </>
          }
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