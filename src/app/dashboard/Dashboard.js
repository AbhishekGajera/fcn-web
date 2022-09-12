import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, } from '@fortawesome/fontawesome-free-solid'
import { Trans } from 'react-i18next';
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";
import Deposit from "../client-component/balance/Deposit";
import Withdraw from "../client-component/balance/Withdraw";

import {
  getUsersList,
  getUserIbo,
  getUsersRecent,
  getLeadsDash,
  getUserBranch,
  getProductsListClient,
  getLeads,
  getBranches,
  getTransaction,
  getProductsByUser,
  userLogout,
  getIBOs,
} from "../../utils/APIs";
import { useUrl } from "../../utils/Functions/useUrl";


const Dashboard = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['user']);

  const [itemlist, setitemlist] = useState([]);
  const [itemlistdash, setitemlistdash] = useState([]);
  const [itemlistpro, setitemlistpro] = useState([]);

  const [itemlistTransaction, setitemlistTransaction] = useState([]);
  const [withdrawTransaction, setWithdrawTransaction] = useState([]);
  const [productList, setProductList] = useState([]);
  const [clientList, setClientList] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);

  const [isLoading, setIsLoading] = useState(true)
  const [itemOffset, setItemOffset] = useUrl("page");
  const [itemsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getTransactionList = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getTransaction()
      ).data;
      const depositData = items.results.filter((item) => item.type === 'deposit')
      const withdrawData = items.results.filter((item) => item.type === 'withdraw')
      setitemlistTransaction(depositData);
      setWithdrawTransaction(withdrawData)
      setPageCount(items?.totalPages);
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        });
      }
    }
    setIsLoading(false)
  };

  const getClientList = async () => {
    setIsLoading(true)
    try {
      let items
      if (cookies?.user?.role === "branch") {
        items = await (
          await getUserBranch(
            cookies?.user?.name
          )
        ).data;
        setClientList(items?.totalResults);
      } else if (cookies?.user?.role === "IBO") {
        items = await (
          await getUserIbo(
            cookies?.user?.id
          )
        ).data;
        setClientList(items?.totalResults);
      } else {
        items = await (
          await getUsersList()).data;
        setClientList(items?.totalResults);
      }
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

  const productByUser = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getProductsByUser(
          cookies?.user?.id
        )
      ).data;
      setitemlistpro(items);
      setPageCount(items?.totalPages);
      setIsLoading(false)
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

  const getProductsList = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getProductsListClient()
      ).data;
      const productData = items.results.filter((item) => item?.user?.id === cookies?.user?.id)
      if (cookies?.user?.role === "admin") {
        setTotalProduct(items?.totalResults)
      } else {
        setTotalProduct(productData?.length)
      }
      setProductList(productData);
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        });
      }
    }
    setIsLoading(false)
  };

  useEffect(() => {
    getTransactionList();
    getProductsList();
    productByUser();
    getClientList();
  }, [])

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const [data] = useState({
    labels: [
      "free-cources",
      "paid-cources",
      "demat",
      "commodities",
      "forex",
      "powerone",
      "SSP",
      "CP",
      "insurance",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 19, 3, 5, 2, 3, 11, 9, 13],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  });

  const list = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getUsersRecent(
          itemsPerPage,
          +itemOffset + 1
        )
      ).data;
      setitemlist(items?.results);
      setPageCount(items?.totalPages);
    } catch (error) {


    }
    setIsLoading(false)
  };

  const leadlist = async () => {
    setIsLoading(true)
    try {
      const items = await (
        await getLeadsDash(
          itemsPerPage,
          +itemOffset + 1
        )
      ).data;
      setitemlistdash(items?.results);
      setPageCount(items?.totalPages);
      setIsLoading(false)
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        });
      }
    }
  }

  useEffect(() => {
    list();
  }, [itemOffset, itemsPerPage]);
  useEffect(() => {
    leadlist();
  }, [itemOffset, itemsPerPage]);
  // console.log("it", itemlist)

  return (
    <>
      <div className="mb-3">
        <div className="card">
          <div className="card-body">
            <h4 className="welcome-text mb-0">Welcome , <Trans>{cookies?.user?.name}</Trans></h4>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="card">
          <div className="card-body">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white mr-2">
                  <i className="mdi mdi-home"></i>
                </span>{" "}
                Dashboard{" "}
              </h3>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <span></span>Overview{" "}
                    <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-8 text-white css-1oiueny" style={{ borderRadius: '8px', padding: '1px 1px' }}>
                <div className="MuiCardHeader-root css-xjuj3x">
                  <div className="MuiCardHeader-content css-11qjisw">
                    <h4 className="MuiTypography-root MuiTypography-h4 css-qjljdp">Courses Completed</h4></div>
                  <div className="MuiCardHeader-action css-tevfyd">
                    <div className="css-1yjo05o">
                      <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall css-jwj1vn" tabIndex="0" type="button">Monthly<span className="MuiTouchRipple-root css-w0pj6f"></span></button>
                      <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall css-jwj1vn" tabIndex="0" type="button">Yearly<span className="MuiTouchRipple-root css-w0pj6f"></span></button>
                    </div>
                  </div>
                </div>
                <div className="recharts-responsive-container" style={{ width: '100%', height: '192px' }} width="677.6875" height="192">
                  <div className="recharts-wrapper" style={{ position: 'relative', cursor: 'default', width: '678px', height: '192px' }}>
                    <svg className="recharts-surface" width="678" height="192" viewBox="0 0 678 192" version="1.1"><defs>
                      <clipPath id="recharts302-clip"><rect x="0" y="0" height="192" width="678"></rect>
                      </clipPath></defs><defs><linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="1%" stopColor="#EAE7FF"></stop><stop offset="99%" stopColor="#ffffff"></stop>
                      </linearGradient>
                        <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1"><stop offset="3%" stopColor="#FFF2E0"></stop>
                          <stop offset="97%" stopColor="#ffffff"></stop></linearGradient></defs>
                      <g className="recharts-cartesian-grid"><g className="recharts-cartesian-grid-vertical">
                        <line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="61.63636363636363" y1="0" x2="61.63636363636363" y2="192"></line><line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="123.27272727272727" y1="0" x2="123.27272727272727" y2="192"></line><line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="184.9090909090909" y1="0" x2="184.9090909090909" y2="192"></line><line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="246.54545454545453" y1="0" x2="246.54545454545453" y2="192"></line>
                        <line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="308.1818181818182" y1="0" x2="308.1818181818182" y2="192"></line><line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="369.8181818181818" y1="0" x2="369.8181818181818" y2="192"></line><line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="431.45454545454544" y1="0" x2="431.45454545454544" y2="192"></line><line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="493.09090909090907" y1="0" x2="493.09090909090907" y2="192"></line>
                        <line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="554.7272727272727" y1="0" x2="554.7272727272727" y2="192"></line>
                        <line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="616.3636363636364" y1="0" x2="616.3636363636364" y2="192"></line>
                        <line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="678" y1="0" x2="678" y2="192"></line><line strokeDasharray="6 1 2" strokeOpacity="0.2" stroke="#E73145" fill="none" x="0" y="0" width="678" height="192" offset="[object Object]" x1="0" y1="0" x2="0" y2="192"></line></g></g><g className="recharts-layer recharts-area"><g className="recharts-layer"><defs><clipPath id="animationClipPath-recharts-area-303"><rect x="0" y="0" width="678" height="194"></rect></clipPath></defs><g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-303)"><g className="recharts-layer"><path strokeWidth="2" fillOpacity="0.7" fill="url(#colorUv)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="678" height="192" type="monotone" stroke="none" className="recharts-curve recharts-area-area" d="M0,120C20.545454545454543,108,41.09090909090909,96,61.63636363636363,96C82.18181818181817,96,102.72727272727272,108,123.27272727272727,108C143.8181818181818,108,164.36363636363637,72,184.9090909090909,72C205.45454545454544,72,226,120,246.54545454545453,120C267.09090909090907,120,287.6363636363636,92,308.1818181818182,84C328.72727272727275,76,349.27272727272725,80,369.8181818181818,72C390.3636363636364,64,410.9090909090909,36,431.45454545454544,36C452,36,472.5454545454545,72,493.09090909090907,72C513.6363636363636,72,534.1818181818182,24,554.7272727272727,24C575.2727272727273,24,595.8181818181819,68,616.3636363636364,84C636.9090909090909,100,657.4545454545455,110,678,120L678,192C657.4545454545455,192,636.9090909090909,192,616.3636363636364,192C595.8181818181819,192,575.2727272727273,192,554.7272727272727,192C534.1818181818182,192,513.6363636363636,192,493.09090909090907,192C472.5454545454545,192,452,192,431.45454545454544,192C410.9090909090909,192,390.3636363636364,192,369.8181818181818,192C349.27272727272725,192,328.72727272727275,192,308.1818181818182,192C287.6363636363636,192,267.09090909090907,192,246.54545454545453,192C226,192,205.45454545454544,192,184.9090909090909,192C164.36363636363637,192,143.8181818181818,192,123.27272727272727,192C102.72727272727272,192,82.18181818181817,192,61.63636363636363,192C41.09090909090909,192,20.545454545454543,192,0,192Z"></path>
                          <path type="monotone" strokeWidth="2" fillOpacity="0.7" stroke="#51459E" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="678" height="192" className="recharts-curve recharts-area-curve" d="M0,120C20.545454545454543,108,41.09090909090909,96,61.63636363636363,96C82.18181818181817,96,102.72727272727272,108,123.27272727272727,108C143.8181818181818,108,164.36363636363637,72,184.9090909090909,72C205.45454545454544,72,226,120,246.54545454545453,120C267.09090909090907,120,287.6363636363636,92,308.1818181818182,84C328.72727272727275,76,349.27272727272725,80,369.8181818181818,72C390.3636363636364,64,410.9090909090909,36,431.45454545454544,36C452,36,472.5454545454545,72,493.09090909090907,72C513.6363636363636,72,534.1818181818182,24,554.7272727272727,24C575.2727272727273,24,595.8181818181819,68,616.3636363636364,84C636.9090909090909,100,657.4545454545455,110,678,120"></path></g></g></g></g><g className="recharts-layer recharts-area"><g className="recharts-layer"><defs><clipPath id="animationClipPath-recharts-area-304"><rect x="0" y="0" width="678" height="194"></rect></clipPath></defs><g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-304)">
                            <g className="recharts-layer">
                              <path strokeWidth="2" fillOpacity="0.7" fill="url(#colorUv1)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="678" height="192" type="monotone" stroke="none" className="recharts-curve recharts-area-area" d="M0,156C20.545454545454543,150,41.09090909090909,144,61.63636363636363,144C82.18181818181817,144,102.72727272727272,150,123.27272727272727,150C143.8181818181818,150,164.36363636363637,132,184.9090909090909,132C205.45454545454544,132,226,156,246.54545454545453,156C267.09090909090907,156,287.6363636363636,142,308.1818181818182,138C328.72727272727275,134,349.27272727272725,136,369.8181818181818,132C390.3636363636364,128,410.9090909090909,102,431.45454545454544,102C452,102,472.5454545454545,120,493.09090909090907,120C513.6363636363636,120,534.1818181818182,108,554.7272727272727,108C575.2727272727273,108,595.8181818181819,134,616.3636363636364,138C636.9090909090909,142,657.4545454545455,143,678,144L678,192C657.4545454545455,192,636.9090909090909,192,616.3636363636364,192C595.8181818181819,192,575.2727272727273,192,554.7272727272727,192C534.1818181818182,192,513.6363636363636,192,493.09090909090907,192C472.5454545454545,192,452,192,431.45454545454544,192C410.9090909090909,192,390.3636363636364,192,369.8181818181818,192C349.27272727272725,192,328.72727272727275,192,308.1818181818182,192C287.6363636363636,192,267.09090909090907,192,246.54545454545453,192C226,192,205.45454545454544,192,184.9090909090909,192C164.36363636363637,192,143.8181818181818,192,123.27272727272727,192C102.72727272727272,192,82.18181818181817,192,61.63636363636363,192C41.09090909090909,192,20.545454545454543,192,0,192Z"></path>
                              <path type="monotone" strokeWidth="2" fillOpacity="0.7" stroke="#F39711" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="678" height="192" className="recharts-curve recharts-area-curve" d="M0,156C20.545454545454543,150,41.09090909090909,144,61.63636363636363,144C82.18181818181817,144,102.72727272727272,150,123.27272727272727,150C143.8181818181818,150,164.36363636363637,132,184.9090909090909,132C205.45454545454544,132,226,156,246.54545454545453,156C267.09090909090907,156,287.6363636363636,142,308.1818181818182,138C328.72727272727275,134,349.27272727272725,136,369.8181818181818,132C390.3636363636364,128,410.9090909090909,102,431.45454545454544,102C452,102,472.5454545454545,120,493.09090909090907,120C513.6363636363636,120,534.1818181818182,108,554.7272727272727,108C575.2727272727273,108,595.8181818181819,134,616.3636363636364,138C636.9090909090909,142,657.4545454545455,143,678,144"></path></g></g></g></g></svg></div></div>


                {/* <div className="col-md-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Courses Completed</h4>
                          <Bar data={data} options={options} />
                        </div>
                      </div>
                    </div> */}
              </div>
              <div className="col-md-3" style={{ marginTop: '18px', marginLeft: '15px' }}>
                <div>
                  <div className="row">
                    {["admin", "branch", "IBO"].includes(cookies?.user?.role) && (
                      <div className="col-sm-10  MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1jxw1sp" style={{ marginLeft: '20px', marginBottom: '20px' }} onClick={() => history.push("/travel/ourplan")}>
                        <div className="MuiCardActions-root css-1r9i9ek">
                          <div className="css-622j8h">
                            <div className="css-1v3kl7i">
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1h2yj1z" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FolderOpenIcon">
                                <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z">

                                </path>
                              </svg>
                            </div>
                          </div>
                          <div className="MuiCardContent-root css-1cdh7ge">
                            <h4 className="MuiTypography-root MuiTypography-h4 css-uicpbe">{clientList || 0}</h4>
                            <h5 className="MuiTypography-root MuiTypography-h5 css-5pv1sx">Clients</h5>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="col-sm-10  MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1jxw1sp2" style={{ marginLeft: '20px', marginBottom: '20px' }} onClick={() => history.push("/travel/ourplan")}>
                      <div className="MuiCardActions-root css-1r9i9ek">
                        <div className="css-622j8h">
                          <div className="css-1v3kl7i">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-39533v" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmojiObjectsOutlinedIcon"><path d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm-4 2v-1h4v1h-4zm5.31-5.26c-.09.08-.16.18-.24.26H8.92c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74z"></path><path d="M11.5 11h1v3h-1z"></path><path d="m9.6724 9.5808.7071-.7071 2.1214 2.1213-.7071.7071z">
                            </path><path d="m12.2081 11.7124-.707-.7071 2.1212-2.1214.7071.7072z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <div className="MuiCardContent-root css-1cdh7ge">
                          <h4 className="MuiTypography-root MuiTypography-h4 css-uicpbe">{totalProduct || 0}</h4>
                          <h5 className="MuiTypography-root MuiTypography-h5 css-5pv1sx">Products</h5>
                        </div>
                      </div>
                    </div>

                    {/* <div className="col-md-6 mb-3 MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-o2tasi" onClick={() => history.push("/travel/ourplan")}>
                    <div className="MuiCardHeader-root css-xjuj3x">
                      <div className="MuiCardHeader-avatar css-1p83tvv">
       
                        <div className="MuiAvatar-root MuiAvatar-circular css-1m53fs5">
                        <img alt="" src="../../assets/images/avatar7.jpg" className="MuiAvatar-img css-1hy9t21"/></div>
                        </div>
                        <div className="MuiCardHeader-content css-11qjisw">
                          <h4 className="MuiTypography-root MuiTypography-h4 css-tqvpca">Chris Morris</h4>
                          <span className="MuiTypography-root MuiTypography-body2 MuiCardHeader-subheader css-15mdt76">Director</span>
                          </div>
                          </div>
                    </div> */}

                    {["IBO"].includes(cookies?.user?.role) && (
                      <>
                        <div className="col-sm-10  MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1jxw1sp3" style={{ marginLeft: '20px', marginBottom: '20px' }} onClick={() => history.push("/travel/ourplan")}>
                          <div className="MuiCardActions-root css-1r9i9ek">
                            <div className="css-622j8h">
                              <div className="css-1v3kl7i">
                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-39533v" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmojiObjectsOutlinedIcon"><path d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm-4 2v-1h4v1h-4zm5.31-5.26c-.09.08-.16.18-.24.26H8.92c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74z"></path><path d="M11.5 11h1v3h-1z"></path><path d="m9.6724 9.5808.7071-.7071 2.1214 2.1213-.7071.7071z">
                                </path><path d="m12.2081 11.7124-.707-.7071 2.1212-2.1214.7071.7072z">
                                  </path>
                                </svg>
                              </div>
                            </div>
                            <div className="MuiCardContent-root css-1cdh7ge">
                              <h4 className="MuiTypography-root MuiTypography-h4 css-uicpbe">{cookies?.user?.total_earning.toFixed(2)}</h4>
                              <h5 className="MuiTypography-root MuiTypography-h5 css-5pv1sx">Commission Earned</h5>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* <div>
                  <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Courses Completed</h4>
                          <Bar data={data} options={options} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
      {["user"].includes(cookies?.user?.role) && (
        <>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <div className="card">
                  <div style={{ padding: '16px', borderRadius: '0.375rem' }}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="panel-hdr" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.07)' }}>
                          <h6>Balance</h6>
                        </div>
                        <div className="panel-container mt-3">
                          <div className="row">
                            <Deposit />
                            <Withdraw />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {
        ["admin", "branch"].includes(cookies?.user?.role) && (
          <>
            <div className="mb-3">
              <div className="row">

                <div className="col-md-6">
                  <div className="card">
                    <div style={{ padding: '16px', borderRadius: '0.375rem' }}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="panel-hdr" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.07)' }}>
                            <h6>Recent Clients</h6>
                          </div>
                          <div className="panel-container show p-3">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="thead-light">
                                  <tr>
                                    <th> Name </th>
                                    <th> Contact no. </th>
                                    <th> Branch </th>
                                    <th> IBO </th>
                                    <th> Email </th>


                                  </tr>
                                </thead>
                                <tbody>
                                  {itemlist?.map((item) => {
                                    return (
                                      <tr>
                                        <td>{item?.name}</td>
                                        <td>{item?.contactno}</td>
                                        <td>{item?.branch}</td>
                                        <td>{item?.IBO}</td>
                                        <td>{item?.email}</td>

                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div style={{ padding: '16px', borderRadius: '0.375rem' }}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="panel-hdr" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.07)' }}>
                            <h6>Recent Leads</h6>
                          </div>
                          <div className="panel-container show p-3">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="thead-light">
                                  <tr>
                                    <th> Name </th>
                                    <th> Title </th>
                                    <th> Branch Name </th>
                                    <th> Email </th>
                                    <th> Phone </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {itemlistdash?.map((item, index) => {
                                    return (
                                      <tr>
                                        <td>{item?.name}</td>
                                        <td>{item?.title}</td>
                                        <td>{item?.branch}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.contactno}</td>
                                      </tr>
                                    )
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div style={{ padding: '16px', borderRadius: '0.375rem' }}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="panel-hdr" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.07)' }}>
                            <h6>Recent Deposit</h6>
                          </div>
                          <div className="panel-container show p-3">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="thead-light">
                                  <tr>
                                    <th> From </th>
                                    <th> To </th>
                                    <th> Amount </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {itemlistTransaction?.map((item) => {
                                    return (
                                      <tr>
                                        <td>{item?.from_user?.name}</td>
                                        <td>{item?.to_user?.name}</td>
                                        <td>{item?.total}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div style={{ padding: '16px', borderRadius: '0.375rem' }}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="panel-hdr" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.07)' }}>
                            <h6>Recent Withdraw</h6>
                          </div>
                          <div className="panel-container show p-3">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="thead-light">
                                  <tr>
                                    <th> From </th>
                                    <th> To </th>
                                    <th> Amount </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {withdrawTransaction?.map((item) => {
                                    return (
                                      <tr>
                                        <td>{item?.from_user?.name}</td>
                                        <td>{item?.to_user?.name}</td>
                                        <td>{item?.total}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
      {
        ["user"].includes(cookies?.user?.role) && (
          <>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-10">
                  <div className="card">
                    <div style={{ padding: '16px', borderRadius: '0.375rem' }}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="panel-hdr" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.07)' }}>
                            <h6>Recent Products</h6>
                          </div>
                          <div className="panel-container show p-3">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="thead-light">
                                  <tr>
                                    <th> Product </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {itemlistpro?.products?.map((item) => {
                                    return (
                                      <tr>
                                        <td>{item?.product}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        )
      }

    </>
  );
};

export default Dashboard;
