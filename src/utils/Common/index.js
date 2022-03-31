import React from "react";
import { useCookies } from "react-cookie";
import { refreshTokens } from "../APIs";


const Common = () => {
  const [cookies ] = useCookies(["user"]);

  var timer = window.setInterval(async () =>  {
    if(cookies?.user){
      const formData = JSON.stringify({
        refreshToken: localStorage.getItem('refreshToken'),
      });
    const tokens = await refreshTokens(formData)
    localStorage.setItem("accessToken", tokens.data.access.token);
    localStorage.setItem("refreshToken", tokens.data.refresh.token);
    }
  }, 100000);

  React.useEffect(() => {
    return () => {
        window.clearInterval(timer);
    }
  }, [])
  

  return <></>;
};

export default Common;
