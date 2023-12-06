const fs = require('fs');
const filePath = './inputs/6.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });

//   Time:      71530
//   Distance:  940200
// Now, you have to figure out how many ways there are to win this single race. In this example, the race lasts for 71530 milliseconds and the record distance you need to beat is 940200 millimeters. You could hold the button anywhere from 14 to 71516 milliseconds and beat the record, a total of 71503 ways!



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