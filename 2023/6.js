const fs = require('fs');
const filePath = './inputs/6.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });


const mainFunction = (input) => {
    
    let data = input.split('\n')
    let raceTimes = data[0].split(' ').filter((value) => value).slice(1)
    let raceDistances = data[1].split(' ').filter((value) => value).slice(1)
    let combinedWaysToWin = 1
    console.log({raceTimes}, {raceDistances})

    for (let i in raceTimes) { //for each race

        let raceTimeLimit = Number(raceTimes[i])
        let raceDistanceToBeat = Number(raceDistances[i])
        let raceWaysToWin = 0

        for (let i of Array(raceTimeLimit).keys()) {
            if (i==0) {continue} //skip 0 and no need to run i=limit
            
            let chargeTime = Number(i) 
            let timeRemainingAfterCharge = raceTimeLimit - chargeTime

            let distanceAchieved = (timeRemainingAfterCharge * chargeTime)

            if (distanceAchieved > raceDistanceToBeat) {
                raceWaysToWin += 1
            }

        }

        console.log({raceWaysToWin}, 'for race', i)
        combinedWaysToWin *= raceWaysToWin

    }


    return combinedWaysToWin
}