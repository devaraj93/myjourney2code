"use strict";

let duplicatearraydata;
let originalData;

const responseData = async () => {
  try {
    const response = await axios.get(
      "https://api.harvardartmuseums.org/exhibition?apikey=e159fe97-a701-4c2a-816e-76b5945936f3"
    );
    return { response, isAuthError: true };
  } catch (error) {
    console.log(error.message);
    return { error, isAuthError: false };
  }
};

const getTableData = async () => {
  originalData = await responseData();
  const duplicateN = 3;
  var duplicatedata = [];
  if (originalData.isAuthError === true) {
    for (let i = 0; i < duplicateN; i++) {
      for (
        let i = 0;
        i < Object.keys(originalData.response.data.records).length;
        i++
      ) {
        duplicatedata.push([
          originalData.response.data.records[i].id,
          originalData.response.data.records[i].title,
        ]);
      }
    }
  } else {
    var errormtag = document.createElement("h2");
    errormtag.textContent = originalData.error.message;
    document.body.appendChild(errormtag);
  }
  console.log(duplicatedata);
  return duplicatedata;
};

const createTable = async () => {
  duplicatearraydata = await getTableData();

  console.log(duplicatearraydata[0], "----+++++++");
  var table = document.createElement("table");
  document.body.appendChild(table);

  for (let i = 0; i < duplicatearraydata.length; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for (var j = 0; j < duplicatearraydata[i].length; j++) {
      var tdElement = document.createElement("td");
      tdElement.innerHTML = duplicatearraydata[i][j];
      tr.appendChild(tdElement);
    }
  }
};

createTable();

function searchFilter() {
  var tr, td, searchvalue, textValue;
  searchvalue = document
    .getElementById("myInput")
    .value.toUpperCase()
    .replace(/ /g, "");
  tr = document.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    textValue = tr[i]
      .getElementsByTagName("td")[1]
      .textContent.toUpperCase()
      .replace(/ /g, "");
    if (textValue.indexOf(searchvalue) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
