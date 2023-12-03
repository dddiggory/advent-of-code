const fs = require('fs');
const filePath = './inputs/3.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(mainFunction(data));

  });

  // any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)
// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..


const mainFunction = (input) => {
  let debugCheckForRepeats = []

  let lines = input.split('\n')
  let runningTotal = 0; //sum of all part numbers

  let prevLine, currentLine, nextLine
  
  for (let i in lines) {

    currentLine = lines[i]
    lineNum = Number(i)
    nextLineNum = lineNum+1
    nextLine = lines[nextLineNum]
    console.log('\n')

    //any symbols on current line?
    // let rowHasSymbol = currentLine.match(/[^0-9.]/g);
    
    let rowItems = currentLine.split('.')
    for (let n in rowItems) {

      let item = rowItems[n]
    

      //if numeric AND contains symbol, just add it & move on
      if (item.match(/^(?=.*\d)(?=.*[^0-9]).+$/g)) {
        // console.log(runningTotal+Number(item.match(/[0-9]/g).join('')), '=', item, '+', runningTotal)
    
        //handle two numbers separated by 1 symbol
        if (item.match(/\d+\D+\d+/)) {
          let digitsOnly = item.split(item.match(/\D-*/))
          
          console.log(runningTotal)

          for (let d in digitsOnly) {
            runningTotal += Number(digitsOnly[d])
          }

          console.log('SPECIAL', digitsOnly)
          console.log(runningTotal)
          continue
        }

        // console.log(i, "ADDING", item, Number(item.match(/[0-9]/g).join('')))
        console.log(runningTotal, item)
        runningTotal += Number(item.match(/[0-9]/g).join(''))
        console.log(runningTotal)
      } else if (item.match(/[0-9]/)) { 
        //else if still a number
        
        //establish index ranges
        let startingIndex = currentLine.indexOf(item)
        if (startingIndex != 0) {startingIndex -= 1}
        console.log('startingindex', startingIndex)
        let endingIndex = startingIndex + item.length
        if (endingIndex < currentLine.length) {endingIndex += 2}
        if (startingIndex == 0) {endingIndex -= 1}
        let upperAdjacentChars, lowerAdjacentChars
        
        //check prev row all adjacent indexes
        if (prevLine) {
          upperAdjacentChars = prevLine.slice(startingIndex, endingIndex)

          if (upperAdjacentChars.match(/[^0-9.]+/)) {
            console.log(Number(i)+1, 'ADDING', item)
            // console.log(runningTotal+Number(item), '=', item, '+', runningTotal)
            console.log("prevline:", upperAdjacentChars)
            runningTotal += Number(item)
            continue //move on
          }
        }

        //check next row all adjacent indexes
        if (nextLine) {
          lowerAdjacentChars = nextLine.slice(startingIndex, endingIndex)
          if (lowerAdjacentChars.match(/[^0-9.]+/)) {
            console.log(Number(i)+1, 'ADDING', item)
            // console.log(runningTotal+Number(item), '=', item, '+', runningTotal)
            console.log("nextline:", lowerAdjacentChars)
            runningTotal += Number(item)
            continue
          }
        }
        
        console.log(Number(i)+1, "NOT ADDING", item, upperAdjacentChars, lowerAdjacentChars)

      }

      
    }

    // let numbers = currentLine.match(/[0-9]/)


    if (i>0) { //except for first line
      null
    }

    prevLine = currentLine

  }


  //if symbol is found
  //check for numbers next to it
  //check for numbers on previous row with -1, 0, or 1 x-axis
  //check for numbers on previous row with -1, 0, or 1 x-axis
  
  return runningTotal;
}