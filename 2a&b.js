var fs = require("fs");

fs.readFile("2_input.txt", "utf8", function (err, data) {
  // 0 if you lost, 3 if the round was a draw, and 6 if you won
  const playMap = {
    AX: 3,
    BX: 0,
    CX: 6,
    AY: 6,
    BY: 3,
    CY: 0,
    AZ: 0,
    BZ: 6,
    CZ: 3,
    X: 1,
    Y: 2,
    Z: 3,
  };
  const newPlayMap = {
    AX: 3,
    BX: 1,
    CX: 2,
    AY: 4,
    BY: 5,
    CY: 6,
    AZ: 8,
    BZ: 9,
    CZ: 7,
  };
  var score = 0;
  var plays = data.split("\n");
  plays.forEach((play) => {
    const parsedPlay = play.split(" ").reduce((a, b) => a + b);
    score += playMap[parsedPlay] + playMap[parsedPlay[1]];
  });
  console.log(score);
  var newScore = 0;
  plays.forEach((play) => {
    const parsedPlay = play.split(" ").reduce((a, b) => a + b);
    newScore += newPlayMap[parsedPlay];
  });
  console.log(newScore);
});
