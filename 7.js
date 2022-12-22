const fs = require("fs");

const file = fs.readFile("./7_input.txt", "utf8", (err, data) => {
  let currentDirectory = [];
  const pathMap = new Map();
  const lines = data.split("\n");
  lines.forEach((line) => {
    //if line starts with $ then it's a command
    if (line.startsWith("$")) {
      if (line.split(" ")[1] === "cd") {
        const directory = line.split(" ")[2];
        if (directory === "..") {
          currentDirectory.pop();
        } else if (directory === "/") {
          currentDirectory = [];
        } else {
          currentDirectory.push(directory);
        }
      }
    } else {
      if (line.startsWith("dir")) {
        if (!pathMap.has(currentDirectory.join("/"))) {
          pathMap.set(currentDirectory.join("/"), [
            currentDirectory.join("/") + "/" + line.split(" ")[1],
          ]);
        } else {
          pathMap
            .get(currentDirectory.join("/"))
            .push(currentDirectory.join("/") + "/" + line.split(" ")[1]);
        }
      } else if (!isNaN(line.split(" ")[0])) {
        if (!pathMap.has(currentDirectory.join("/"))) {
          pathMap.set(currentDirectory.join("/"), [line.split(" ")[0]]);
        } else {
          pathMap.get(currentDirectory.join("/")).push(line.split(" ")[0]);
        }
      }
    }
  });
  pathMap.set(
    "",
    pathMap.get("").map((item) => item.split("/")[1])
  );
  //iterate keys
  let totalSizeOfDirectoriesAtMost100000 = 0;
  const calculateSize = (key) => {
    let size = 0;
    pathMap.get(key).forEach((item) => {
      if (!isNaN(item)) {
        size += parseInt(item);
      } else {
        size += calculateSize(item);
      }
    });
    //set map value of key to its size
    pathMap.set(key, size);
    if (size <= 100000) {
      totalSizeOfDirectoriesAtMost100000 += size;
    }
    return size;
  };
  console.log(calculateSize(""));
  //console.log(pathMap);
  //console.log(totalSizeOfDirectoriesAtMost100000);
  //sort pathmap by size
  // const sortedPathMap = new Map(
  //   [...pathMap.entries()].sort((a, b) => b[1] - a[1])
  // );
  const storageObjective= 30000000-(70000000-pathMap.get(""));
  console.log('objective',storageObjective);
  //iterate map in reverse
  [...pathMap.entries()].sort((a, b) => a[1] - b[1]).forEach((item) => {
    if(item[1]>=storageObjective){
      console.log(item[1]);
      return;
    }
  });
});
