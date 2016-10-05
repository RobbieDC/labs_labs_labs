var LabsApi = function(app) {

  var pies = [ "mince", "steak", "macaroni", "chicken & leek" ];

  // app.get('/pies', function(req, res) {
  //   res.json({ text: " here are the Pies!" });
  // });

  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });

  app.get("/api/pies", function(req, res){
    // query.all(function(results))
    res.json({data: pies});
  })

}

module.exports = LabsApi;
