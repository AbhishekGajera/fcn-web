import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
// const baseURL = 'http://localhost:8000/v1/'

const serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

const toObject = (str) => {
  let foo = str.split("&").reduce(function(obj, str, index) {
    let strParts = str.split("=");
    if (strParts[0] && strParts[1]) { //<-- Make sure the key & value are not undefined
      obj[strParts[0].replace(/\s+/g, '')] = strParts[1].trim(); //<-- Get rid of extra spaces at beginning of value strings
    }
    return obj;
  }, {});
  
  return foo;
};


const updateURL = (query) => {
  let obj = toObject(query)
  for (let param in obj) {
    /* You can get copy by spreading {...query} */
    if (
      obj[param] ===  undefined /* In case of undefined assignment */ ||
      obj[param] === null ||
      obj[param] === ""
      ) {
        delete obj[param];
      }
    }
  return serialize(obj).toString();
}

const api = (url = "", method, data = {}) => {
  if (url.includes("?")) {
    const updatedURL1 = url?.split("?")[0];
    const updatedURL2 = url?.split("?")[1];
    const string = updateURL(updatedURL2)
    url = updatedURL1 + "?" + string;
  }

  const options = {
    method,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    data,
    url: `${baseURL}/${url}`,
  };
  return axios(options);
};

export default api;

const apiImage = (method, data = {}) => {
  
  data.append("api_key", "519415831796165");
  data.append("folder", "UserDetail");
  data.append('upload_preset', 'UserDetail');

  const fileResult = fetch('https://api.cloudinary.com/v1_1/dihq2mfsj/auto/upload', {
      method: method,
      body: data
    }).then(response => response.json());
 
  return fileResult;
};

export {apiImage};

const multipartApi = (url = "", method, data = {}) => {
  if (url.includes("?")) {
    const updatedURL1 = url?.split("?")[0];
    const updatedURL2 = url?.split("?")[1];
    const string = updateURL(updatedURL2)
    url = updatedURL1 + "?" + string;
  }

  const options = {
    method,
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    data,
    url: `${baseURL}/${url}`,
  };
  return axios(options);
};

export { multipartApi };

const refreshTokenApi = (url = "", method, data = {}) => {
  const options = {
    method,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
    },
    data,
    url: `${baseURL}/${url}`,
  };
  return axios(options);
};

export { refreshTokenApi };
