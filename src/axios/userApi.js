import axiosClient from "./axiosClient";

const userApi = {
  getUsers(page, size, sort, search) {
    const url = `api/users?page=${page}&size=${size}&sort=${sort}&search=isDeleted:false,${search}`;
    return axiosClient.get(url).catch(err => console.log(err));
  },
};

export default userApi;
