import React from "react";
import TableRows from "./TableRows";
import SearchBar from "./SearchBar";
import DropDownFilter from "./DropDownFilter";
import Pagination from "./Pagination";

class App extends React.Component {
  render() {
    const dropdown_list = [
      { value: 5 },
      { value: 10 },
      { value: 15 },
      { value: 20 },
    ];
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar />
        <DropDownFilter dd_list={dropdown_list} />
        <Pagination />
        <TableRows />
      </div>
    );
  }
}

export default App;
