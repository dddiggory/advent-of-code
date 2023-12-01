const fs = require('fs');
const filePath = './inputs/1.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(sumCalibrationValues(data));
  });

const sumCalibrationValues = (input) => {

    let runningTotal = 0
    
    input.split('\n').forEach( (line) => {
        let calibrationValue, digit1, digit2
    
        Array.from(line).forEach( (character) => {
    
            if (character!=" " && !isNaN(Number(character))) {
                if (!digit1) {
                    digit1 = character;
                }
                digit2 = character;
            } 
        })
        calibrationValue = Number(digit1+digit2)
        if (!isNaN(calibrationValue)) {
            runningTotal += calibrationValue
        }
    })

    return runningTotal;

}