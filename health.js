// JavaScript

var xhr = new XMLHttpRequest();
xhr.open('GET', "health.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() { 
  if (xhr.status === 200) {
    var myStuff = JSON.parse(xhr.responseText);
    console.log(myStuff);
  }
  document.getElementById('message1').innerHTML = myStuff.status1;
  document.getElementById('message2').innerHTML = myStuff.status2;

}
