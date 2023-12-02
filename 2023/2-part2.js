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

// As you continue your walk, the Elf poses a second question: in each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?
// The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively. Adding up these five powers produces the sum 2286.

const cubeCheck = (input) => {

    let runningTotal = 0;
    

    input.split('\n').forEach( (line) => {

        let minimumCubesPerGame = {red: 0, green: 0, blue: 0}
        let powerPerGame = 1
        let draws = line.split(": ")[1].replaceAll(",","").replaceAll(";","").split(" ")

        for (let i in draws) {
            
            if (i%2) {
                let cubeColor = draws[i]
                let cubeCount = draws[i-1]

                if (cubeCount > minimumCubesPerGame[cubeColor]) {
                    minimumCubesPerGame[cubeColor] = Number(cubeCount)
                }
            }
        }

        //calculate Power
        Object.keys(minimumCubesPerGame).forEach( (minimum) => {
            powerPerGame *= minimumCubesPerGame[minimum]
        })

        runningTotal += powerPerGame;

    })
    return runningTotal;
}