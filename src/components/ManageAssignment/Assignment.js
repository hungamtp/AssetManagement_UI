import React, { useState, useEffect } from 'react'
import searchIcon from "../../images/search.png";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useHistory } from "react-router";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { get, post } from "../../httpHelper";
import './Assignment.css'
import Assign from './Assign'
import Paginations from './Pagination/Pagination';


const Assignment = () => {
  const history = useHistory();

  const [assignments, setAssignments] = useState([]);
  const [size, setSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [sortField, setSortField] = useState("assignmentId");
  const [sortType, setSortType] = useState("ASC");
  const [AssetCode, setAssetCode] = useState("");
  const [isNoASC, setIsNoASC] = useState(true);
  const [isAssetCodeASC, setIsAssetCodeASC] = useState(true);
  const [isAssetNameASC, setIsAssetNameASC] = useState(true);
  const [isAssignedtoASC, setIsAssignedtoASC] = useState(true);
  const [isAssignedbyASC, setIsAssignedbyASC] = useState(true);
  const [isAssignedDateASC, setIsAssignedDateASC] = useState(true);
  const [isStateASC, setIsStateASC] = useState(true);
  //state
  const [stateList, setStateList] = useState([1, 2, 3]);
  const [stateAll, setStateAll] = useState(true);
  const [stateAccepted, setStateAccepted] = useState(false);
  const [stateWaiting, setStateWaiting] = useState(false);
  const [stateDeclined, setStateDeclined] = useState(false);
  //date
  const [localDateTime, setLocalDateTime] = useState("");

  const handleClickCreateNew = () => {
    history.push("/creatnewasssignment ");
  };

  const handleOnClickSearchButton = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchAssignments = async () => {
      const url = `assignment?page=${currentPage}&size=${size}`;
      get(url)
        .then(response => {
          setAssignments(response.data.data);
        });
    };
    fetchAssignments();
  }, []);

  useEffect(() => {
    const url = `assignment/filter-search-sort?page=${currentPage}&size=${size}`;
    const data = {
      states: stateList, localDateTime: localDateTime === "" ? localDateTime : new Date(localDateTime).toISOString().slice(0, 19), sortField, sortType, searchKeyWord
    }
    console.log(data);
    post(url, data)
      .then(response => {
        setAssignments(response.data.data);
      }).catch(err => console.log(err))
  }, [stateList, localDateTime, sortField, sortType])

  const handleSortByNo = () => {
    if (isNoASC) {
      setSortField("no");
      setSortType("ASC");
      setIsNoASC(!isNoASC);
    } else {
      setSortField("no");
      setSortType("DSC");
      setIsNoASC(!isNoASC);
    }
  };
  const handleSortByAssetCode = () => {
    if (isAssetCodeASC) {
      setSortField("assetCode");
      setSortType("ASC");
      setIsAssetCodeASC(!isAssetCodeASC);
    } else {
      setSortField("assetCode");
      setSortType("DSC");
      setIsAssetCodeASC(!isAssetCodeASC);
    }
  };

  const handleSortByAssetName = () => {
    if (isAssetNameASC) {
      setSortField("assetName");
      setSortType("ASC");
      setIsAssetNameASC(!isAssetNameASC);
    } else {
      setSortField("assetName");
      setSortType("DSC");
      setIsAssetNameASC(!isAssetNameASC);
    }
  };
  const handleSortByAssignedto = () => {
    if (isAssignedtoASC) {
      setSortField("assignedTo");
      setSortType("ASC");
      setIsAssignedtoASC(!isAssignedtoASC);
    } else {
      setSortField("assignedTo");
      setSortType("DSC");
      setIsAssignedtoASC(!isAssignedtoASC);
    }
  };

  const handleSortByAssignedby = () => {
    if (isAssignedtoASC) {
      setSortField("assignedBy");
      setSortType("ASC");
      setIsAssignedbyASC(!isAssignedbyASC);
    } else {
      setSortField("assignedBy");
      setSortType("DSC");
      setIsAssignedbyASC(!isAssignedbyASC);
    }
  };
  const handleSortByAssignedDate = () => {
 if (isAssignedDateASC) {
      setSortField("assignedDate");
      setSortType("ASC");
      setIsAssignedDateASC(!isAssignedDateASC);
    } else {
      setSortField("assignedDate");
      setSortType("ASC");
      setIsAssignedDateASC(!isAssignedDateASC);
    }
  };
  const handleSortByState = () => {
 if (isStateASC) {
      setSortField("state");
      setSortType("ASC");
      setIsStateASC(!isStateASC);
    } else {
      setSortField("state");
      setSortType("ASC");
      setIsStateASC(!isStateASC);
    }
  };

  const handleSeachKeyWord = () => {
    const url = `assignment/filter-search-sort?page=${currentPage}&size=${size}`;
    const data = {
      states: stateList, localDateTime: localDateTime === "" ? localDateTime : new Date(localDateTime).toISOString().slice(0, 19), sortField, sortType, searchKeyWord
    }
    console.log(data);
    post(url, data)
      .then(response => {
        setAssignments(response.data.data);
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    const list = [];
    if (stateAll) {
      list.push(1); list.push(2); list.push(3);
    } else {
      if (stateAccepted) list.push(1);
      if (stateWaiting) list.push(2);
      if (stateDeclined) list.push(3);
    }
    setStateList(list);
  }, [stateAll, stateAccepted, stateDeclined, stateWaiting])

  return (
    <div id="assgignemts">
      <p className="title">Assignment List</p>
      <div id="Search_bar">
        <FormControl>
          <InputLabel id="label-type">State</InputLabel>
          <Select
            labelId="label-type"
            labelId="demo-simple-select-label"
            id="simple-select"
            className="state">
            <MenuItem>
              <input type="checkbox" value="all" checked={stateAll}
                onChange={() => setStateAll(!stateAll)} />
              All
            </MenuItem>
            <MenuItem >
              <input type="checkbox" value="accepted" checked={stateAccepted}
                onChange={() => setStateAccepted(!stateAccepted)} />
              Accepted
            </MenuItem>
            <MenuItem >
              <input type="checkbox" value="wating for acceptance" checked={stateWaiting}
                onChange={() => setStateWaiting(!stateWaiting)} />
              Waiting for acceptance
            </MenuItem>
            <MenuItem >
              <input type="checkbox" value="declined" checked={stateDeclined}
                onChange={() => setStateDeclined(!stateDeclined)} />
              Declined
            </MenuItem>
          </Select>
        </FormControl>
        <input type="date" className="date" value={localDateTime} onChange={e => setLocalDateTime(e.target.value)} />
        <div id="right_search_bar">
          <input
            type="text"
            placeholder="search"
            value={searchKeyWord}
            onChange={e => setSearchKeyWord(e.target.value)} />
          <button id="searchbtn">
            <img id="btn-search" src={searchIcon} onClick={handleSeachKeyWord} />
          </button>
          <button id="create_button" onClick={handleClickCreateNew}>
            Create new Assignment
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={handleSortByNo} >
              No.
              {isNoASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByAssetCode}>
              Asset Code
              {isAssetCodeASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByAssetName} >
              Asset Name
              {isAssetNameASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByAssignedto}>
              Assigned to
              {isAssignedtoASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByAssignedby}>
              Assigned by
              {isAssignedbyASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByAssignedDate}>
              Assigned Date
              {isAssignedDateASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByState}>
              State
              {isStateASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => {
            return <Assign assignment={assignment} />;
          })}
        </tbody>
      </table>
      <Paginations
        setCurrentPage={(current) => setCurrentPage(current)}
        className="pagination"
      />
    </div>
  )
};

export default Assignment;