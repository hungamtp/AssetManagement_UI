import axiosClient from "./axiosClient";

const roleApi = {
  getRoles() {
    const url = `api/roles`;
    return axiosClient.get(url);
  },
};

export default roleApi;
