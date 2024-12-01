const fs = require('fs');
// const filePath = './inputs/01-sample.txt';
const filePath = './inputs/01.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(compute(data));
  });

// This time, you'll need to figure out exactly how often each number from the left list appears in the right list. Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.

const compute = (input) => {

    let runningTotal = 0
    let repeatCounter = {}

    let rows = input.split('\n')
    let leftNums = []
    let rightNums = []
    let numberToAdd = 0

    
    for (let i in rows) {
        let nums = rows[i].split('   ')
        leftNums.push(nums[0])
        rightNums.push(nums[1])
    }

    for (let i in rightNums) {
      let rightNum = rightNums[i]
      if (!(rightNum in repeatCounter)) {
        repeatCounter[rightNum] = 0
      }
      repeatCounter[rightNum] += 1
    }

    for (let i in leftNums) {
      let leftNum = leftNums[i]
      if (leftNum in repeatCounter) {
        runningTotal += (repeatCounter[leftNum]) * leftNum
      }

    }


    // console.log({repeatCounter})

    
    return runningTotal;

}