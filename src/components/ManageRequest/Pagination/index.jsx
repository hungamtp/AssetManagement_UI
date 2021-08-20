import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./pagination.css";

const Paginations = ({ totalPages, setCurrentPage }) => {
  return (
    <div className="pagination-request">
      <Pagination
        count={totalPages}
        variant="text"
        shape="rounded"
        color="secondary"
        onChange={(event, value) => setCurrentPage(value - 1)}
      />
    </div>
  );
};

export default Paginations;
