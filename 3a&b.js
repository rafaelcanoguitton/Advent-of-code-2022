var fs = require("fs");

fs.readFile("3_input.txt", "utf8", function (err, data) {
  const alphaBetMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
  };
  let sum = 0;
  data.split("\n").forEach((line) => {
    const letterSet = new Set();
    //iterate the first half
    for (let i = 0; i < line.length / 2; i++) {
      letterSet.add(line[i]);
    }
    //iterate the second half
    for (let i = line.length / 2; i < line.length; i++) {
      if (letterSet.has(line[i])) {
        sum += alphaBetMap[line[i]];
        return;
      }
    }
  });
  console.log(sum);
  let newSum = 0;
  const lines = data.split("\n");
  var i = 0;
  while (i < lines.length) {
    const secondSet = new Set(lines[i + 1].split(""));
    const thirdSet = new Set(lines[i + 2].split(""));
    const intersectionSet = new Set(
      lines[i].split("").filter((x) => secondSet.has(x) && thirdSet.has(x))
    );
    intersectionSet.forEach((letter) => {
      newSum += alphaBetMap[letter];
    });
    i += 3;
  }
  console.log(newSum);
});
