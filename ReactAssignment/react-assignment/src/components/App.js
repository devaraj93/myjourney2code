import React from "react";
import TableRows from "./TableRows";
import SearchBar from "./SearchBar";
import DropDownFilter from "./DropDownFilter";

class App extends React.Component {
  render() {
    const dropdown_list = [
      { value: 5 },
      { value: 10 },
      { value: 15 },
      { value: 20 },
    ];
    return (
      <div className="ui container">
        <DropDownFilter dd_list={dropdown_list} />
        <SearchBar />
        <TableRows />
      </div>
    );
  }
}

export default App;
