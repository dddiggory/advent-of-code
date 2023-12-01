let sampleInput = `
    1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet
    `

let calibrationValues = []

sampleInput.split('\n').forEach( (line) => {
    let calibrationValue, digit1, digit2

    Array.from(line).forEach( (character) => {

        if (character!=" " && !isNaN(Number(character))) {
            if (!digit1) {
                digit1 = character;
            }
            digit2 = character;
        } 
    })
    calibrationValue = Number(digit1+digit2)
    console.log(calibrationValue)
    if (!isNaN(calibrationValue)) {
        calibrationValues.push(calibrationValue);
    }
    
})