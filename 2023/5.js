const fs = require('fs');
const filePath = './inputs/5.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });

const mainFunction = (input) => {
    let maps = input.split('\n\n')

    for (let m in maps) { // for each map

    }
    console.log(maps[0])

    return
}