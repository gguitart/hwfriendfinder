// require("./routes/htmlRoutes")(app);

// app.get("/survey", function(req,res){
// console.log("survey hit")
// });

var path = require("path");

module.exports = function (app) {
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


};


