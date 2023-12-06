const fs = require('fs');
const filePath = './inputs/6.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });

//   Time:      7  15   30
//   Distance:  9  40  200
// The first race lasts 7 milliseconds. The record distance in this race is 9 millimeters.
// The second race lasts 15 milliseconds. The record distance in this race is 40 millimeters.
// The third race lasts 30 milliseconds. The record distance in this race is 200 millimeters.
// To see how much margin of error you have, determine the number of ways you can beat the record in each race; in this example, if you multiply these values together, you get 288 (4 * 8 * 9).
// Determine the number of ways you could beat the record in each race. What do you get if you multiply these numbers together?

const mainFunction = (input) => {
    
    let data = input.split('\n')
    let raceTimes = data[0].split(' ').filter((value) => value).slice(1)
    let raceDistances = data[1].split(' ').filter((value) => value).slice(1)
    let combinedWaysToWin = 1
    console.log({raceTimes}, {raceDistances})

    //   Time:      7  15   30
    //   Distance:  9  40  200
    // The first race lasts 7 milliseconds. The record distance in this race is 9 millimeters.

    for (let i in raceTimes) { //for each race

        let raceTimeLimit = Number(raceTimes[i])
        let raceDistanceToBeat = Number(raceDistances[i])
        let raceWaysToWin = 0

        for (let i of Array(raceTimeLimit).keys()) {
            if (i==0) {continue} //skip 0 and no need to run i=limit
            
            let chargeTime = Number(i) 
            let timeRemainingAfterCharge = raceTimeLimit - chargeTime

            let distanceAchieved = (timeRemainingAfterCharge * chargeTime)

            // console.log('hold for', chargeTime, 'seconds.', timeRemainingAfterCharge, 'seconds left.', distanceAchieved, 'meters achieved.')
            if (distanceAchieved > raceDistanceToBeat) {
                raceWaysToWin += 1
            }

        }

        console.log({raceWaysToWin}, 'for race', i)
        combinedWaysToWin *= raceWaysToWin

        //if race is 7 seconds
        //hold for 0: go 0/second
        //hold for 1: 1 meter/second. 7-1 = 6. 6 * 1m/s = 6 meters
        //hold for 2: 2 meter/second. 7-2 = 5. 5 * 2m/s = 10 meters
        //hold for 3: 3 meter/second. 7-3 = 4. 4 * 3m/s = 12 meters

    }


    return combinedWaysToWin
}