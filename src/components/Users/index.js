import React, { useState, useEffect } from "react";
import "./Users.css";
import User from "./User";
import searchIcon from "../../images/search.png";
import Paginations from "./Pagination/Pagination";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useHistory } from "react-router";
import { get } from "../../httpHelper";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(5);
  const [size, setSize] = useState(15);
  const [sort, setSort] = useState("staffCodeASC");
  const [search, setSearch] = useState(
    "isDeleted:false,staffCode:,username:,role:,location:"
  );
  const [nameSearch, setNameSearch] = useState("");
  const [name, setName] = useState("");
  const [staffCode, setStaffCode] = useState("");
  const [roleSearch, setRoleSearch] = useState("");
  const [isStaffCodeASC, setIsStaffCodeASC] = useState(true);
  const [isFullNameCodeASC, setIsFullNameCodeASC] = useState(true);
  const [isUserNameASC, setisUserNameASC] = useState(true);
  const [isJoinedDateASC, setisJoinedDateASC] = useState(true);
  const [isTypeASC, setIsTypeASC] = useState(true);

  const locationId = localStorage.getItem("locationId");

 const history = useHistory();

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await get("api/roles");
      const rolesData = response.data.data;
      setRoles(rolesData);
    };
    fetchRoles();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      await setSearch(
        `isDeleted:false,staffCode:${staffCode},username:${name},role:${roleSearch},location:${locationId}`
      );
      const url = `user?page=${currentPage}&size=${size}&sort=${sort}&search=${search}`;
      const response = await get(url);
      const usersData = response.data.data;
      setTotalPage(usersData.totalPages);
      setUsers(usersData.data);
    };
    fetchUsers();
  }, [currentPage, size, sort, search]);

  const handleOnClickSearchButton = (e) => {
    e.preventDefault();
    if (nameSearch.toUpperCase().startsWith("SD")) {
      setStaffCode(nameSearch);
      setName("");
      setSearch(
        `isDeleted:false,staffCode:${nameSearch},username:,role:${roleSearch},location:${locationId}`
      );
    } else {
      setName(nameSearch);
      setStaffCode("");
      setSearch(
        `isDeleted:false,staffCode:,username:${nameSearch},role:${roleSearch},location:${locationId}`
      );
    }
  };

  const handleRoleChange = async (e) => {
    const newRole = e.target.value;
    if (roleSearch.includes(newRole)) {
      const newRoleSearch = roleSearch.replace(newRole, "");
      await setRoleSearch(newRoleSearch);
      const list = search.split(",");
      const newSearch = `${list[0]},${list[1]},${list[2]},role:,${list[4]}`;
      setSearch(newSearch);
    } else if (roleSearch.length === 4) {
      await setRoleSearch("");
      const list = search.split(",");
      const newSearch = `${list[0]},${list[1]},${list[2]},role:,${list[4]}`;
      setSearch(newSearch);
    } else {
      await setRoleSearch(newRole);
      const list = search.split(",");
      const newSearch = `${list[0]},${list[1]},${list[2]},role:${newRole},${list[4]}`;
      await setSearch(newSearch);
    }
  };
  const handlChangeAllRole = () => {
    setRoleSearch("");
    const list = search.split(",");
    const newSearch = `${list[0]},${list[1]},${list[2]},role:,${list[4]}`;
    setSearch(newSearch);
  };

  const handleSortByStaffCode = () => {
    if (isStaffCodeASC) {
      setSort("staffCodeASC");
      setIsStaffCodeASC(!isStaffCodeASC);
    } else {
      setSort("staffCodeDES");
      setIsStaffCodeASC(!isStaffCodeASC);
    }
  };

  const handleSortByFullName = () => {
    if (isFullNameCodeASC) {
      setSort("lastNameASC");
      setIsFullNameCodeASC(!isFullNameCodeASC);
    } else {
      setSort("lastNameDES");
      setIsFullNameCodeASC(!isFullNameCodeASC);
    }
  };
  const handleSortByUserName = () => {
    if (isUserNameASC) {
      setSort("usernameASC");
      setisUserNameASC(!isUserNameASC);
    } else {
      setSort("usernameDES");
      setisUserNameASC(!isUserNameASC);
    }
  };
  const handleSortByJoinedDate = () => {
    if (isJoinedDateASC) {
      setSort("joinedDateASC");
      setisJoinedDateASC(!isJoinedDateASC);
    } else {
      setSort("joinedDateDES");
      setisJoinedDateASC(!isJoinedDateASC);
    }
  };
  const handleSortType = () => {
    if (isTypeASC) {
      setSort("roleASC");
      setIsTypeASC(!isTypeASC);
    } else {
      setSort("roleDES");
      setIsTypeASC(!isTypeASC);
    }
  };

  const handleClickCreateNew = () => {
    history.push("/createnewuser");
  };

  return (
    <div id="users">
      <p className="title">User List</p>
      <div id="Search_bar">
        <FormControl>
          <InputLabel id="label-type">Type</InputLabel>
          <Select
            labelId="label-type"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roleSearch}
            className="roles"
          >
            <MenuItem value={""}>
              <input type="checkbox" value={""} onChange={handlChangeAllRole} />
              All
            </MenuItem>
            {roles.map((role) => {
              if (!role.name.includes("_LOCKED")) {
                return (
                  <>
                    <MenuItem value={role.id}>
                      <input
                        type="checkbox"
                        value={role.id}
                        onChange={(e) => handleRoleChange(e)}
                      />
                      {role.name.replace("ROLE_", "")}
                    </MenuItem>
                  </>
                );
              }
            })}
          </Select>
        </FormControl>

        <div id="right_search_bar">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <button onClick={handleOnClickSearchButton}>
            <img src={searchIcon} height="35px" />
          </button>
          <button id="create_button" onClick={handleClickCreateNew}>
            Create new user
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={handleSortByStaffCode}>
              Staff Code
              {isStaffCodeASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByFullName}>
              Full Name
              {isFullNameCodeASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByUserName}>
              Username
              {isUserNameASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByJoinedDate}>
              Joined Date
              {isJoinedDateASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortType}>
              Type
              {isTypeASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <User user={user} />;
          })}
        </tbody>
      </table>

      <Paginations
        totalPages={totalPage}
        setCurrentPage={(current) => setCurrentPage(current)}
        className="pagination"
      />
    </div>
  );
};

export default Index;
