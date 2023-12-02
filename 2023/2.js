const fs = require('fs');
const filePath = './inputs/2.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(cubeCheck(data));
  });

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

// The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?
// What is the sum of the IDs of those games?

const cubeCheck = (input) => {

    let runningTotal = 0;

    let cubeLimits = {
        'red': 12,
        'green': 13,
        'blue': 14,
    }

    input.split('\n').forEach( (line) => {

        // console.log(line);
        // parse line
        // get ID
        let gameId = Number(line.split(":")[0].split(" ")[1])
        let possible = true;

        let draws = line.split(": ")[1].replaceAll(",","").replaceAll(";","").split(" ")

        for (let i in draws) {
            
            if (i%2) { //if color
                let cubeColor = draws[i]
                let cubeCount = draws[i-1]
                if ( cubeCount > cubeLimits[cubeColor] ) {
                    possible = false
                    console.log("NO", cubeCount, cubeColor)
                }

            }
            
        }


        if (possible) {
            runningTotal += gameId
        }
    })
    return runningTotal;
}