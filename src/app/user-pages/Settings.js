import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile, userLogout, ImageUpload } from "../../utils/APIs";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const Settings = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const [cookie, setCookie] = useCookies(["user"]);


  const onClickLogoutHandler = async () => {
    const formData = JSON.stringify({
      refreshToken: localStorage.getItem("refreshToken"),
    });
    setCookie("user", null, { path: "/" });
    userLogout(formData).finally(() => {
      history.push("/user-pages/login-1");
    });
  };

  const onSubmit = async (data) => {
    delete data.terms;
    if (!data.password) {
      delete data.password
    }
    const Data = new FormData();
    Data.append('file', data.image[0]);
    const fileResult = await ImageUpload(Data)
    if (fileResult.error) {
      toast.error(fileResult.error.message);
    } else {
      try {
        delete data.image;
        data.avatar = fileResult.secure_url;
        console.log("data", data)
        const result = await updateProfile(data, cookie?.user?.id);
        setCookie('user', result.data, { path: '/' });
        toast.success("Profile updated sucssefully");
      } catch (error) {
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data.message);
        } else {
          toast.error(process.env.REACT_APP_ERROR_MESSAGE);
        }

        if (error?.response?.data?.code === 401) {
          onClickLogoutHandler();
        }
      }
    }
  };

  const values = getValues();

  const handleUpload = (e) => {
    e.preventDefault()
    const element = document.getElementById('input-id');
    if (element) {
      element.click()
    }
  };

  var strongRegex = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");
  var strongRegexMo = new RegExp(
    "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
  );

  return (
    <div>
      <div className="" style={{margin: "0 -2.25rem"}}>
        <div className="CmtLayout-content css-m7fmz7">
          <div className="CmtLayout-root css-7u9s91">
            <div className="CmtLayout-header css-1p8zl8c">
              <div className="css-1onfrn1">
                <div className="MuiCardHeader-root css-t7d2qp">
                  <div className="MuiCardHeader-avatar css-1p83tvv">
                    <div className="MuiAvatar-root MuiAvatar-circular css-h1p9ca">
                      <img alt="Remy Sharp" src={require("../../assets/images/avatar7.jpg")} className="MuiAvatar-img css-1hy9t21" />
                    </div>
                  </div>
                  <div className="MuiCardHeader-content css-11qjisw">
                    <span className="MuiTypography-root MuiTypography-body2 MuiCardHeader-title css-1rnw72g">Kiley Brown</span>
                    <p className="MuiTypography-root MuiTypography-body1 css-flosfx">Florida, USA</p>
                  </div>
                  <div className="MuiCardHeader-action css-tevfyd">
                    <div className="css-mi4p12">
                      <div className="css-xi606m">
                        <h6 className="MuiTypography-root MuiTypography-h6 css-x3gqx0">457</h6>
                        <p className="MuiTypography-root MuiTypography-body1 css-1bd9wpl">Followers</p>
                      </div>
                      <hr className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem css-1shho8c" />
                      <div className="css-xi606m">
                        <h6 className="MuiTypography-root MuiTypography-h6 css-x3gqx0">689</h6>
                        <p className="MuiTypography-root MuiTypography-body1 css-1bd9wpl">Friends</p>
                      </div>
                      <hr className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem css-1shho8c" />
                      <div className="css-xi606m">
                        <h6 className="MuiTypography-root MuiTypography-h6 css-x3gqx0">283</h6>
                        <p className="MuiTypography-root MuiTypography-body1 css-1bd9wpl">Following</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="css-69i1ev">
                  <div className="css-11qjisw">
                    <ul className="MuiList-root css-zggyxd">
                      <li className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-1psj32z" tabIndex="-1" role="menuitem">Timeline
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </li>
                      <li className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-1psj32z" tabIndex="-1" role="menuitem">About<span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </li>
                      <li className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-1psj32z" tabIndex="-1" role="menuitem">Photos<span className="MuiTouchRipple-root css-w0pj6f"></span>
                      </li>
                    </ul>
                  </div>
                  <div className="css-1tu59u4">
                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-rdgd1y" tabIndex="0" type="button">
                      <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SettingsIcon">
                          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
                        </svg>
                      </span>Settings</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="CmtLayout-wrapper MuiBox-root css-1ofxjzb mb-3">
              <div className="CmtLayout-sidebar css-1r7ek9c">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3.75 css-1p273sh">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-12 css-c49ov">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny mb-3">
                      <div className="MuiCardHeader-root css-xjuj3x">
                        <div className="MuiCardHeader-content css-11qjisw">
                          <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw">Contact</span>
                        </div>
                      </div>
                      <ul className="MuiList-root css-f9w29w">
                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-alignItemsFlexStart css-1f151m1"><div className="MuiListItemIcon-root MuiListItemIcon-alignItemsFlexStart css-2h18d4">
                          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailOutlinedIcon">
                            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
                          </svg>
                        </div>
                          <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                            <p className="MuiTypography-root MuiTypography-body1 css-hxfal">Email</p>
                            <p className="MuiTypography-root MuiTypography-body2 MuiListItemText-secondary css-15mdt76">
                              <a className="MuiTypography-root MuiTypography-body1 MuiLink-root MuiLink-underlineNone css-zknl6a" href="#">kiley.brown@example.com</a>
                            </p>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-alignItemsFlexStart css-1f151m1"><div className="MuiListItemIcon-root MuiListItemIcon-alignItemsFlexStart css-2h18d4">
                          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertLinkOutlinedIcon">
                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                          </svg>
                        </div>
                          <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                            <p className="MuiTypography-root MuiTypography-body1 css-hxfal">Web page</p>
                            <p className="MuiTypography-root MuiTypography-body2 MuiListItemText-secondary css-15mdt76">
                              <a className="MuiTypography-root MuiTypography-body1 MuiLink-root MuiLink-underlineNone css-zknl6a" href="#">example.com</a>
                            </p>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-alignItemsFlexStart css-1f151m1">
                          <div className="MuiListItemIcon-root MuiListItemIcon-alignItemsFlexStart css-2h18d4">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalPhoneOutlinedIcon">
                              <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path>
                            </svg>
                          </div>
                          <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                            <p className="MuiTypography-root MuiTypography-body1 css-hxfal">Phone</p>
                            <p className="MuiTypography-root MuiTypography-body1 css-s1cnk">+1-987 (454) 987</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CmtLayout-main css-1nibzor">
                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1t8yj35">
                  <div className="MuiCardHeader-root css-ngeif">
                    <div className="MuiCardHeader-content css-11qjisw">
                      <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw">About</span>
                    </div>
                    <div className="MuiCardHeader-action css-tevfyd">
                      <div className="css-la1z4w">
                        <div className="MuiTabs-root css-gz38gd">
                          <div className="MuiTabs-scroller MuiTabs-fixed css-1anid1y" style={{ overflow: "hidden", marginBottom: "0px" }}>
                            <div aria-label="lab API tabs example" className="MuiTabs-flexContainer css-k008qs" role="tablist">
                              <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-fmop3j" tabindex="0" type="button" role="tab" aria-selected="true" aria-controls="mui-p-61216-P-1" id="mui-p-61216-T-1">Overview
                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                              </button>
                              <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-fmop3j" tabindex="-1" type="button" role="tab" aria-selected="false" aria-controls="mui-p-61216-P-2" id="mui-p-61216-T-2">Work<span className="MuiTouchRipple-root css-w0pj6f"></span>
                              </button>
                              <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-fmop3j" tabindex="-1" type="button" role="tab" aria-selected="false" aria-controls="mui-p-61216-P-3" id="mui-p-61216-T-3">Education<span className="MuiTouchRipple-root css-w0pj6f"></span>
                              </button>
                            </div>
                            <span className="MuiTabs-indicator css-1vgkktx" style={{ left: "0px", width: "100.438px" }}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MuiCardContent-root css-1q0msn4">
                    <ul className="MuiList-root css-1igju9t">
                      <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-16fnjgr">
                        <div className="MuiListItemIcon-root css-12rpcfg">
                          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ApartmentIcon">
                            <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path>
                          </svg>
                        </div>
                        <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                          <h6 className="MuiTypography-root MuiTypography-h6 css-1qe7fy0">Works at</h6>
                          <p className="MuiTypography-root MuiTypography-body1 css-s1cnk">G-axon Tech Pvt. Ltd.</p>
                        </div>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-16fnjgr">
                        <div className="MuiListItemIcon-root css-12rpcfg">
                          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CakeOutlinedIcon"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z"></path>
                          </svg>
                        </div>
                        <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                          <h6 className="MuiTypography-root MuiTypography-h6 css-1qe7fy0">Birthday</h6>
                          <p className="MuiTypography-root MuiTypography-body1 css-s1cnk">Oct 25, 1984</p>
                        </div>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-16fnjgr">
                        <div className="MuiListItemIcon-root css-12rpcfg">
                          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SchoolOutlinedIcon">
                            <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                          </svg>
                        </div>
                        <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                          <h6 className="MuiTypography-root MuiTypography-h6 css-1qe7fy0">Went to</h6>
                          <p className="MuiTypography-root MuiTypography-body1 css-s1cnk">Oxford University</p>
                        </div>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-16fnjgr">
                        <div className="MuiListItemIcon-root css-12rpcfg">
                          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CottageOutlinedIcon"><path d="M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm6 16h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58V19zM10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2z"></path>
                          </svg>
                        </div>
                        <div className="MuiListItemText-root MuiListItemText-multiline css-1xar93x">
                          <h6 className="MuiTypography-root MuiTypography-h6 css-1qe7fy0">Lives in London</h6>
                          <p className="MuiTypography-root MuiTypography-body1 css-s1cnk">From Switzerland</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* old Design */}
      {/* <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-7 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="d-flex align-items-center justify-content-center">
                <div className="nav-profile-img">
                  {cookie?.user?.avatar ? (
                    <img src={cookie?.user?.avatar} alt="user" />
                  ) : (
                    <img src={require("../../assets/images/faces/face1.jpg")}
                      alt="user"
                    />
                  )}
                  <span className="availability-status online"></span>
                </div>
              </div>
              <h4>Change in details?</h4>
              <h6 className="font-weight-light">
                Update your profile is normal, no required to verify again
              </h6>
              <form
                className="pt-3"
                autoComplete="new-password"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Username"
                    name="name"
                    defaultValue={cookie?.user?.name}
                    {...register("name", { required: true })}
                  />
                  {errors && errors.name && <p>name is required field</p>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    name="email"
                    defaultValue={cookie?.user?.email}
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors &&
                    errors.email &&
                    errors.email.type === "required" && (
                      <p>email is required field</p>
                    )}
                  {errors &&
                    errors.email &&
                    errors.email.type === "pattern" && (
                      <p>invalid email formate</p>
                    )}
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Date of birth"
                    name="dob"
                    {...register("dob", { required: true })}
                    defaultValue={cookie?.user?.dob}
                  />
                  {errors && errors.dob && <p>birthdate is required field</p>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Contact number"
                    name="contactno"
                    {...register("contactno", {
                      required: true,
                      pattern: strongRegexMo,
                    })}
                    defaultValue={cookie?.user?.contactno}
                  />
                  {errors &&
                    errors.contactno &&
                    errors.contactno.type === "required" && (
                      <p>contact number is required field</p>
                    )}
                  {errors &&
                    errors.contactno &&
                    errors.contactno.type === "pattern" && (
                      <p>invalid phone number please use valid formate</p>
                    )}
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    id="exampleFormControlSelect2"
                    defaultValue={cookie?.user?.country}
                    name="country"
                    {...register("country", {
                      required: true,
                    })}
                  >
                    <option>Country</option>
                    <option>United States of America</option>
                    <option selected>India</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div>
                {cookie?.user?.registrationType !== 'google' && <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    autoComplete="new-password"
                    name="password"
                    {...register("password", {
                      required: false,
                      pattern: strongRegex,
                    })}
                  />
                  <p>
                    Note :- if you don't want to update your password then simply leave it blank or fill your new password
                  </p>

                  {errors &&
                    errors.password &&
                    errors.password.type === "pattern" && (
                      <p>
                        password should have at least 8 characters , 1 number
                        and latter
                      </p>
                    )}
                </div>}
                <div className="form-group">
                  <input
                    id="input-id"
                    className="d-none"
                    type="file"
                    name="image"
                    multiple={false}
                    {...register("image", { required: true })}
                  />

                  <button
                    onClick={handleUpload}
                    style={{ width: '100%' }}
                    className={`btn btn-outline-${values?.image?.[0]?.name ? " btn-primary" : " btn-primary"
                      }`}
                  >
                    {values?.image?.[0]?.name ? values?.image?.[0]?.name : "Upload Profile"}
                  </button>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="terms"
                        {...register("terms", { required: true })}
                      />
                      <i className="input-helper"></i> Confirm your deatils
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                    disabled={!isDirty || !isValid}
                  >
                    UPDATE PROFILE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Settings;
