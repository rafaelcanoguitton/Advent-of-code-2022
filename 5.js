const fs = require("fs");

// Part 1
fs.readFile("5_input.txt", "utf8", function (err, data) {
  const firstStack = [];
  const secondStack = [];
  const thirdStack = [];
  const fourthStack = [];
  const fifthStack = [];
  const sixthStack = [];
  const seventhStack = [];
  const eighthStack = [];
  const ninthStack = [];
  let stackData = data.split(/\r?\n\r?\n/)[0].split("\n");
  stackData = stackData.splice(0, stackData.length - 1);
  stackData = stackData.map((item) => {
    const items = [];
    var newItem = "";
    for (let i = 0; i <= item.length; i++) {
      if (i % 4 === 3) {
        items.push(newItem);
        newItem = "";
      } else {
        newItem += item[i];
      }
    }
    return items;
  });
  stackData.forEach((item) => {
    if (item[0] !== "   ") firstStack.push(item[0][1]);
    if (item[1] !== "   ") secondStack.push(item[1][1]);
    if (item[2] !== "   ") thirdStack.push(item[2][1]);
    if (item[3] !== "   ") fourthStack.push(item[3][1]);
    if (item[4] !== "   ") fifthStack.push(item[4][1]);
    if (item[5] !== "   ") sixthStack.push(item[5][1]);
    if (item[6] !== "   ") seventhStack.push(item[6][1]);
    if (item[7] !== "   ") eighthStack.push(item[7][1]);
    if (item[8] !== "   ") ninthStack.push(item[8][1]);
  });
  const movements = data.split(/\r?\n\r?\n/)[1].split("\n");
  const stacks = [
    firstStack,
    secondStack,
    thirdStack,
    fourthStack,
    fifthStack,
    sixthStack,
    seventhStack,
    eighthStack,
    ninthStack,
  ];
  movements.forEach((item) => {
    const movement = item.split(" ");
    const amount = parseInt(movement[1]);
    const stack = parseInt(movement[3]);
    const direction = parseInt(movement[5]);
    for (let i = 0; i < amount; i++) {
      stacks[direction - 1].unshift(stacks[stack - 1].shift());
    }
  });
  const topCrates = stacks.map((item) => item[0]);
  console.log(topCrates.join(""));
});

// Part 2
fs.readFile("5_input.txt", "utf8", function (err, data) {
  const firstStack = [];
  const secondStack = [];
  const thirdStack = [];
  const fourthStack = [];
  const fifthStack = [];
  const sixthStack = [];
  const seventhStack = [];
  const eighthStack = [];
  const ninthStack = [];
  let stackData = data.split(/\r?\n\r?\n/)[0].split("\n");
  stackData = stackData.splice(0, stackData.length - 1);
  stackData = stackData.map((item) => {
    const items = [];
    var newItem = "";
    for (let i = 0; i <= item.length; i++) {
      if (i % 4 === 3) {
        items.push(newItem);
        newItem = "";
      } else {
        newItem += item[i];
      }
    }
    return items;
  });
  stackData.forEach((item) => {
    if (item[0] !== "   ") firstStack.push(item[0][1]);
    if (item[1] !== "   ") secondStack.push(item[1][1]);
    if (item[2] !== "   ") thirdStack.push(item[2][1]);
    if (item[3] !== "   ") fourthStack.push(item[3][1]);
    if (item[4] !== "   ") fifthStack.push(item[4][1]);
    if (item[5] !== "   ") sixthStack.push(item[5][1]);
    if (item[6] !== "   ") seventhStack.push(item[6][1]);
    if (item[7] !== "   ") eighthStack.push(item[7][1]);
    if (item[8] !== "   ") ninthStack.push(item[8][1]);
  });
  const movements = data.split(/\r?\n\r?\n/)[1].split("\n");
  const stacks = [
    firstStack,
    secondStack,
    thirdStack,
    fourthStack,
    fifthStack,
    sixthStack,
    seventhStack,
    eighthStack,
    ninthStack,
  ];
  movements.forEach((item) => {
    const movement = item.split(" ");
    const amount = parseInt(movement[1]);
    const stack = parseInt(movement[3]);
    const direction = parseInt(movement[5]);
    const cratesToMove = stacks[stack - 1].slice(0, amount);
    stacks[stack - 1] = stacks[stack - 1].slice(amount);
    stacks[direction - 1] = cratesToMove.concat(stacks[direction - 1]);
  });
  const topCrates = stacks.map((item) => item[0]);
  console.log(topCrates.join(""));
});
