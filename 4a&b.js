const fs = require("fs");

//part 1
fs.readFile("4_input.txt", "utf8", function (err, data) {
  const lines = data.split("\n");
  let pairs = 0;
  for (let i = 0; i < lines.length; i++) {
    const pair = lines[i].split(",");
    const firstRange = pair[0].split("-").map((x) => parseInt(x));
    const secondRange = pair[1].split("-").map((x) => parseInt(x));
    if (
      (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]) ||
      (firstRange[0] >= secondRange[0] && firstRange[1] <= secondRange[1])
    ) {
      pairs++;
    }
  }
  console.log(pairs);
});
//part 2
fs.readFile("4_input.txt", "utf8", function (err, data) {
  const lines = data.split("\n");
  let pairs = 0;
  for (let i = 0; i < lines.length; i++) {
    const pair = lines[i].split(",");
    const firstRange = pair[0].split("-").map((x) => parseInt(x));
    const secondRange = pair[1].split("-").map((x) => parseInt(x));
    if (
        (firstRange[1] >= secondRange[0]&& firstRange[1]<=secondRange[1]) ||
        (secondRange[1] >= firstRange[0]&& secondRange[1]<=firstRange[1])
    ) {
      pairs++;
    }
  }
  console.log(pairs);
});
