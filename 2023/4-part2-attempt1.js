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
  
  
const sleep = ms => new Promise(r => setTimeout(r, ms));


const mainFunction = async(input) => {
  let linesWithoutMatches = new Set()

  let lines = input.split('\n');
  let runningTotal = lines.length; //tally of cards
  let cardsToDraw = [...Array(lines.length).keys()].slice(1)
  // if (logging) {console.log('starting cards:', cardsToDraw)}
  let cardsDone = false



  while (cardsToDraw.length && !cardsDone) {

    

    if (logging) {console.log({runningTotal})}

    for (let i in cardsToDraw) {

      debugCount += 1
      // if (debugCount >= 3) {process.exit()}
      i=0

      if (logging) {console.log('\nDRAWING CARD', cardsToDraw[i])}

      if (cardsToDraw[i] > lines.length) {
        cardsDone = true
        continue
      }
      let currentCardNumber = cardsToDraw.shift()
      if (logging) {console.log('\nprocessing',{currentCardNumber})}
      if (logging) {await new Promise(r => setTimeout(r, 200));}
      
      let line = lines[currentCardNumber-1]
      let winningNumbers, myNumbers;
      let matches = 0;

      if (!line) {
        continue
      }
  
      winningNumbers = line.split(': ')[1].split(' | ')[0].split(' ').filter((entry) => entry)
      myNumbers = line.split(': ')[1].split(' | ')[1].split(' ').filter((entry) => entry)

      for (let n in winningNumbers) {
        if (myNumbers.includes(winningNumbers[n])) {
          matches += 1
        }
      }

      if (logging) {console.log(matches, 'MATCHES')}
      if (matches == 0) {noMatchCount+=1; linesWithoutMatches.add(currentCardNumber)}
      for (let x in Array.from(Array(matches).keys())) {


        if (x > lines.length) {
          console.log('DONE @', x)
          return runningTotal
        }

        if (logging) {console.log('AWARDING CARD', Number(currentCardNumber)+Number(x)+1)}
        runningTotal+=1
        if (runningTotal>100000 && !(runningTotal%100000)) {
          console.log({runningTotal}, {currentCardNumber}, {noMatchCount}, cardsToDraw.length, 'cards to draw')
          console.log({linesWithoutMatches})
        }
        if (logging) {console.log('cards left:', cardsToDraw.length)}
        if (logging) {console.log({runningTotal})}
        cardsToDraw.push(Number(currentCardNumber) + Number(x) + 1)
      }
      // if (logging) {console.log('CARDS TO DRAW:', cardsToDraw)}

    }

  }
  
  return runningTotal
}