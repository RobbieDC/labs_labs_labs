var express = require("express");
var app = express();
var path = require("path");
var LabsApi = require("./labs_api/labsApi");

// app.get("/", function(req,res){
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

// app.get('/', function(req, res) {
//   res.json({ text: "Pies!" });
// });

app.use(express.static("client/build/"));

app.listen(3000, function(){

  new LabsApi(app);

  console.log("app listening at http:// 3000");
});
