const { match } = require('assert');
const fs = require('fs');
const filePath = './inputs/4.txt';

let logging = false;
let debugCount = 0
let noMatchCount = 0

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

  // There's no such thing as "points". Instead, scratchcards only cause you to win more scratchcards equal to the number of winning numbers you have.

  // Specifically, you win copies of the scratchcards below the winning card equal to the number of matches. So, if card 10 were to have 5 matching numbers, you would win one copy each of cards 11, 12, 13, 14, and 15.
  
  
// const sleep = ms => new Promise(r => setTimeout(r, ms));


const mainFunction = (input) => {

  let lines = input.split('\n');
  let runningTotal = 0; //tally of cards
  // let cardsToDraw = [...Array(lines.length).keys()].slice(1)
  // if (logging) {console.log('starting cards:', cardsToDraw)}

  let cardData = {} //store number of cards won by each card

  for (let i in lines) {
    let line = lines[i]
    let lineNumber = line.split(':')[0].split(' ');
    lineNumber = lineNumber[lineNumber.length-1]
    // console.log({lineNumber})git 
    // if (lineNumber =='') {
    //   console.log(line.split(':')[0].split(' '))
    //   console.log({line}, {lineNumber})
    // }

    let winningNumbers = line.split(': ')[1].split(' | ')[0].split(' ').filter((entry) => entry)
    let myNumbers = line.split(': ')[1].split(' | ')[1].split(' ').filter((entry) => entry)

    let matches = winningNumbers.filter(value => myNumbers.includes(value)).length;

    if (!cardData[lineNumber]) {
      cardData[lineNumber] = {}
      cardData[lineNumber]['instances'] = 1
      cardData[lineNumber]['matches'] = 0
    }
    cardData[lineNumber]['matches'] = matches

    if (matches == 0) {
      continue
    }

    for (let x in Array.from(Array(matches).keys())) {
      
      let targetLine = Number(lineNumber) + (Number(x)+Number(1))
      // console.log({lineNumber},{targetLine})
      let multiplier = cardData[lineNumber]['instances']

      if (!cardData[targetLine]) {
        cardData[targetLine] = {'instances': 1}
      }
      
      cardData[targetLine]['instances'] += multiplier

    }


    // console.log({lineNumber}, {matches})
    // console.log({cardData})

    // console.log(lines[i])
  }

  for (let c in cardData) {
    runningTotal += cardData[c]['instances']
    console.log(c, cardData[c])
  }

  //70854 too low
  
  return runningTotal
}