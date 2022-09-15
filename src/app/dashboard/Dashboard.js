import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Link, useHistory } from "react-router-dom";
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
  getTransactionBranch,
  getTransactionUsr,
  getProductsListClient,
  getLeads,
  getBranches,
  getTransaction,
  updateTransaction,
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
      let items

      if (cookies?.user?.role === 'admin') {
        items = await (
          await getTransaction()
        ).data;
      }

      if (cookies?.user?.role === 'branch') {
        items = await (
          await getTransactionBranch(cookies?.user?._id)
        ).data;
      }
      if (cookies?.user?.role === 'user') {
        console.info("cookies?.user?._id++ ", cookies?.user)
        items = await (
          await getTransactionUsr(cookies?.user?.id)
        ).data;
      }

      console.log("is", items)

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

  const notificationAccept = async (id) => {
    console.log("idd", id)
    // setIsLoading(true)
    try {


      const data = JSON.stringify({
        trasaction_id: id,
        status: 1
      })




      await updateTransaction(data)
      await getTransactionList();
      toast.success('Status updated successfully', {
        autoClose: true
      })
    } catch (error) {
      if (error?.response?.data?.code === 401) {
        const formData = JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        });
      }
    }
    // setIsLoading(false)

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
        <div className="row" style={{marginLeft:'0px',marginRight:'0px'}}>
          <div className="col-md-6 col-sm-12 text-white css-1oiueny" style={{ borderRadius: '8px', padding: '1px 1px' }}>
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
          <div className="col-md-3 col-sm-12" style={{ marginTop: '18px' }}>
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
                        <img alt="" src="../../../assets/images/avatar7.jpg" className="MuiAvatar-img css-1hy9t21"/></div>
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
          <div className="col-md-3 col-sm-12" style={{ marginTop: '18px' }}>
            <div className="row">
              <div className="col-sm-10 col-md-12 mb-3 MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny">
                <div className="MuiCardHeader-root css-bjoyvq">
                  <div className="MuiCardHeader-content css-11qjisw">
                    <h5 className="MuiTypography-root MuiTypography-h5 css-1l5geqr">Orders</h5>
                    <h6 className="MuiTypography-root MuiTypography-h6 css-1csyfis">293</h6>
                  </div>
                </div>
                <div className="css-9qkujr">
                  <div className="recharts-responsive-container" style={{ width: "100%", height: "76px" }} width="230.75">
                    <div className="recharts-wrapper" style={{ position: "relative", cursor: "default", width: "231px", height: "76px" }}>
                      <svg className="recharts-surface" width="231" height="76" viewBox="0 0 231 76" version="1.1">
                        <defs>
                          <clipPath id="recharts4-clip">
                            <rect x="0" y="0" height="76" width="231"></rect>
                          </clipPath>
                        </defs>
                        <defs>
                          <linearGradient id="color4" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="3%" stop-color="#D1FFEC"></stop>
                            <stop offset="97%" stop-color="#ffffff"></stop>
                          </linearGradient>
                        </defs>
                        <g className="recharts-layer recharts-area">
                          <g className="recharts-layer">
                            <defs>
                              <clipPath id="animationClipPath-recharts-area-5">
                                <rect x="0" y="0" width="231" height="78"></rect>
                              </clipPath>
                            </defs><g className="recharts-layer" clip-path="url(#animationClipPath-recharts-area-5)">
                              <g className="recharts-layer">
                                <path stroke-width="2" fill-opacity="0.7" fill="url(#color4)" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="231" height="76" type="monotone" stroke="none" className="recharts-curve recharts-area-area" d="M0,63.333333333333336C8.555555555555555,62.27777777777778,17.111111111111114,61.22222222222222,25.666666666666668,57C34.22222222222222,52.77777777777778,42.77777777777778,31.666666666666664,51.333333333333336,31.666666666666664C59.88888888888889,31.666666666666664,68.44444444444444,38,77,38C85.55555555555556,38,94.11111111111111,25.333333333333336,102.66666666666667,25.333333333333336C111.22222222222223,25.333333333333336,119.77777777777779,44.33333333333333,128.33333333333334,44.33333333333333C136.88888888888889,44.33333333333333,145.44444444444446,10.133333333333331,154,10.133333333333331C162.55555555555557,10.133333333333331,171.11111111111111,31.666666666666664,179.66666666666669,31.666666666666664C188.22222222222223,31.666666666666664,196.7777777777778,25.333333333333336,205.33333333333334,25.333333333333336C213.88888888888889,25.333333333333336,222.44444444444446,34.83333333333333,231,44.33333333333333L231,76C222.44444444444446,76,213.88888888888889,76,205.33333333333334,76C196.7777777777778,76,188.22222222222223,76,179.66666666666669,76C171.11111111111111,76,162.55555555555557,76,154,76C145.44444444444446,76,136.88888888888889,76,128.33333333333334,76C119.77777777777779,76,111.22222222222223,76,102.66666666666667,76C94.11111111111111,76,85.55555555555556,76,77,76C68.44444444444444,76,59.88888888888889,76,51.333333333333336,76C42.77777777777778,76,34.22222222222222,76,25.666666666666668,76C17.111111111111114,76,8.555555555555555,76,0,76Z"></path>
                                <path type="monotone" stroke-width="2" fill-opacity="0.7" stroke="#159F65" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="231" height="76" className="recharts-curve recharts-area-curve" d="M0,63.333333333333336C8.555555555555555,62.27777777777778,17.111111111111114,61.22222222222222,25.666666666666668,57C34.22222222222222,52.77777777777778,42.77777777777778,31.666666666666664,51.333333333333336,31.666666666666664C59.88888888888889,31.666666666666664,68.44444444444444,38,77,38C85.55555555555556,38,94.11111111111111,25.333333333333336,102.66666666666667,25.333333333333336C111.22222222222223,25.333333333333336,119.77777777777779,44.33333333333333,128.33333333333334,44.33333333333333C136.88888888888889,44.33333333333333,145.44444444444446,10.133333333333331,154,10.133333333333331C162.55555555555557,10.133333333333331,171.11111111111111,31.666666666666664,179.66666666666669,31.666666666666664C188.22222222222223,31.666666666666664,196.7777777777778,25.333333333333336,205.33333333333334,25.333333333333336C213.88888888888889,25.333333333333336,222.44444444444446,34.83333333333333,231,44.33333333333333"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div tabindex="0" className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom" style={{ pointerEvents: "none", visibility: "hidden", position: "absolute", top: "0px", left: "0px", background: "rgba(56, 126, 76, 0.8)", borderRadius: "4px", padding: "5px 8px", fontWeight: "500", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", transform: "translate(10px, 10px)" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-12 mb-3 MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny css-o2tasi">
                <div className="MuiCardHeader-root css-xjuj3x">
                  <div className="MuiCardHeader-avatar css-1p83tvv">
                    <div className="MuiAvatar-root MuiAvatar-circular css-1m53fs5">
                      <img alt="avtar" src={require("../../assets/images/avatar7.jpg")} className="MuiAvatar-img css-1hy9t21" />
                    </div>
                  </div>
                  <div className="MuiCardHeader-content css-11qjisw">
                    <h4 className="MuiTypography-root MuiTypography-h4 css-tqvpca">Chris Morris</h4>
                    <span className="MuiTypography-root MuiTypography-body2 MuiCardHeader-subheader css-15mdt76">Director</span>
                  </div>
                </div>
              </div>
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

      {/* second section */}

      <div className="row mb-3 mt-3">
        <div className="col-xs-12 col-md-4 col-lg-4 css-18xehxy mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny">
            <div className="MuiCardHeader-root css-xjuj3x">
              <div className="MuiCardHeader-content css-11qjisw">
                <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw">Latest
                  Notifications - Deposit</span>
              </div>
              {/* <div className="MuiCardHeader-action css-tevfyd">
                <div
                  className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorSecondary MuiChip-filledSecondary css-1hswelu">
                  <span className="MuiChip-label MuiChip-labelSmall css-tavflp">2 New</span>
                </div>
              </div> */}
            </div>
            <div className="MuiTabs-root css-1275i4j">
              <div className="MuiTabs-scroller MuiTabs-fixed css-1anid1y" style={{ Overflow: "hidden", marginBottom: "0px" }}>
                <div className="MuiTabs-flexContainer css-k008qs" role="tablist">
                  <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1oma3za"
                    tabindex="0" type="button" role="tab" aria-selected="true"
                    aria-controls="mui-p-39481-P-notification" id="mui-p-39481-T-notification">
                    Deposit
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1oma3za" tabindex="-1"
                    type="button" role="tab" aria-selected="false" aria-controls="mui-p-39481-P-feed"
                    id="mui-p-39481-T-feed">
                    Feeds
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
                <span className="MuiTabs-indicator css-1vgkktx" style={{ left: '0px', Width: '203px' }}></span>
              </div>
            </div>
            <div className="MuiTabPanel-root css-fb5pz1" role="tabpanel" aria-labelledby="mui-p-39481-T-notification"
              id="mui-p-39481-P-notification">
              <div direction="vertical"
                style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto", minHeight: "448px", maxHeight: "200px" }}>
                <div
                  style={{ position: "relative", overflow: "scroll", marginRight: "-17px", marginBottom: "-17px", minHeight: "465px", maxHeight: "217px" }}>
                  <ul className="MuiList-root css-1uzmcsd">
                    {/* {itemlistTransaction?.map((item) => {
                                    return (
                                      <tr>
                                        <td>{item?.from_user?.name}</td>
                                        <td>{item?.to_user?.name}</td>
                                        <td>{item?.total}</td>
                                      </tr>
                                    );
                                  })} */}
                    {itemlistTransaction?.map((item) => {
                      return (
                        <li
                          className="MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-alignItemsFlexStart css-1c7vlhc">
                          <div className="MuiListItemAvatar-root MuiListItemAvatar-alignItemsFlexStart css-b612yq">
                            <div className="MuiAvatar-root MuiAvatar-circular css-1o1fysa">
                              {/* <img src="../../assets/images/avatar7.jpg" alt="Img" className="MuiAvatar-img css-1hy9t21" /> */}
                            </div>
                          </div>
                          <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">

                            <div className="MuiTypography-root MuiTypography-body1 css-3n2bqr">
                              <p className="MuiTypography-root MuiTypography-body1 css-lgkk95">
                                <span className="css-rpx22u">{item?.from_user?.name} </span>
                                has sent a request to {item?.to_user?.name} to deposit <b>{item?.total}</b>

                              </p>
                              <div className="css-1yjo05o">
                                <button
                                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall css-jwj1vn"
                                  tabindex="0" type="button"
                                  onClick={() => notificationAccept(item.id)}
                                >

                                  Accept
                                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                                <button
                                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorInherit css-tt3czs"
                                  tabindex="0" type="button">Deny
                                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    })}

                  </ul>

                </div>

              </div>
            </div>

            <hr className="MuiDivider-root MuiDivider-fullWidth css-6gnggm" />
            <div className="MuiCardActions-root MuiCardActions-spacing css-a3wybe">
              <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-ant7mv"
              ><Link to='/transaction/transactionList'>Learn More</Link></a>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-md-4 col-lg-4 css-18xehxy mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny">
            <div className="MuiCardHeader-root css-xjuj3x">
              <div className="MuiCardHeader-content css-11qjisw">
                <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw">Latest
                  Notifications - Withdraw</span>
              </div>
              {/* <div className="MuiCardHeader-action css-tevfyd">
                <div
                  className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorSecondary MuiChip-filledSecondary css-1hswelu">
                  <span className="MuiChip-label MuiChip-labelSmall css-tavflp">2 New</span>
                </div>
              </div> */}
            </div>
            <div className="MuiTabs-root css-1275i4j">
              <div className="MuiTabs-scroller MuiTabs-fixed css-1anid1y" style={{ Overflow: "hidden", marginBottom: "0px" }}>
                <div className="MuiTabs-flexContainer css-k008qs" role="tablist">
                  <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1oma3za"
                    tabindex="0" type="button" role="tab" aria-selected="true"
                    aria-controls="mui-p-39481-P-notification" id="mui-p-39481-T-notification">
                    Withdraw
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                  <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-1oma3za" tabindex="-1"
                    type="button" role="tab" aria-selected="false" aria-controls="mui-p-39481-P-feed"
                    id="mui-p-39481-T-feed">
                    Feeds
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
                <span className="MuiTabs-indicator css-1vgkktx" style={{ left: '0px', Width: '203px' }}></span>
              </div>
            </div>
            <div className="MuiTabPanel-root css-fb5pz1" role="tabpanel" aria-labelledby="mui-p-39481-T-notification"
              id="mui-p-39481-P-notification">
              <div direction="vertical"
                style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto", minHeight: "448px", maxHeight: "200px" }}>
                <div
                  style={{ position: "relative", overflow: "scroll", marginRight: "-17px", marginBottom: "-17px", minHeight: "465px", maxHeight: "217px" }}>
                  <ul className="MuiList-root css-1uzmcsd">
                    {withdrawTransaction?.map((item) => {
                      return (
                        <li
                          className="MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-alignItemsFlexStart css-1c7vlhc">
                          <div className="MuiListItemAvatar-root MuiListItemAvatar-alignItemsFlexStart css-b612yq">
                            <div className="MuiAvatar-root MuiAvatar-circular css-1o1fysa">
                              {/* <img src="../../assets/images/avatar7.jpg" alt="Img" className="MuiAvatar-img css-1hy9t21" /> */}
                            </div>
                          </div>
                          <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">

                            <div className="MuiTypography-root MuiTypography-body1 css-3n2bqr">
                              <p className="MuiTypography-root MuiTypography-body1 css-lgkk95">
                                <span className="css-rpx22u">{item?.from_user?.name} </span>
                                has sent a request to {item?.to_user?.name} to Withdraw  <b>{item?.total}
                                </b>
                              </p>
                              <div className="css-1yjo05o">
                                <button
                                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall css-jwj1vn"
                                  tabindex="0" type="button" onClick={() => notificationAccept(item.id)}>
                                  Accept
                                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                                <button
                                  className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorInherit css-tt3czs"
                                  tabindex="0" type="button">Deny
                                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    })}

                  </ul>

                </div>

              </div>
            </div>
            <div className="MuiTabPanel-root css-fb5pz1" hidden="" role="tabpanel" aria-labelledby="mui-p-39481-T-feed" id="mui-p-39481-P-feed">
            </div>
            <hr className="MuiDivider-root MuiDivider-fullWidth css-6gnggm" />
            <div className="MuiCardActions-root MuiCardActions-spacing css-a3wybe">
              <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-ant7mv"
              ><Link to='/transaction/transactionList'>Learn More</Link></a>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-md-4 col-lg-4 mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny">
            <div className="css-w831un">
              <div className="MuiCardHeader-root css-hyq3if">
                <div className="MuiCardHeader-content css-11qjisw">
                </div>
                <div className="MuiCardHeader-action css-tevfyd">
                  <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-fcr8e5" tabindex="0" type="button">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoreHorizOutlinedIcon">
                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </div>
              </div>
              <div className="css-1oo8ecw">
                <div className="css-9enyu9">
                  <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1cw4bb9">28</div>
                  <h4 className="MuiTypography-root MuiTypography-h4 css-uicpbe">Monday</h4>
                  <p className="MuiTypography-root MuiTypography-body1 css-1xys2wk">December 2021</p>
                </div>
              </div>
            </div>
            <div className="css-1xzjpur">
              <div className="css-1oo8ecw">
                <h5 className="MuiTypography-root MuiTypography-h5 css-qop0nf">Today's schedule</h5>
                <ul className="MuiTimeline-root MuiTimeline-positionRight css-1opa6fd">
                  <li className="MuiTimelineItem-root MuiTimelineItem-positionRight MuiTimelineItem-missingOppositeContent css-14imsqj">
                    <div className="MuiTimelineSeparator-root css-11tgw8h">
                      <span className="MuiTimelineDot-root MuiTimelineDot-filled MuiTimelineDot-filledGrey css-1v8j3oa"></span>
                      <span className="MuiTimelineConnector-root css-idv8vo"></span>
                    </div>
                    <div className="MuiTypography-root MuiTypography-body1 MuiTimelineContent-root MuiTimelineContent-positionRight css-13psa6e">
                      <h6 className="MuiTypography-root MuiTypography-h6 css-11fs8cu">After effect learning</h6>
                      <p className="MuiTypography-root MuiTypography-body1 css-wswjwv">10:00 AM to 11:00 AM</p>
                    </div>
                  </li>
                  <li className="MuiTimelineItem-root MuiTimelineItem-positionRight MuiTimelineItem-missingOppositeContent css-14imsqj">
                    <div className="MuiTimelineSeparator-root css-11tgw8h">
                      <span className="MuiTimelineDot-root MuiTimelineDot-filled MuiTimelineDot-filledGrey css-73zlqr"></span>
                      <span className="MuiTimelineConnector-root css-idv8vo"></span>
                    </div>
                    <div className="MuiTypography-root MuiTypography-body1 MuiTimelineContent-root MuiTimelineContent-positionRight css-13psa6e">
                      <h6 className="MuiTypography-root MuiTypography-h6 css-11fs8cu">Meeting with react development team</h6>
                      <p className="MuiTypography-root MuiTypography-body1 css-wswjwv">1:00 PM to 1:30 PM</p>
                    </div>
                  </li>
                  <li className="MuiTimelineItem-root MuiTimelineItem-positionRight MuiTimelineItem-missingOppositeContent css-14imsqj">
                    <div className="MuiTimelineSeparator-root css-11tgw8h">
                      <span className="MuiTimelineDot-root MuiTimelineDot-filled MuiTimelineDot-filledGrey css-1sm6mlj"></span>
                      <span className="MuiTimelineConnector-root css-idv8vo"></span>
                    </div>
                    <div className="MuiTypography-root MuiTypography-body1 MuiTimelineContent-root MuiTimelineContent-positionRight css-13psa6e">
                      <h6 className="MuiTypography-root MuiTypography-h6 css-11fs8cu">Wireframe design for jumbo template</h6>
                      <p className="MuiTypography-root MuiTypography-body1 css-wswjwv">10:00 AM to 2:30 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}

      <div className="row mb-3">
        <div className="MuiGrid-root MuiGrid-item col-xs-12 col-sm-6 col-md-3 col-lg-3 css-1h91ttg mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-aocaed">
            <div className="MuiCardContent-root">
              <div className="recharts-responsive-container" style={{ width: "100%", height: "80px" }}>
                <div className="recharts-wrapper mx-auto" style={{ position: "relative", cursor: "default", width: "183px", height: "80px" }}>
                  <svg className="recharts-surface" width="183" height="80" viewBox="0 0 183 80" version="1.1">
                    <defs>
                      <clipPath id="recharts6-clip">
                        <rect x="5" y="5" height="70" width="173"></rect>
                      </clipPath>
                    </defs>
                    <defs>
                      <filter id="shadow" height="200%">
                        <feDropShadow dx="0" dy="5" stdDeviation="8" flood-color="#6610f2"></feDropShadow>
                      </filter>
                    </defs>
                    <g className="recharts-layer recharts-line">
                      <path filter="url(#shadow)" stroke-width="3" stroke="#FFFFFF" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="173" height="70" className="recharts-curve recharts-line-curve" type="monotone" d="M5,57.5C16.53333333333333,48.75,28.06666666666667,40,39.6,40C51.13333333333333,40,62.66666666666667,50.9375,74.2,50.9375C85.73333333333333,50.9375,97.26666666666668,18.125,108.80000000000001,18.125C120.33333333333334,18.125,131.86666666666667,33.4375,143.4,33.4375C154.93333333333334,33.4375,166.46666666666667,19.21875,178,5">
                      </path>
                    </g>
                  </svg>
                  <div tabindex="0" className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top" style={{ pointerEvents: "none", visibility: "hidden", position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "5px 8px", borderRadius: "4px", overflow: "hidden", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", transform: "translate(49.6px, 53px)" }}>
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiCardHeader-root css-1i3gbz2">
              <div className="MuiCardHeader-content css-11qjisw">
                <h3 className="MuiTypography-root MuiTypography-h3 css-uj3m61">756+</h3>
                <h6 className="MuiTypography-root MuiTypography-h6 css-bls563">Daily traffic</h6>
              </div>
              <div className="MuiCardHeader-action css-tevfyd">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TimelineIcon">
                  <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="MuiGrid-root MuiGrid-item col-xs-12 col-sm-6 col-md-3 col-lg-3 css-1h91ttg mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-64un3z">
            <div className="MuiCardContent-root">
              <div className="recharts-responsive-container" style={{ width: "100%", height: "80px" }}>
                <div className="recharts-wrapper mx-auto" style={{ position: "relative", cursor: "default", width: "183px", height: "80px" }}>
                  <svg className="recharts-surface" width="183" height="80" viewBox="0 0 183 80" version="1.1">
                    <defs>
                      <clipPath id="recharts6-clip">
                        <rect x="5" y="5" height="70" width="173"></rect>
                      </clipPath>
                    </defs>
                    <defs>
                      <filter id="shadow" height="200%">
                        <feDropShadow dx="0" dy="5" stdDeviation="8" flood-color="#6610f2"></feDropShadow>
                      </filter>
                    </defs>
                    <g className="recharts-layer recharts-line">
                      <path filter="url(#shadow)" stroke-width="3" stroke="#FFFFFF" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="173" height="70" className="recharts-curve recharts-line-curve" type="monotone" d="M5,57.5C16.53333333333333,48.75,28.06666666666667,40,39.6,40C51.13333333333333,40,62.66666666666667,50.9375,74.2,50.9375C85.73333333333333,50.9375,97.26666666666668,18.125,108.80000000000001,18.125C120.33333333333334,18.125,131.86666666666667,33.4375,143.4,33.4375C154.93333333333334,33.4375,166.46666666666667,19.21875,178,5">
                      </path>
                    </g>
                  </svg>
                  <div tabindex="0" className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top" style={{ pointerEvents: "none", visibility: "hidden", position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "5px 8px", borderRadius: "4px", overflow: "hidden", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", transform: "translate(49.6px, 53px)" }}>
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiCardHeader-root css-1i3gbz2">
              <div className="MuiCardHeader-content css-11qjisw">
                <h3 className="MuiTypography-root MuiTypography-h3 css-uj3m61">756+</h3>
                <h6 className="MuiTypography-root MuiTypography-h6 css-bls563">Daily traffic</h6>
              </div>
              <div className="MuiCardHeader-action css-tevfyd">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TimelineIcon">
                  <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="MuiGrid-root MuiGrid-item col-xs-12 col-sm-6 col-md-3 col-lg-3 css-1h91ttg mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-y7cs5t">
            <div className="MuiCardContent-root">
              <div className="recharts-responsive-container" style={{ width: "100%", height: "80px" }}>
                <div className="recharts-wrapper mx-auto" style={{ position: "relative", cursor: "default", width: "183px", height: "80px" }}>
                  <svg className="recharts-surface" width="183" height="80" viewBox="0 0 183 80" version="1.1">
                    <defs>
                      <clipPath id="recharts6-clip">
                        <rect x="5" y="5" height="70" width="173"></rect>
                      </clipPath>
                    </defs>
                    <defs>
                      <filter id="shadow" height="200%">
                        <feDropShadow dx="0" dy="5" stdDeviation="8" flood-color="#6610f2"></feDropShadow>
                      </filter>
                    </defs>
                    <g className="recharts-layer recharts-line">
                      <path filter="url(#shadow)" stroke-width="3" stroke="#FFFFFF" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="173" height="70" className="recharts-curve recharts-line-curve" type="monotone" d="M5,57.5C16.53333333333333,48.75,28.06666666666667,40,39.6,40C51.13333333333333,40,62.66666666666667,50.9375,74.2,50.9375C85.73333333333333,50.9375,97.26666666666668,18.125,108.80000000000001,18.125C120.33333333333334,18.125,131.86666666666667,33.4375,143.4,33.4375C154.93333333333334,33.4375,166.46666666666667,19.21875,178,5">
                      </path>
                    </g>
                  </svg>
                  <div tabindex="0" className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top" style={{ pointerEvents: "none", visibility: "hidden", position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "5px 8px", borderRadius: "4px", overflow: "hidden", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", transform: "translate(49.6px, 53px)" }}>
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiCardHeader-root css-1i3gbz2">
              <div className="MuiCardHeader-content css-11qjisw">
                <h3 className="MuiTypography-root MuiTypography-h3 css-uj3m61">756+</h3>
                <h6 className="MuiTypography-root MuiTypography-h6 css-bls563">Daily traffic</h6>
              </div>
              <div className="MuiCardHeader-action css-tevfyd">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TimelineIcon">
                  <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="MuiGrid-root MuiGrid-item col-xs-12 col-sm-6 col-md-3 col-lg-3 css-1h91ttg mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-tq9b27">
            <div className="MuiCardContent-root">
              <div className="recharts-responsive-container" style={{ width: "100%", height: "80px" }}>
                <div className="recharts-wrapper mx-auto" style={{ position: "relative", cursor: "default", width: "183px", height: "80px" }}>
                  <svg className="recharts-surface" width="183" height="80" viewBox="0 0 183 80" version="1.1">
                    <defs>
                      <clipPath id="recharts6-clip">
                        <rect x="5" y="5" height="70" width="173"></rect>
                      </clipPath>
                    </defs>
                    <defs>
                      <filter id="shadow" height="200%">
                        <feDropShadow dx="0" dy="5" stdDeviation="8" flood-color="#6610f2"></feDropShadow>
                      </filter>
                    </defs>
                    <g className="recharts-layer recharts-line">
                      <path filter="url(#shadow)" stroke-width="3" stroke="#FFFFFF" fill="none" points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]" width="173" height="70" className="recharts-curve recharts-line-curve" type="monotone" d="M5,57.5C16.53333333333333,48.75,28.06666666666667,40,39.6,40C51.13333333333333,40,62.66666666666667,50.9375,74.2,50.9375C85.73333333333333,50.9375,97.26666666666668,18.125,108.80000000000001,18.125C120.33333333333334,18.125,131.86666666666667,33.4375,143.4,33.4375C154.93333333333334,33.4375,166.46666666666667,19.21875,178,5">
                      </path>
                    </g>
                  </svg>
                  <div tabindex="0" className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top" style={{ pointerEvents: "none", visibility: "hidden", position: "absolute", top: "0px", left: "0px", backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "5px 8px", borderRadius: "4px", overflow: "hidden", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", transform: "translate(49.6px, 53px)" }}>
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiCardHeader-root css-1i3gbz2">
              <div className="MuiCardHeader-content css-11qjisw">
                <h3 className="MuiTypography-root MuiTypography-h3 css-uj3m61">756+</h3>
                <h6 className="MuiTypography-root MuiTypography-h6 css-bls563">Daily traffic</h6>
              </div>
              <div className="MuiCardHeader-action css-tevfyd">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TimelineIcon">
                  <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}

      <div className="row mt-3 mb-3">
        <div className="MuiGrid-root MuiGrid-item col-xs-12  col-sm-12 col-md-4 col-lg-4 mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-iyzm1h">
            <div className="MuiCardHeader-root css-xjuj3x">
              <div className="MuiCardHeader-content css-11qjisw">
                <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw">Word of the day</span>
              </div>
              <div className="MuiCardHeader-action css-tevfyd">
                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1dr2gsz" tabindex="0" type="button">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SyncOutlinedIcon">
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path>
                  </svg>
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
            </div>
            <div className="MuiCardContent-root css-1xnij97">
              <h3 className="MuiTypography-root MuiTypography-h3 css-1t0ue00">be-nev-o-lent</h3>
              <p className="MuiTypography-root MuiTypography-body1 css-cduihs">adjective</p>
              <p className="MuiTypography-root MuiTypography-body1 css-1tcq10f">The definition of benevolent is enjoying helping others or someone whose characteristic is being friendly.</p>
              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1w7e976" tabindex="0" type="button">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1lf2qyz" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VolumeUpOutlinedIcon">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"></path>
                </svg>
                <span className="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="MuiGrid-root MuiGrid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny">
            <div className="MuiCardHeader-root css-xjuj3x">
              <div className="MuiCardHeader-content css-11qjisw">
                <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw">Our office</span>
              </div>
            </div>
            <ul className="MuiList-root css-1uzmcsd">
              <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-alignItemsFlexStart css-13qbgj9">
                <div className="MuiListItemIcon-root MuiListItemIcon-alignItemsFlexStart css-1udam5l">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </div>
                <div className="MuiListItemText-root css-1tsvksn">
                  <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1xeobr1">488, blingum road, JP Street, NJ, California</span>
                </div>
              </li>
              <li className="MuiDivider-root MuiDivider-fullWidth css-6gnggm" role="separator"></li>
              <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-gw9jds">
                <div className="MuiListItemIcon-root css-1s0er8q">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                  </svg>
                </div>
                <div className="MuiListItemText-root css-1tsvksn">
                  <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1xeobr1">+01-992856-8535</span>
                </div>
              </li>
              <li className="MuiDivider-root MuiDivider-fullWidth css-6gnggm" role="separator"></li>
              <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-gw9jds">
                <div className="MuiListItemIcon-root css-1s0er8q">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MailOutlineIcon">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                  </svg>
                </div>
                <div className="MuiListItemText-root css-1tsvksn">
                  <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1xeobr1">bob.bulider@jobportal.com</span>
                </div>
              </li>
            </ul>
            <div className="css-rzk08f">
              <button className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-default css-1c0g2ox" tabindex="0" type="button" aria-label="Twitter">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwitterIcon">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg><span className="MuiTouchRipple-root css-w0pj6f"></span></button><button className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-default css-1ptdtbs" tabindex="0" type="button" aria-label="Facebook"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                  </svg>
                <span className="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
              <button className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-default css-wjh1gz" tabindex="0" type="button" aria-label="Instagram">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span className="MuiTouchRipple-root css-w0pj6f"></span></button><button className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-default css-1c0g2ox" tabindex="0" type="button" aria-label="LinkedIn">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
                <span className="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="MuiGrid-root MuiGrid-item col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3">
          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-5efwz4">
            <div className="MuiCardHeader-root css-xjuj3x">
              <div className="MuiCardHeader-content css-11qjisw">
              </div>
              <div className="MuiCardHeader-action css-tevfyd">
                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-myva60" tabindex="0" type="button">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShareIcon">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg>
                  <span className="MuiTouchRipple-root css-w0pj6f">
                  </span>
                </button>
              </div>
            </div>
            <div className="css-p4cmdx">
              <div className="css-5or1w4"></div>
              <div className="css-1oo8ecw">
                <div className="css-19kzrtu">
                  <div className="css-j7qwjs">
                    <h6 className="MuiTypography-root MuiTypography-h6 css-2nu12">26 January, 03:00 PM</h6>
                    <h2 className="MuiTypography-root MuiTypography-h2 css-12a6upa">Explore the best place of the world</h2><p className="MuiTypography-root MuiTypography-body1 css-3n2bqr">Plus more tips to keep your feet from stinking this summer</p>
                  </div>
                </div>
                <hr className="MuiDivider-root MuiDivider-fullWidth css-6gnggm" />
                <div className="MuiCardActions-root MuiCardActions-spacing css-p1lzxd">
                  <div className="css-105dx4f">
                    <p className="MuiTypography-root MuiTypography-body1 css-3n2bqr">
                      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-sf71ho" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MessageIcon">
                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                      </svg> 34</p>
                    <p className="MuiTypography-root MuiTypography-body1 css-3n2bqr">
                      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-sf71ho" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RemoveRedEyeIcon">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                      </svg> 155
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth section */}
      {
        ["IBO"].includes(cookies?.user?.role) && (
          <div className="mb-3">
            <div className="card">
              <div className="card-body css-aocaed">
                <h4 className="welcome-text mb-0">Welcome To <Trans>{cookies?.user?.name}</Trans></h4>
              </div>
            </div>
          </div>)
      }

      {
        ["user"].includes(cookies?.user?.role) && (
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
        )
      }

      {/* table section */}
      {
        ["admin", "branch"].includes(cookies?.user?.role) && (
          <>
            <div className="row">
              <div className="col-md-7 mb-3">
                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny">
                  <div className="MuiCardHeader-root css-xjuj3x">
                    <div className="MuiCardHeader-content css-11qjisw">
                      <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw">Recent Clients</span>
                    </div>
                  </div>
                  <div className="MuiCardContent-root css-ulk2bu">
                    <div direction="vertical" style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto", minHeight: " 284px", maxHeight: "200px" }}>
                      <div style={{ position: "relative", overflow: "scroll", marginRight: "-17px", marginBottom: "-17px", minHeight: "301px", maxHeight: "217px" }}>
                        <ul className="MuiList-root css-uopt2g">
                          {itemlist?.map((item) => {
                            return (
                              <li className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters css-1aqubt9" tabindex="0" role="button">
                                <div className="MuiListItemAvatar-root css-149vso">
                                  <div className="MuiAvatar-root MuiAvatar-circular css-1pclk9a">
                                    {item?.avatar ?
                                      <img src={item?.avatar} alt="avtar" />
                                      :
                                      <img src={require("../../assets/images/faces/face1.jpg")} alt="avtar" />
                                    }
                                  </div>
                                </div>
                                <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                                  <h5 className="MuiTypography-root MuiTypography-h5 css-1l5geqr">{item?.name}</h5>
                                  <p className="MuiTypography-root MuiTypography-body1 css-1vnkcgl">
                                    <span className="css-rpx22u">{item?.email}</span> {item?.contactno} </p>
                                </div>
                                <div>
                                  {item?.branch && (
                                    <p class="MuiTypography-root MuiTypography-body1 css-1vnkcgl">Branch : {item?.branch}</p>)}
                                  {item?.IBO && (
                                    <p class="MuiTypography-root MuiTypography-body1 css-1vnkcgl">IBO : {item?.IBO}</p>)}
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-3">
                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny">
                  <div className="MuiCardHeader-root css-xjuj3x">
                    <div className="MuiCardHeader-content css-11qjisw">
                      <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw">Recent Leads</span>
                    </div>
                  </div>
                  <div className="MuiCardContent-root css-ulk2bu">
                    <div direction="vertical" style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto", minHeight: " 284px", maxHeight: "200px" }}>
                      <div style={{ position: "relative", overflow: "scroll", marginRight: "-17px", marginBottom: "-17px", minHeight: "301px", maxHeight: "217px" }}>
                        <ul className="MuiList-root css-uopt2g">
                          {itemlistdash?.map((item) => {
                            return (
                              <li className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters css-1aqubt9" tabindex="0" role="button">
                                <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                                  <h5 className="MuiTypography-root MuiTypography-h5 css-1l5geqr">{item?.name}</h5>
                                  <p className="MuiTypography-root MuiTypography-body1 css-1vnkcgl">
                                    <span className="css-rpx22u">{item?.email}</span> {item?.contactno} </p>
                                </div>
                                {item?.branch && (
                                  <div>
                                    <p class="MuiTypography-root MuiTypography-body1 css-1vnkcgl">Branch : {item?.branch}</p>
                                  </div>
                                )}
                              </li>
                            )
                          })}
                        </ul>
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
