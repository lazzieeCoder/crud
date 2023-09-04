//!initial values
var selectedRow = null;

//!form submit logic
function onFormSubmit() {
//   e.preventDefault();
  var formData = readFormData();
  insertNewRecord(formData)
  //console.log(formData)
//   if(selectedRow == null){
        
//   }
}

//!get method(Retriving the data)
function readFormData() {
  var formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

//!insert the data (Post method)
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = "<button>Edit</button><button>Delete</button>";
}

//!edit and update the data (Update method)

//!deleting the data (delete method)

//!reseting the values in form
