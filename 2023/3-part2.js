const fs = require('fs');
const filePath = './inputs/3-sample.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(mainFunction(data));

  });


  const mainFunction = (input) => {

    let lines = input.split('\n')
    let runningTotal = 0; //sum of all part numbers

    for (let i in lines) {

        let currentLine = lines[i]

        if (!currentLine.includes('*')) {
            continue
        }

        for (let c in currentLine) {
            
            if (currentLine[c] == '*') {

                let adjacentParts = []
                let gearIndex = c

                let prevLine = lines[i-1]
                
                if (prevLine) {

                    let numberInProgress = ''

                    for (let x in prevLine) {
                        let char = prevLine[x]

                        if (!isNaN(char)) {
                            numberInProgress += char 
                        } else if (x==prevLine.length || (isNaN(char) && numberInProgress)) {
                            adjacentParts.push({
                                value: Number(numberInProgress),
                                endPos: x-1,
                                startPos: x-1-(String(numberInProgress).length)
                            })
                            console.log(adjacentParts[2])
                        }


                        
                    }

                }
                // console.log(prevLine)


            }

        }

    }


  }