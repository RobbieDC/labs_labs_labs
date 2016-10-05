

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  console.log(jsonString)
  var pies = JSON.parse(jsonString);
  console.log("hello");
  var pie = pies[0];
  console.log(pies);
}

var app = function() {
  console.log("the begining has ended!")
  var url = "http://localhost:3000/api/pies"
  makeRequest(url, requestComplete);
};

window.onload = app;
