// pair up the numbers and measure how far apart they are. Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.
// Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances. For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4; if you pair up a 9 with a 3, the distance apart is 6.

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

const compute = (input) => {

    let runningTotal = 0

    let rows = input.split('\n')
    let leftNums = []
    let rightNums = []
    let newDistance = 0
    
    for (let i in rows) {
        let nums = rows[i].split('   ')
        leftNums.push(nums[0])
        rightNums.push(nums[1])
    }

    leftNums = leftNums.sort()
    rightNums = rightNums.sort()

    for (let i in leftNums) {
        newDistance = Math.abs(leftNums[i] - rightNums[i])
        runningTotal += newDistance
        console.log(runningTotal)
    }
    return runningTotal;

}