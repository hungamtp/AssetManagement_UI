import React from "react";
import "./user.css";
const index = ({ user }) => {
  return (
    <tr>
      <td>{user.staffCode}</td>
      <td>{user.fullName}</td>
      <td>{user.username}</td>
      <td>{user.joinedDate}</td>
      <td>{user.type.replace("ROLE_", "")}</td>
    </tr>
  );
};

export default index;
