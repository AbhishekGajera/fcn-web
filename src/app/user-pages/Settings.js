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
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-7 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="d-flex align-items-center justify-content-center">
                <div className="nav-profile-img">
                  {cookie.user.avatar ? (
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
      </div>
    </div>
  );
};

export default Settings;
