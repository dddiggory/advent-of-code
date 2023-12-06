const fs = require('fs');
const filePath = './inputs/5-sample.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(mainFunction(data));
  });


// function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

//attempt 2: what if we went *one pair at a time* and just kept the lowest value?

const mainFunction = (input) => {
    let maps = input.split('\n\n')
    let seeds = []
    let mapRules = []
    let mapRulesNew = {}
    let lowestLocation

    for (let m in maps) { // for each map

        if (m==0) {console.log("skip seed row"); continue}

        let desc = maps[m].split(':')[0] //just for logging

        let mapStrings = maps[m].split(':')[1].split('\n').filter((value) => value)

        let keyName = m
        mapRulesNew[keyName] = {desc: desc, starts: [], ends: [], transformRules: []}

        for (let i in mapStrings) {
            let values = mapStrings[i].split(' ')

            //establish effective ranges
            mapRulesNew[keyName]['starts'].push(Number(values[1]))
            mapRulesNew[keyName]['ends'].push((Number(values[1])+Number(values[2])))
            mapRulesNew[keyName]['transformRules'].push(values[0] - values[1])

            let sourceRange = {start: Number(values[1]), end: (Number(values[1])+Number(values[2]))}
            //establish transformation rule
            sourceRange['transformRule'] = (values[0] - values[1])

            // mapRules.push(sourceRange)
        }
        
        
    }

    //map rules established.  now, one seed at a time

    let seedMap = maps[0].split(':')[1].split(' ').filter((value) => value)
    
    for (let s in seedMap) {

        if (!(Number(s)%2)) {
            
            //go through rules for each seed

            let rangeCount = seedMap[Number(s)+1]
            let seedNum = Number(seedMap[s])
            let lowestResultForSeed
            let originalSeedNum = seedNum

            while (rangeCount > 0) {

                
                for (let r in mapRulesNew) {
                    let matchFoundInCategory = false
                    
                    for (let x in mapRulesNew[r]['starts']) {

                        let startRange = mapRulesNew[r]['starts'][x]
                        let endRange = mapRulesNew[r]['ends'][x]
                        let transform = mapRulesNew[r]['transformRules'][x]


                        if (originalSeedNum >= startRange && originalSeedNum <= endRange && !matchFoundInCategory) {
                            console.log('match', {originalSeedNum}, {startRange}, {endRange})
                            seedNum = Number(seedNum) + Number(transform)
                            matchFoundInCategory = true
                        } else {continue}

                    }

                    if (!(lowestResultForSeed) || Number(seedNum) < Number(lowestResultForSeed)) {
                        lowestResultForSeed = seedNum
                    }
                    console.log(seedNum)
                }

                seedNum += 1
                rangeCount -= 1


            }



        }

    }
    


    return (Math.min(...seeds))
}