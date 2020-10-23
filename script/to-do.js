var listInterface= document.createElement("div")

var headRow= document.createElement("tr");//this creates the row for the header in the table.
headRow.setAttribute("class","head-row");
var headCol1 = document.createElement("th");
headCol1.innerHTML = "check"
var headCol2 = document.createElement("th");
headCol2.innerHTML ="Your Activity";
var headCol3 = document.createElement("th");
headCol3.innerHTML= "Date";

var headCol4 = document.createElement("th");
headCol4.innerHTML = "Time"
var headCol5 = document.createElement("th");
headCol5.innerHTML = "add";


headRow.appendChild(headCol1);
headRow.appendChild(headCol2);
headRow.appendChild(headCol3);
headRow.appendChild(headCol4);
headRow.appendChild(headCol5);
listInterface.appendChild(headRow);
document.body.appendChild(listInterface);
document.write("<br>");
function ToDo(){
 
  var tableRow= document.createElement("tr");//this creates the row for the header in the table.
  tableRow.setAttribute("class","table-row");
  var tableCol1 = document.createElement("td");
  var checkBox = document.createElement("input");
  checkBox.setAttribute("type","checkbox");
  checkBox.setAttribute("class","check-box");
  tableCol1.appendChild(checkBox);
  //tableCol1.innerHTML = "check"
  var tableCol2 = document.createElement("td");
  var activity= document.createElement("input");
  activity.setAttribute("type","text");
  activity.setAttribute("class","Activity");
  tableCol2.appendChild(activity);
  //tableCol2.innerHTML ="Your Activity";
  var tableCol3 = document.createElement("td");
  var inputDate = document.createElement("input");
  inputDate.setAttribute("type","date");
  inputDate.setAttribute("class","input-date");
  tableCol3.appendChild(inputDate);
  //tableCol3.innerHTML= "Date";
  
  var tableCol4 = document.createElement("td");
  var inputTime = document.createElement("input");
  inputTime.setAttribute("type","time");
  inputTime.setAttribute("class","input-time");
  tableCol4.appendChild(inputTime);
  //tableCol4.innerHTML = "Time"
  var tableCol5 = document.createElement("td");
  var saveList = document.createElement("button");
  saveList.innerHTML = "save";
  saveList.setAttribute("class","save-list");
  tableCol5.appendChild(saveList);
  
  tableRow.appendChild(tableCol1);
  tableRow.appendChild(tableCol2);
  tableRow.appendChild(tableCol3);
  tableRow.appendChild(tableCol4);
  tableRow.appendChild(tableCol5);
  listInterface.appendChild(tableRow);
  document.body.appendChild(listInterface);
}

ToDo();

