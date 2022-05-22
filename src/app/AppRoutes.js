import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import ProtectedRoute from '../common/ProtectedRoute';
import Deposit from './client-component/balance/Deposit';

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
const ClientList = lazy(() => import('./IBO-components/ClientList'));
const CreateBranches = lazy(() => import('./Admin-components/BranchesCreate'));
const BranchList = lazy(() => import('./Admin-components/BranchesList'));
const CreateIbo = lazy(() => import('./Admin-components/IboCreate'));
const IboList = lazy(() => import('./Admin-components/IboList'));
const ProductAdd = lazy(() => import('./Admin-components/Product/ProductAdd'));
const ProductFetch = lazy(() => import('./Admin-components/Product/ProductFetch'));
const Weekly = lazy(() => import('./Admin-components/Target/Weekly'));
const Monthly = lazy(() => import('./Admin-components/Target/Monthly'));
const Yearly = lazy(() => import('./Admin-components/Target/Yearly'));
const OfficeExpense = lazy(() => import('./Admin-components/Cost/OfficeExpense'));
const EmployeeExpense = lazy(() => import('./Admin-components/Cost/EmployeeExpense'));
const Mislenious = lazy(() => import('./Admin-components/Cost/Mislenious'));
const EmployeeRevenue = lazy(() => import('./Admin-components/Revenues/EmployeeRevenue'));
const IboRevenue = lazy(() => import('./Admin-components/Revenues/IboRevenue'));
const BranchRevenue = lazy(() => import('./Admin-components/Revenues/BranchRevenue'));
const Invoice = lazy(() => import('./Admin-components/Fees/Invoice'));
const Technology = lazy(() => import('./Admin-components/Fees/Technology'));
const DepositWithdrawal = lazy(() => import('./Admin-components/Fees/DepositWithdrawal'));
const AnnouncementPromote = lazy(() => import('./Admin-components/Marketing/AnnouncementPromote'));
const FlyerAward = lazy(() => import('./Admin-components/Marketing/FlyerAward'));
const Browchures = lazy(() => import('./Admin-components/Marketing/Browchures'));
const AccountOpening = lazy(() => import('./Admin-components/Welcome/AccountOpening'));
const ProductAcquire = lazy(() => import('./Admin-components/Welcome/ProductAcquire'));
const TerminateLetter = lazy(() => import('./Admin-components/Welcome/TerminateLetter'));
const Client = lazy(() => import('./Admin-components/Product-Assign/Client'));
const Ibo = lazy(() => import('./Admin-components/Product-Assign/Ibo'));
const Branch = lazy(() => import('./Admin-components/Product-Assign/Branch'));
const BranchPerformance = lazy(() => import('./Admin-components/Performance/BranchPerformance'));
const Employee = lazy(() => import('./Admin-components/Performance/Employee'));
const IboPerformance = lazy(() => import('./Admin-components/Performance/IboPerformance'));
const EmployeeNotification = lazy(() => import('./Admin-components/Notification/EmployeeNotification'));
const IboNotification = lazy(() => import('./Admin-components/Notification/IboNotification'));
const BranchNotification = lazy(() => import('./Admin-components/Notification/BranchNotification'));
const ClientNotification = lazy(() => import('./Admin-components/Notification/ClientNotification'));
const Manual = lazy(() => import('./Admin-components/Password/Manual'));
const Random = lazy(() => import('./Admin-components/Password/Random'));
const Otp = lazy(() => import('./Admin-components/Password/Otp'));
const CpTravels = lazy(() => import('./Admin-components/Auto-Calculation/CpTravels'));
const PoEquity = lazy(() => import('./Admin-components/Auto-Calculation/PoEquity'));
const Ssp = lazy(() => import('./Admin-components/Auto-Calculation/Ssp'));
const Advances = lazy(() => import('./Admin-components/Employee-Management/Advances'));
const Bonus = lazy(() => import('./Admin-components/Employee-Management/Bonus'));
const Brokerages = lazy(() => import('./Admin-components/Employee-Management/Brokerages'));
const Commision = lazy(() => import('./Admin-components/Employee-Management/Commision'));
const Leave = lazy(() => import('./Admin-components/Employee-Management/Leave'));
const Salaries = lazy(() => import('./Admin-components/Employee-Management/Salaries'));
const Active = lazy(() => import('./Admin-components/Appointment/Active'));
const MonthlyAppoint = lazy(() => import('./Admin-components/Appointment/MonthlyAppoint'));
const NotRequired = lazy(() => import('./Admin-components/Appointment/NotRequired'));
const Pending = lazy(() => import('./Admin-components/Appointment/Pending'));
const Today = lazy(() => import('./Admin-components/Appointment/Today'));
const WeeklyAppoint = lazy(() => import('./Admin-components/Appointment/WeeklyAppoint'));



























const CreateEmployee = lazy(() => import('./BranchComponents/CreateEmployee'));
const EmployeeList = lazy(() => import('./BranchComponents/EmployeeList'));

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
          <ProtectedRoute exact path="/dashboard" component={ Dashboard } accesstype={["user","admin","IBO","branch"]}/>
          <Route exact path="/appoinment" component={ Dashboard }  accesstype={["user","admin","IBO","branch"]}/>
          {/* <Route exact path="/training" component={ Dashboard } /> */}

          <ProtectedRoute path="/training/free" component={ FreeVideo  }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/training/paid" component={ PaidVideo  }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/trading/demat" component={ Demat }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/trading/commodity" component={ Commodity }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/trading/forex" component={ Forex }  accesstype={["user","admin","IBO","branch"]}/>

          <ProtectedRoute path="/investment/powerone" component={ PowerOne }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/investment/ssp" component={ SystematicSaving }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/investment/cp" component={ Currency } accesstype={["user","admin","IBO","branch"]} />
          <ProtectedRoute path="/investment/insurance" component={ Insurance } accesstype={["user","admin","IBO","branch"]} />

          <ProtectedRoute path="/utilities/offers" component={ Offers }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/utilities/calculator" component={ SipCalc }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/utilities/literature" component={ Literature }  accesstype={["user","admin","IBO","branch"]}/>

          <ProtectedRoute path="/travel/ourplan" component={ OurPlans }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/travel/departure" component={ PreDeparture } accesstype={["user","admin","IBO","branch"]} />
      
          <ProtectedRoute path="/travel/passport" component={ Passport }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/travel/visa" component={ Visa } accesstype={["user","admin","IBO","branch"]} />
          <ProtectedRoute path="/travel/tour" component={ CustomizeTour } accesstype={["user","admin","IBO","branch"]} />
          <ProtectedRoute path="/balance" component={ Balance } accesstype={["user","admin","IBO","branch"]} />

          {/* investment */}


          <Route path="/products/trading" component={ Dropdowns }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/products/investments" component={ Typography } accesstype={["user","admin","IBO","branch"]} />

          <Route path="/basic-ui/buttons" component={ Buttons }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/basic-ui/dropdowns" component={ Dropdowns }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/basic-ui/typography" component={ Typography } accesstype={["user","admin","IBO","branch"]} />


          <Route path="/form-Elements/basic-elements" component={ BasicElements }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/tables/basic-table" component={ BasicTable } accesstype={["user","admin","IBO","branch"]} />
          <Route path="/icons/mdi" component={ Mdi }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/charts/chart-js" component={ ChartJs }  accesstype={["user","admin","IBO","branch"]}/>


          <Route path="/user-pages/login-1" component={ Login }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/user-pages/register-1" component={ Register1 }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/user-pages/forgot-password-1" component={ Forgot1 }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/user-pages/reset-password-1" component={ Reset1 }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/user-pages/bank-details" component={ BankDetails }  accesstype={["user","admin","IBO","branch"]}/>
          <ProtectedRoute path="/user-pages/settings-1" component={ Settings } accesstype={["user","admin","IBO","branch"]} />
          <Route path="/user-pages/lockscreen" component={ Lockscreen }  accesstype={["user","admin","IBO","branch"]}/>




          {/* IBO routes */}
          <ProtectedRoute path="/clients/createclient" component={ CreateClints } accesstype={["admin","IBO","branch"]} />


          {/* admin routes */}
          <ProtectedRoute path="/clients/clientlist" component={ ClientList } accesstype={["admin"]} />
          <ProtectedRoute path="/branches/createbranches" component={ CreateBranches } accesstype={["admin"]} />
          <ProtectedRoute path="/branches/brancheslist" component={ BranchList } accesstype={["admin"]} />
          <ProtectedRoute path="/ibo/createibo" component={ CreateIbo } accesstype={["admin"]} />
          <ProtectedRoute path="/ibo/ibolist" component={ IboList } accesstype={["admin"]} />
          <ProtectedRoute path="/products/addproducts" component={ ProductAdd } accesstype={["admin"]} />
          <ProtectedRoute path="/products/productslist" component={ ProductFetch } accesstype={["admin"]} />
          <ProtectedRoute path="/targets/weekly" component={ Weekly } accesstype={["admin"]} />
          <ProtectedRoute path="/targets/monthly" component={ Monthly } accesstype={["admin"]} />
          <ProtectedRoute path="/targets/yearly" component={ Yearly } accesstype={["admin"]} />
          <ProtectedRoute path="/costs/office" component={ OfficeExpense } accesstype={["admin"]} />
          <ProtectedRoute path="/costs/employee" component={ EmployeeExpense } accesstype={["admin"]} />
          <ProtectedRoute path="/costs/mislenious" component={ Mislenious } accesstype={["admin"]} />
          <ProtectedRoute path="/revenue/employee" component={ EmployeeRevenue } accesstype={["admin"]} />
          <ProtectedRoute path="/revenue/ibo" component={ IboRevenue } accesstype={["admin"]} />
          <ProtectedRoute path="/revenue/branch" component={ BranchRevenue } accesstype={["admin"]} />
          <ProtectedRoute path="/fees/invoice" component={ Invoice } accesstype={["admin"]} />
          <ProtectedRoute path="/fees/technology" component={ Technology } accesstype={["admin"]} />
          <ProtectedRoute path="/fees/deposit" component={ DepositWithdrawal } accesstype={["admin"]} />
          <ProtectedRoute path="/marketing/announcement" component={ AnnouncementPromote } accesstype={["admin"]} />
          <ProtectedRoute path="/marketing/flyers" component={ FlyerAward } accesstype={["admin"]} />
          <ProtectedRoute path="/marketing/browchures" component={ Browchures } accesstype={["admin"]} />
          <ProtectedRoute path="/welcome/account_opening" component={ AccountOpening } accesstype={["admin"]} />
          <ProtectedRoute path="/welcome/product_aquire" component={ ProductAcquire } accesstype={["admin"]} />
          <ProtectedRoute path="/welcome/terminate_branch" component={ TerminateLetter } accesstype={["admin"]} />
          <ProtectedRoute path="/product-assign/client" component={ Client } accesstype={["admin"]} />
          <ProtectedRoute path="/product-assign/ibo" component={ Ibo } accesstype={["admin"]} />
          <ProtectedRoute path="/product-assign/branch" component={ Branch } accesstype={["admin"]} />
          <ProtectedRoute path="/performance/employee" component={ Employee } accesstype={["admin"]} />
          <ProtectedRoute path="/performance/ibo" component={ IboPerformance } accesstype={["admin"]} />
          <ProtectedRoute path="/performance/branch" component={ BranchPerformance } accesstype={["admin"]} />
          <ProtectedRoute path="/notification/employee" component={ EmployeeNotification } accesstype={["admin"]} />
          <ProtectedRoute path="/notification/ibo" component={ IboNotification } accesstype={["admin"]} />
          <ProtectedRoute path="/notification/branch" component={ BranchNotification } accesstype={["admin"]} />
          <ProtectedRoute path="/notification/client" component={ ClientNotification } accesstype={["admin"]} />
          <ProtectedRoute path="/password/random" component={ Random } accesstype={["admin"]} />
          <ProtectedRoute path="/password/manual" component={ Manual } accesstype={["admin"]} />
          <ProtectedRoute path="/password/otp" component={ Otp } accesstype={["admin"]} />
          <ProtectedRoute path="/calculation/ssp" component={ Ssp } accesstype={["admin"]} />
          <ProtectedRoute path="/calculation/powerone" component={ PoEquity } accesstype={["admin"]} />
          <ProtectedRoute path="/calculation/cp" component={ CpTravels } accesstype={["admin"]} />
          <ProtectedRoute path="/employee_manage/leave" component={ Leave } accesstype={["admin"]} />
          <ProtectedRoute path="/employee_manage/advances" component={ Advances } accesstype={["admin"]} />
          <ProtectedRoute path="/employee_manage/salary" component={ Salaries } accesstype={["admin"]} />
          <ProtectedRoute path="/employee_manage/bonus" component={ Bonus } accesstype={["admin"]} />
          <ProtectedRoute path="/employee_manage/commision" component={ Commision } accesstype={["admin"]} />
          <ProtectedRoute path="/employee_manage/brokerages" component={ Brokerages } accesstype={["admin"]} />
          <ProtectedRoute path="/appointment/today" component={ Today } accesstype={["admin"]} />
          <ProtectedRoute path="/appointment/weekly" component={ WeeklyAppoint } accesstype={["admin"]} />
          <ProtectedRoute path="/appointment/monthly" component={ MonthlyAppoint } accesstype={["admin"]} />
          <ProtectedRoute path="/appointment/pending" component={ Pending } accesstype={["admin"]} />
          <ProtectedRoute path="/appointment/active" component={ Active } accesstype={["admin"]} />
          <ProtectedRoute path="/appointment/norequired" component={ NotRequired } accesstype={["admin"]} />
















          

          







          {/* branch routes */}
          <ProtectedRoute path="/employees/createEmployees" component={ CreateEmployee } accesstype={["admin","branch"]} />
          <ProtectedRoute path="/employees/listEmployee" component={ EmployeeList } accesstype={["admin","branch"]} />

          <Route path="/error-pages/error-404" component={ Error404 }  accesstype={["user","admin","IBO","branch"]}/>
          <Route path="/error-pages/error-500" component={ Error500 }  accesstype={["user","admin","IBO","branch"]}/>

          <Route path="/general-pages/blank-page" component={ BlankPage }  accesstype={["user","admin","IBO","branch"]}/>

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;