import React from "react";

const DropDownFilter = ({ dd_list }) => {
  let ddownList = dd_list.map((list) => {
    return (
      <option key={`k-${list.value}`} value={list.value.toString()}>
        {list.value}
      </option>
    );
  });

  return (
    <select
      className="ui dropdown"
      onChange={(event) => console.log("Value Click", event.target.value)}
    >
      {ddownList}
    </select>
  );
};

export default DropDownFilter;
