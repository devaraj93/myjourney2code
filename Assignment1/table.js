"use strict";

// let duplicatearraydata = [];
let originalData;
var duplicatedata = [];

let tablerowlen = 0;
let tablerowdata = [];

var table = document.querySelector(".pagination");

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

var x = parseInt(document.getElementById("rows").value);

const responseData = async () => {
  try {
    const response = await axios.get(
      "https://api.harvardartmuseums.org/exhibition?apikey=e159fe97-a701-4c2a-816e-76b5945936f3"
    );
    return { response, isAuthError: true };
  } catch (error) {
    return { error, isAuthError: false };
  }
};

const convertResponse = async () => {
  originalData = await responseData();
  const duplicateN = 3;
  var k = 1;
  if (originalData.isAuthError === true) {
    for (let i = 0; i < duplicateN; i++) {
      for (let i = 0; i < originalData.response.data.records.length; i++) {
        duplicatedata.push([k++, originalData.response.data.records[i].title]);
      }
    }
  } else {
    var errormtag = document.createElement("h2");
    errormtag.textContent = originalData.error.message;
    document.body.appendChild(errormtag);
  }
  //return duplicatedata;
};

const createTableRows = async () => {
  // duplicatearraydata =
  await convertResponse();
  for (let i = 0; i < duplicatedata.length; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < duplicatedata[i].length; j++) {
      var tdElement = document.createElement("td");
      tdElement.innerHTML = duplicatedata[i][j];
      tr.appendChild(tdElement);
    }
    tablerowdata.push(tr);
  }
};

async function setDataOnLoad() {
  await createTableRows();
  for (let i = tablerowlen; i < tablerowlen + x; i++) {
    table.appendChild(tablerowdata[i]);
  }
}

setDataOnLoad();

rows.addEventListener("change", () => {
  x = parseInt(document.getElementById("rows").value);
  console.log(typeof x);
});

next.addEventListener("click", () => {
  console.log(tablerowlen == tablerowdata.length - x);
  tablerowlen == tablerowdata.length - x
    ? (tablerowlen = 0)
    : (tablerowlen += x);
  table.innerHTML = "";
  for (let i = tablerowlen; i < tablerowlen + x; i++) {
    console.log(tablerowlen[i], "----");
    if (i > tablerowdata.length) {
      i = 0;
      tablerowlen = 0;
    }
    table.appendChild(tablerowdata[i]);
  }
});

previous.addEventListener("click", () => {
  tablerowlen == 0
    ? (tablerowlen = tablerowdata.length - x)
    : (tablerowlen -= x);
  table.innerHTML = "";
  for (let i = tablerowlen; i < tablerowlen + x; i++) {
    if (i > tablerowdata.length) {
      i = 0;
      tablerowlen = 0;
    }
    table.appendChild(tablerowdata[i]);
  }
});

function searchFilter() {
  var searchvalue, textValue;
  table.innerHTML = "";
  searchvalue = document
    .getElementById("myInput")
    .value.toUpperCase()
    .replace(/ /g, "");
  for (let i = 0; i < tablerowdata.length; i++) {
    textValue = tablerowdata[i]
      .getElementsByTagName("td")[1]
      .textContent.toUpperCase()
      .replace(/ /g, "");
    if (textValue.indexOf(searchvalue) > -1) {
      console.log(textValue);
      console.log(searchvalue);
      table.appendChild(tablerowdata[i]);
      // tr[i].style.display = "";
    } else {
      // tr[i].style.display = "none";
    }
  }
  if (searchvalue == 0) {
    table.innerHTML = "";
    setDataOnLoad();
  }
}
