import React from "react";

const LinkedinAuth = () => {
  React.useEffect(() => {
    window.addEventListener("message", handlePostMessage);
  }, []);

  const handlePostMessage = (event) => {
    if (event.data.type === "profile") {
      updateProfile(event.data.profile);
    }
  };

  const updateProfile = (profile) => {
    console.log(profile);
  };

  const requestProfile = () => {
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${'86goj4c0fjeg38'}&scope=r_liteprofile&state=123456&redirect_uri=${window.location.origin}`;
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };

  return <button onClick={requestProfile}>Linkedin Login</button>;
};

export default LinkedinAuth;
