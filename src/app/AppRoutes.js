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
          <ProtectedRoute exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/appoinment" component={ Dashboard } />
          {/* <Route exact path="/training" component={ Dashboard } /> */}

          <ProtectedRoute path="/training/free" component={ FreeVideo  } />
          <ProtectedRoute path="/training/paid" component={ PaidVideo  } />
          <ProtectedRoute path="/trading/demat" component={ Demat } />
          <ProtectedRoute path="/trading/commodity" component={ Commodity } />
          <ProtectedRoute path="/trading/forex" component={ Forex } />

          <ProtectedRoute path="/investment/powerone" component={ PowerOne } />
          <ProtectedRoute path="/investment/ssp" component={ SystematicSaving } />
          <ProtectedRoute path="/investment/cp" component={ Currency } />
          <ProtectedRoute path="/investment/insurance" component={ Insurance } />

          <ProtectedRoute path="/utilities/offers" component={ Offers } />
          <ProtectedRoute path="/utilities/calculator" component={ SipCalc } />
          <ProtectedRoute path="/utilities/literature" component={ Literature } />

          <ProtectedRoute path="/utilities/offers" component={ Offers } />
          <ProtectedRoute path="/utilities/calculator" component={ SipCalc } />
          <ProtectedRoute path="/utilities/literature" component={ Literature } />

          <ProtectedRoute path="/travel/ourplan" component={ OurPlans } />
          <ProtectedRoute path="/travel/departure" component={ PreDeparture } />
      
          <ProtectedRoute path="/travel/passport" component={ Passport } />
          <ProtectedRoute path="/travel/visa" component={ Visa } />
          <ProtectedRoute path="/travel/tour" component={ CustomizeTour } />
          <ProtectedRoute path="/balance" component={ Balance } />





          {/* investment */}


          <Route path="/products/trading" component={ Dropdowns } />
          <Route path="/products/investments" component={ Typography } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />


          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />


          <Route path="/icons/mdi" component={ Mdi } />


          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/forgot-password-1" component={ Forgot1 } />
          <Route path="/user-pages/reset-password-1" component={ Reset1 } />
          <Route path="/user-pages/bank-details" component={ BankDetails } />
          <ProtectedRoute path="/user-pages/settings-1" component={ Settings } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />




          {/* IBO routes */}
          <ProtectedRoute path="/clients" component={ CreateClints } />




          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;