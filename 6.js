const fs = require("fs");

fs.readFile("6_input.txt", "utf8", (err, data) => {
  const fourLetters = [];

  //iterate by character
  for (let i = 0; i < data.length; i++) {
    if (fourLetters.length < 4) {
      fourLetters.push(data[i]);
    } else {
      //check if the four letters are different
      if (
        fourLetters[0] !== fourLetters[1] &&
        fourLetters[0] !== fourLetters[2] &&
        fourLetters[0] !== fourLetters[3] &&
        fourLetters[1] !== fourLetters[2] &&
        fourLetters[1] !== fourLetters[3] &&
        fourLetters[2] !== fourLetters[3]
      ) {
        console.log(i, fourLetters);
        return;
      }
      fourLetters.shift();
      fourLetters.push(data[i]);
    }
  }
});

fs.readFile("6_input.txt", "utf8", (err, data) => {
    const letters = [];
    let letterSet = new Set();
    for (let i = 0; i < data.length; i++) {
      if (letters.length < 14) {
        letters.push(data[i]);
        letterSet.add(data[i]);
      } else{
        if (letterSet.size === 14) {
          console.log(i, letters);
          return;
        }
        letters.shift();
        letterSet = new Set(letters);
        letters.push(data[i]);
        letterSet.add(data[i]);
      }
    }
});