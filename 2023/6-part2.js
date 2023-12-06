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
    let waysToWin = 0

    console.log(data);

    let raceTimeLimit = Number(data[0].split(':')[1].replaceAll(' ',''))
    let raceDistanceToBeat = Number(data[1].split(':')[1].replaceAll(' ',''))
    
    for (let i of Array(raceTimeLimit).keys()) {
        
        if (i==0) {continue}
        let chargeTime = Number(i)
        let timeRemainingAfterCharge = raceTimeLimit - chargeTime
        let distanceAchieved = (timeRemainingAfterCharge * chargeTime)
        
        if (distanceAchieved > raceDistanceToBeat) {
            waysToWin += 1
        }
        
        if (!(Number(i)%1000)) {
            console.log({chargeTime}, {distanceAchieved}, {waysToWin})
        }   
    }
    return waysToWin
}