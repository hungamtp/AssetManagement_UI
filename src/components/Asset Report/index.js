import React, { useState, useEffect } from "react";
import "./report.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { get } from "../../httpHelper";
import { Report } from "./Report";
const Reports = () => {
  const [reports, setReports] = useState([]);
  const [isCategoryASC, setIsCategoryASC] = useState(true);
  const [isTotalASC, setIsTotalASC] = useState(true);
  const [isAssignedASC, setIsAssignedASC] = useState(true);
  const [isAvailableASC, setIsAvailableASC] = useState(true);
  const [isNotAvailableASC, setIsNotAvailableASC] = useState(true);
  const [isWaitingASC, setIsWaitingASC] = useState(true);
  const [isRecycledASC, setIsRecycledASC] = useState(true);

  const handleSortByCategory = () => {
    setIsCategoryASC(!isCategoryASC);
  };
  const handleSortByTotal = () => {
    setIsTotalASC(!isTotalASC);
  };
  const handleSortByAssigned = () => {
    setIsAssignedASC(!isAssignedASC);
  };
  const handleSortByAvailable = () => {
    setIsAvailableASC(!isAvailableASC);
  };
  const handleSortNotAvailable = () => {
    setIsNotAvailableASC(!isNotAvailableASC);
  };
  const handleSortByWaiting = () => {
    setIsWaitingASC(!isWaitingASC);
  };
  const handleSortByRecycled = () => {
    setIsRecycledASC(!isRecycledASC);
  };
  useEffect(() => {
    const fetchReport = async () => {
      const url = "asset/report";
      const response = await get(url);
      setReports(response.data.data);
    };
    fetchReport();
  }, []);
  return (
    <div id="report">
      <table>
        <thead>
          <tr>
            <th onClick={handleSortByCategory}>
              Category
              {isCategoryASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByTotal}>
              Total
              {isTotalASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByAssigned}>
              Assigned
              {isAssignedASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByAvailable}>
              Available
              {isAvailableASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortNotAvailable}>
              Not Available
              {isNotAvailableASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByWaiting}>
              Waiting for recyling
              {isWaitingASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
            <th onClick={handleSortByRecycled}>
              Recyled
              {isRecycledASC ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => {
            return <Report report={report} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Reports;
