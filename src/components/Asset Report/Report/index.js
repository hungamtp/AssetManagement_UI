import React from "react";
import "./rp.css";
export const Report = ({ report }) => {
  return (
    <tr id={report.category} className="report-row">
      <td>{report.category}</td>
      <td>{report.total}</td>
      <td>{report.assigned}</td>
      <td>{report.available}</td>
      <td>{report.notAvailable}</td>
      <td>{report.waitingForRecycle}</td>
      <td>{report.recycled}</td>
    </tr>
  );
};
