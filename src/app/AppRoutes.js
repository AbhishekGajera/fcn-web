import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import ProtectedRoute from '../common/ProtectedRoute';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const SipCalc   = lazy(() => import('./client-component/SipCalc'));
const FreeVideo   = lazy(() => import('./client-component/training/FreeVideo'));
const PaidVideo   = lazy(() => import('./client-component/training/PaidVideo'));
const Demat   = lazy(() => import('./client-component/trading/Demat'));
const Commodity   = lazy(() => import('./client-component/trading/Commodity'));
const Forex   = lazy(() => import('./client-component/trading/Forex'));
const Balance   = lazy(() => import('./client-component/balance/Balance'));
const Offers   = lazy(() => import('./client-component/Utils/Offers'));
const Literature   = lazy(() => import('./client-component/Utils/Literature'));
const PowerOne   = lazy(() => import('./client-component/investment/PowerOne'));
const Insurance   = lazy(() => import('./client-component/investment/Insurance'));
const SystematicSaving   = lazy(() => import('./client-component/investment/SystematicSaving'));
const Currency   = lazy(() => import('./client-component/investment/Currency'));
const Passport   = lazy(() => import('./client-component/travel/Passport'));
const OurPlans   = lazy(() => import('./client-component/travel/OurPlans'));
const PreDeparture   = lazy(() => import('./client-component/travel/PreDeparture'));
const Visa   = lazy(() => import('./client-component/travel/Visa'));
const CustomizeTour   = lazy(() => import('./client-component/travel/CustomizeTour'));
const Settings   = lazy(() => import('./user-pages/Settings'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Forgot1 = lazy(() => import('./user-pages/ForgotPasswod'));
const Reset1 = lazy(() => import('./user-pages/ResetPassword'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));
const BlankPage = lazy(() => import('./general-pages/BlankPage'));
const BankDetails = lazy(() => import('../common/BankDetails'));

const CreateClints = lazy(() => import('./IBO-components/CreateClients'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));
const BasicElements = lazy(() => import('./form-elements/BasicElements'));
const BasicTable = lazy(() => import('./tables/BasicTable'));
const Mdi = lazy(() => import('./icons/Mdi'));
const ChartJs = lazy(() => import('./charts/ChartJs'));
const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));





class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>

           {/* client routes */}
          <ProtectedRoute exact path="/dashboard" component={ Dashboard } accesstype={["client","admin","IBO","branch"]}/>
          <Route exact path="/appoinment" component={ Dashboard }  accesstype={["client","admin","IBO","branch"]}/>
          {/* <Route exact path="/training" component={ Dashboard } /> */}

          <ProtectedRoute path="/training/free" component={ FreeVideo  }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/training/paid" component={ PaidVideo  }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/trading/demat" component={ Demat }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/trading/commodity" component={ Commodity }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/trading/forex" component={ Forex }  accesstype={["client","admin","IBO","branch"]}/>

          <ProtectedRoute path="/investment/powerone" component={ PowerOne }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/investment/ssp" component={ SystematicSaving }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/investment/cp" component={ Currency } accesstype={["client","admin","IBO","branch"]} />
          <ProtectedRoute path="/investment/insurance" component={ Insurance } accesstype={["client","admin","IBO","branch"]} />

          <ProtectedRoute path="/utilities/offers" component={ Offers }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/utilities/calculator" component={ SipCalc }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/utilities/literature" component={ Literature }  accesstype={["client","admin","IBO","branch"]}/>

          <ProtectedRoute path="/utilities/offers" component={ Offers }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/utilities/calculator" component={ SipCalc }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/utilities/literature" component={ Literature } accesstype={["client","admin","IBO","branch"]} />

          <ProtectedRoute path="/travel/ourplan" component={ OurPlans }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/travel/departure" component={ PreDeparture } accesstype={["client","admin","IBO","branch"]} />
      
          <ProtectedRoute path="/travel/passport" component={ Passport }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/travel/visa" component={ Visa } accesstype={["client","admin","IBO","branch"]} />
          <ProtectedRoute path="/travel/tour" component={ CustomizeTour } accesstype={["client","admin","IBO","branch"]} />
          <ProtectedRoute path="/balance" component={ Balance } accesstype={["client","admin","IBO","branch"]} />





          {/* investment */}


          <Route path="/products/trading" component={ Dropdowns }  accesstype={["client","admin","IBO","branch"]}/>
          <Route path="/products/investments" component={ Typography } accesstype={["client","admin","IBO","branch"]} />

          <Route path="/basic-ui/buttons" component={ Buttons }  accesstype={["client","admin","IBO","branch"]}/>
          <Route path="/basic-ui/dropdowns" component={ Dropdowns }  accesstype={["client","admin","IBO","branch"]}/>
          <Route path="/basic-ui/typography" component={ Typography } accesstype={["client","admin","IBO","branch"]} />


          <Route path="/form-Elements/basic-elements" component={ BasicElements }  accesstype={["client","admin","IBO","branch"]}/>

          <Route path="/tables/basic-table" component={ BasicTable } accesstype={["client","admin","IBO","branch"]} />


          <Route path="/icons/mdi" component={ Mdi }  accesstype={["client","admin","IBO","branch"]}/>


          <Route path="/charts/chart-js" component={ ChartJs }  accesstype={["client","admin","IBO","branch"]}/>


          <Route path="/user-pages/login-1" component={ Login }  accesstype={["client","admin","IBO","branch"]}/>
          <Route path="/user-pages/register-1" component={ Register1 }  accesstype={["client","admin","IBO","branch"]}/>
          <Route path="/user-pages/forgot-password-1" component={ Forgot1 }  accesstype={["client","admin","IBO","branch"]}/>
          <Route path="/user-pages/reset-password-1" component={ Reset1 }  accesstype={["client","admin","IBO","branch"]}/>
          <Route path="/user-pages/bank-details" component={ BankDetails }  accesstype={["client","admin","IBO","branch"]}/>
          <ProtectedRoute path="/user-pages/settings-1" component={ Settings } accesstype={["client","admin","IBO","branch"]} />
          <Route path="/user-pages/lockscreen" component={ Lockscreen }  accesstype={["client","admin","IBO","branch"]}/>




          {/* IBO routes */}
          <ProtectedRoute path="/clients" component={ CreateClints } accesstype={["client","admin","IBO","branch"]} />




          <Route path="/error-pages/error-404" component={ Error404 }  accesstype={["client","admin","IBO","branch"]}/>
          <Route path="/error-pages/error-500" component={ Error500 }  accesstype={["client","admin","IBO","branch"]}/>

          <Route path="/general-pages/blank-page" component={ BlankPage }  accesstype={["client","admin","IBO","branch"]}/>

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;