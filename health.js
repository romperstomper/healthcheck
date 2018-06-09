// JavaScript

var xhr = new XMLHttpRequest();
xhr.open('GET', "health.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() { 
  if (xhr.status === 200) {
    var myStuff = JSON.parse(xhr.responseText);
    var count = Object.keys(myStuff).length;
    //console.log("count is " + count);
  }
  //document.getElementById('message1').innerHTML = myStuff.status1;
  //document.getElementById('message2').innerHTML = myStuff.status2;

  str = "";
  str += "result: status1 " + myStuff.status2;
  //document.getElementById('message3').innerHTML = str;

  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.innerHTML = "Health Status";
  tr.appendChild(th);

  for (var key in myStuff) {
    var row = document.createElement('tr');
    if (myStuff.hasOwnProperty(key)) {
      //        console.log(key + " " + myStuff[key])
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(key + " "));
      cell.style.border="1px solid black";
      row.appendChild(cell);
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(myStuff[key]));
      cell.style.border="1px solid black";
      row.appendChild(cell);
      }

    tableBody.appendChild(row);
  };

  table.appendChild(tableBody);
  document.body.appendChild(table);
  document.getElementById("table").style.borderCollapse = "collapse";

}
