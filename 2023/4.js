const fs = require('fs');
const filePath = './inputs/4.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });


  // Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
  // Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
  // Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
  // Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
  // Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
  // Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11

  // As far as the Elf has been able to figure out, you have to figure out which of the numbers you have appear in the list of winning numbers. The first match makes the card worth one point and each match after the first doubles the point value of that card.

const mainFunction = (input) => {
  let lines = input.split('\n');
  let runningTotal = 0; //tally of points

  for (let i in lines) {
    let line = lines[i]
    let winningNumbers, myNumbers;
    let pointsFromLine = 0;
    let matches = 0;

    winningNumbers = line.split(': ')[1].split(' | ')[0].split(' ').filter((entry) => entry)
    
    myNumbers = line.split(': ')[1].split(' | ')[1].split(' ').filter((entry) => entry)

    for (let n in winningNumbers) {
      if (myNumbers.includes(winningNumbers[n])) {
        matches += 1
        console.log(i, 'MATCH', winningNumbers[n], matches, 'matches')
        

      }
    }

    if (matches>0) {
      console.log('math', (2**(matches-1)))
      pointsFromLine = 2**(matches-1)
    }
    runningTotal += pointsFromLine

  }
  
  return runningTotal
}