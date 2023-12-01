// --- Part Two ---
// Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

// Equipped with this new information, you now need to find the real first and last digit on each line. For example:

// two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen
// In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

// What is the sum of all of the calibration values?

let sampleInput = `
eighttkbtzjz6nineeight
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

// sampleInput = 'eighttkbtzjz6nineeight'


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


    let numRange = [...Array(10).keys()];
    let numbersToFind = [
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", ...numRange
    ] //per instructions, only 1-9 apply

    
    input.split('\n').forEach( (line) => {
        
        let numbersFound = [];
        let calibrationValue;

        numbersToFind.forEach( (number) => {
            
            if (line.includes(number)) {
                
                let firstIndex = line.indexOf(number);

                // if (typeof(number) == 'string') { //lol
                //     number = numbersToFind.indexOf(number)+1
                // }
                if (isNaN(number)) {
                    numbersFound[line.indexOf(number)] = numbersToFind.indexOf(number)+1
                } else {
                    numbersFound[line.indexOf(number)] = number
                }

                let i = firstIndex;
                let lineSlice = line
                while (i < line.length && lineSlice.includes(number)) {
                    i++
                    lineSlice = line.slice(i,line.length)

                    if (isNaN(number)) { //ugly but, check again by slicing
                        numbersFound[line.indexOf(number,i)] = numbersToFind.indexOf(number)+1
                    } else {
                        numbersFound[line.indexOf(number,i)] = number
                    }

                }

            }
        })
        
        numbersFound = numbersFound.filter(i => i) //remove empties from hacky sort-by-index

        calibrationValue = String(numbersFound[0]) + String(numbersFound[numbersFound.length-1])

        if (!isNaN(calibrationValue)) {runningTotal += Number(calibrationValue)}
        console.log(runningTotal, line, calibrationValue)

    })

    return runningTotal;
}


// DEBUG
// console.log(sumCalibrationValues(sampleInput));