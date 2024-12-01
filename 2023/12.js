const fs = require('fs');
const filePath = './inputs/12-sample.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });

const mainFunction = (input) => {
    let data = input.split('\n')
    let runningTotalOfWays = 0

    for (let i in data) {
        let waysToArrange = 0;

        let row = data[i].split(' ')
        let rowMap = row[0].split('').filter( (value) => value)
        let brokenCoords = row[1]
        console.log(row)

        //if no uncertainty
        
    }
    
    return
}