import React from "react";
import axios from "axios";
import TableRows from "./TableRows";
import SearchBar from "./SearchBar";
import DropDownFilter from "./DropDownFilter";

let api_response = [];
const duplicateN = 3;
let id = 1;

class App extends React.Component {
  state = { apiResponse: [] };
  getTableData = async () => {
    const response = await axios.get(
      "https://api.harvardartmuseums.org/exhibition?apikey=e159fe97-a701-4c2a-816e-76b5945936f3"
    );
    console.log(response.data.records, "------------- app.js");

    this.setState({
      apiResponse: this.duplicatethedata(response.data.records),
    });
  };

  duplicatethedata = function (resOut) {
    for (let i = 0; i < duplicateN; i++) {
      for (let i = 0; i < resOut.length; i++) {
        api_response.push([id++, resOut[i].title]);
      }
    }
  };
  componentDidMount() {
    this.getTableData();
  }

  render() {
    const dropdown_list = [
      { value: 5 },
      { value: 10 },
      { value: 15 },
      { value: 20 },
    ];
    return (
      <div>
        <DropDownFilter dd_list={dropdown_list} />
        <SearchBar />
        <TableRows tableData={api_response} />
      </div>
    );
  }
}

export default App;
