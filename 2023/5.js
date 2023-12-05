const fs = require('fs');
const filePath = './inputs/5.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });

const mainFunction = (input) => {
    let maps = input.split('\n\n')
    let seeds = []

    for (let m in maps) { // for each map
        let desc = maps[m].split(':')[0]
        let mapStrings = maps[m].split(':')[1].split('\n').filter((value) => value)
        let mapRules = []
        let newSeeds = []

        if (m==0) { //seeds
            seeds = mapStrings[0].split(' ').filter((value) => value)
            continue
        }

        for (let i in mapStrings) {
            let values = mapStrings[i].split(' ')

            //establish effective ranges
            let sourceRange = {start: Number(values[1]), end: (Number(values[1])+Number(values[2]))}
            //establish transformation rule
            sourceRange['transformRule'] = (values[0] - values[1])
            mapRules.push(sourceRange)
        }

        let indexesAlreadyMapped = [] //i'm so sorry for this

        for (let s in seeds) {

            for (let r in mapRules) {
                let rule = mapRules[r]
                if (!(indexesAlreadyMapped.includes(s)) && seeds[s] >= rule['start'] && seeds[s] < rule['end']) {
                    seeds[s] = Number(seeds[s]) + Number(rule['transformRule'])
                    indexesAlreadyMapped.push(s)
                }
            }

        }
        
        // console.log({mapRules})
        // console.log({desc}, {seeds})

        // if (m>=1) {process.exit()}
        
        //establish ranges & transform logic
        // console.log({desc}, mapRules)

        //for each seed
        //with each map, transform it into the next number
        //no need to store the originals
        //array
        
    }
    // console.log(maps[0])

    return Math.min(...seeds)
}