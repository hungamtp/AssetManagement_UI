import axios from "axios";
const endpoint = "http://localhost:9995/my-shop/api/v1";

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

export function get(url) {
  var config = {
    method: "get",
    url: `${endpoint}/${url}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  return axios(config);
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
  return axios(config);
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
  return axios(config);
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
  return axios(config);
}
