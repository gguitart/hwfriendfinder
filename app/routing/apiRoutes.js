
var userInfo = require("../data/friends");


module.exports = function (server) {
    server.post("/api/friends", function (req, res) {
        var allScores = [];

        function scoreIndividuals(listNames) {
            for (i = 0; i < listNames.length; i++) {
                allScores.push(listNames[i].scores)

            }
            console.log(allScores)
        };
        scoreIndividuals(userInfo);

        var bestFriend = { name: "", photo: "", score: 41 };

        function reduceFunction(allScores) {
            for (i = 0; i < allScores.length; i++) {
                var matchScore = 0
                for (j = 0; j < allScores[i].length; j++) {
                    matchScore += Math.abs(req.body.scores[j] - allScores[i][j])
                };
                if (matchScore<bestFriend.score) {
                    bestFriend.name = userInfo[i].name;
                    bestFriend.photo = userInfo[i].photo;
                    bestFriend.score = matchScore
                } 
            }
        }
        reduceFunction(allScores);
        userInfo.push(req.body);
        console.log("yes post is working");
        res.json(bestFriend);

    });

    server.get("/api/userdata", function (req, res) {
        res.json(userInfo)
    })

};

