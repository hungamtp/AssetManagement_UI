import axios from "axios";
import * as URL from "./constants/URL";
import * as errorCode from "./constants/ErrorCode";
const endpoint = URL.EndPoint;

let token = getCookie("user") !== "" ? JSON.parse(getCookie("user")).token : "";

setInterval(() => {
  token = getCookie("user") !== "" ? JSON.parse(getCookie("user")).token : "";
}, 5000);

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function handleError(error) {
  if (error.response !== undefined) {
    if (error.response.data !== undefined) {
      if (error.response.data.error === errorCode.ERR_ROLE_DONT_HAVE_PERMISSION || error.response.data.error === errorCode.ERR_USER_UNAUTHORIZED) {
        console.log(error.response.data.error);
        if (getCookie("user") !== "") {
          setCookie("user", "", 0);
          window.location = URL.LOGIN;
        }
      }
    }
  }
  console.log("Fail to call api");
}

export function get(url) {
  var config = {
    method: "get",
    url: `${endpoint}/${url}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  let promise = axios(config);
  promise.catch((err) => {
    handleError(err);
  });
  return promise;
}

export function post(url, body) {
  var config = {
    method: "post",
    url: `${endpoint}/${url}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: body,
  };

  let promise = axios(config);
  promise.catch((err) => {
    handleError(err);
  });
  return promise;
}

export function put(url, body) {
  var config = {
    method: "put",
    url: `${endpoint}/${url}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: body,
  };
  let promise = axios(config);
  promise.catch((err) => {
    handleError(err);
  });
  return promise;
}

export function del(url) {
  var config = {
    method: "delete",
    url: `${endpoint}/${url}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  let promise = axios(config);
  promise.catch((err) => {
    handleError(err);
  });
  return promise;
}
