var LabsApi = function(app) {

  var labsApiData = [ "mince", "steak", "macaroni", "chicken & leek" ];

  app.get('/pies', function(req, res) {
    res.json({ text: " here are the Pies!" });
  });

  // app.get("/", function(req,res){
  //   res.sendFile(path.join(__dirname + "/client/build/index.html"));
  // });

}

module.exports = LabsApi;