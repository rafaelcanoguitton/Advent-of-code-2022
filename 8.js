const fs = require("fs");
// I really don't know exactly why this solution didn't work im siwtching to python
fs.readFile("8_input.txt", "utf8", (err, data) => {
  const columns = data.split("\n");
  // let treeCount = columns[0].length * 2 - 4;
  let treeCount = 0;
  const mostHeightPerColumn = [];
  const LookinDownTrees = new Map();
  //initialize empty arrays for each column
  columns[0].split("").forEach((_, i) => {
    LookinDownTrees.set(i, []);
  });
  for (let i = 0; i < columns.length; i++) {
    let highestFromTheLeft = -1;
    let highestFromTheRight = -1;
    const countedIndexes = new Set();
    for (let j = 0; j < columns[i].length; j++) {
      //left index checks
      if (columns[i][j] > highestFromTheLeft) {
        highestFromTheLeft = columns[i][j];
        if (!countedIndexes.has(j)) {
          treeCount++;
          countedIndexes.add(j);
        }
      }
      //right index checks
      if (columns[i][columns[i].length - 1 - j] > highestFromTheRight) {
        highestFromTheRight = columns[i][columns[i].length - 1 - j];
        if (!countedIndexes.has(columns[i].length - 1 - j)) {
          treeCount++;
          countedIndexes.add(columns[i].length - 1 - j);
        }
      }
      //up index checks
      if (columns[i][j] > mostHeightPerColumn[j]) {
        mostHeightPerColumn[j] = columns[i][j];
        if (!countedIndexes.has(j)) {
          treeCount++;
          countedIndexes.add(j);
        }
      }
      if (
        columns[i][columns[i].length - 1 - j] >
        mostHeightPerColumn[columns[i].length - 1 - j]
      ) {
        mostHeightPerColumn[columns[i].length - 1 - j] =
          columns[i][columns[i].length - 1 - j];
        if (!countedIndexes.has(columns[i].length - 1 - j)) {
          treeCount++;
          countedIndexes.add(columns[i].length - 1 - j);
        }
      }
      //down index checks
      const indexesToSplice = [];
        LookinDownTrees.get(j).forEach((tree, index) => {
          if (tree < columns[i][j]) {
            indexesToSplice.push(index);
          }
          if (tree < columns[i][columns[i].length - 1 - j]) {
            indexesToSplice.push(index);
          }
        });
        indexesToSplice.forEach((index, idx) => {
          LookinDownTrees.get(j).splice(index - idx, 1);
        });
      //if they haven't been counted yet, them add them
      // to the look down queue
      if (j > columns[i].length - 1 - j) {
        if (!countedIndexes.has(j)) {
          LookinDownTrees.get(j).push(columns[i][j]);
        }
        if (!countedIndexes.has(columns[i].length - 1 - j)) {
          LookinDownTrees.get(columns[i].length - 1 - j).push(
            columns[i][columns[i].length - 1 - j]
          );
        }
      }
    }
  }
  //iterate every array on LookinDownTrees
  LookinDownTrees.forEach((trees, index) => {
    treeCount += trees.length;
  });
  console.log(treeCount);
});

// LookingDownTrees.get(j).forEach((tree, index) => {
//     if (tree < columns[i][j]) {
//       //we can't see this tree
//       LookingDownTrees.set(j, LookingDownTrees.get(j).splice(index, 1));
//     }
//   });

// //check lefty index
// if (columns[i][j] > highestFromTheLeft) {
//   highestFromTheLeft = columns[i][j];
//   if (!countedIndexes.has(j)) {
//     treeCount++;
//     countedIndexes.add(j);
//   }
// }
// //check up for lefty index
// if (columns[i][j] > mostHeightPerColumn[j]) {
//   mostHeightPerColumn[j] = columns[i][j];
//   weCountThisTree = true;
//   indexesToSplice = [];
//   LookinDownTrees.get(j).forEach((tree, index) => {
//     if (tree < columns[i][j]) {
//       indexesToSplice.push(index);
//     }
//   });
//   indexesToSplice.forEach((index, idx) => {
//     LookinDownTrees.get(j).splice(index - idx, 1);
//   });
// }
