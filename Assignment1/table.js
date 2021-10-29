//Using iffe function
let arraydata;
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

const createTable = async () => {
  arraydata = await responseData();
  if (arraydata.isAuthError === true) {
    var dataArray = [];
    var table = document.createElement("table");
    document.body.appendChild(table);
    console.log(arraydata.response.data.records);
    for (
      let i = 0;
      i < Object.keys(arraydata.response.data.records).length;
      i++
    ) {
      dataArray.push([
        arraydata.response.data.records[i].id,
        arraydata.response.data.records[i].title,
      ]);
      var tr = document.createElement("tr");
      var tr1 = document.createElement("tr");
      var tr2 = document.createElement("tr");
      table.appendChild(tr);
      table.appendChild(tr1);
      table.appendChild(tr2);
      for (var j = 0; j < dataArray[i].length; j++) {
        var tdElement = document.createElement("td");
        var tdElement1 = document.createElement("td");
        var tdElement2 = document.createElement("td");
        tdElement.innerHTML = dataArray[i][j];
        tdElement1.innerHTML = dataArray[i][j];
        tdElement2.innerHTML = dataArray[i][j];
        tr.appendChild(tdElement);
        tr1.appendChild(tdElement1);
        tr2.appendChild(tdElement2);
      }
    }
  } else {
    var errormtag = document.createElement("h2");
    errormtag.textContent = arraydata.error.message;
    document.body.appendChild(errormtag);
  }
};

createTable();

function createRow() {
  let tr = document.createElement("tr");
  return tr;
}

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
      console.log(textValue.includes(""));
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
