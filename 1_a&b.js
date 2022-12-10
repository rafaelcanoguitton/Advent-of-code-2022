var fs = require("fs");

fs.readFile("1_input.txt", "utf8", function (err, data) {
  if (err) throw err;
  //split by empty line
  var chunks = data.split(/\r?\n\r?\n/);
  const caloriesArray = chunks.map((chunk) => {
    return chunk.split("\n").reduce((acc, line) => {
      return acc + parseInt(line);
    }, 0);
  });
  //here we could use an insertion sort data structure but i only know the
  // c++ stl so i'll just use a simple sort
  caloriesArray.sort((a, b) => b - a);
  console.log(caloriesArray[0]); // asnswer 1
  console.log(caloriesArray[0] + caloriesArray[1] + caloriesArray[2]); // asnswer 2
});
