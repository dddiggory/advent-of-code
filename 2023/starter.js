const fs = require('fs');
const filePath = './inputs/1.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });

const mainFunction = (input) => {
    return
}