import React from "react";
// import { connect } from "react-redux";

const TableRows = ({ tableData }) => {
  const processedData = tableData.map((data) => {
    return (
      <tr key={`trid${data[0]}`}>
        <td>{data[0]}</td>
        <td>{data[1]}</td>
        <td>
          <i className="trash icon"></i>
        </td>
      </tr>
    );
  });

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Book-Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{processedData}</tbody>
    </table>
  );
};

export default TableRows;
