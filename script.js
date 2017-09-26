//EXAMPLE WHEN DONE LOCALLY WITH NO JSON or AJAX
/*
//GLOBAL VARIABLES
//simplified example of what JSON looks like:
var myObj = {
  "students": [
  {"firstname":"Paul",  "course": "Discovery"},
  {"firstname":"Mark",  "course": "Voyager"},
  {"firstname":"Egypt",  "course": "TOS"},
  {"firstname":"Mike",  "course": "TNG"}
  ]
};


//DOM DOCUMENT SELECTORS
var output = document.getElementById("output");


//EVENT LISTENERS
document.getElementById("btn1").onclick = function() {
  for (i=0; i < myObj.students.length; i++){
    output.innerHTML += myObj.students[i].firstname + " " + myObj.students[i].course + "<br>";
    console.log(i);
 }
};
*/



//EXAMPLE WITH JSON AND AJAX:

//GLOBAL VARIABLES - none

//var myObj is replaced by puting the same info at myJSON.com and getting a link:
//https://api.myjson.com/bins/k8o2h


//DOM DOCUMENT SELECTORS
var output = document.getElementById("output");


//EVENT LISTENERS
document.getElementById("btn1").onclick = function() {

  var xml = new XMLHttpRequest();
  //console.log(xml);  to show option of onreadystatechange

  //NOTE THESE TWO LINES ARE CRUCIAL or nothing will happen!
  xml.open("GET","https://api.myjson.com/bins/k8o2h", true);
  xml.send();


  //a function will run whenever this is triggered
  xml.onreadystatechange = function() {
    //readyState: 4 means we've made our connection
    if (this.readyState == 4) {
      //var myObj = this.responseText;
      //responseText is found in the xml that you can see in the console
      //console.log(myObj);

      var myObj = JSON.parse(this.responseText);
      //JSON.parse is a built in JavaScript method that does all the magic here:
      //it makes the return be only the content you want and not all the extra stuff

      console.log(myObj);

      //for (i=0; i < myObj.length; i++) {
      //a better loop here is a   for-in loop
      for (i in myObj) {
        //NOTE we removed "students" compared to the local var
        output.innerHTML += myObj[i].firstname + " " + myObj[i].course + "<br>";
        console.log(i);
      }
    }
    //console.log(xml);
    //console.log(myObj);
    //this gives us the same information we stored in that JSON site
    //that we have previously stored in a local variable

  };
  /*  ???
  //?can also send something to, perhaps not a website, but a document:?
  xml.open("POST", "ajax.php", true);
  //the line below is needed if you are going to use "POST"
  xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xml.send("name = Link");
  //this would send a variable "name = Link" into the document "ajax.php"?
  */
};
