const fs = require('fs');
const filePath = './inputs/7-sample.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(mainFunction(data));
  });

//A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, or 2
//Five of a Kind
//Four of a Kind
//Full House (3 & 2)
//Three of a Kind
//Two pair (2 & 2)
//One pair
//High Card (all distinct)

//Each hand wins an amount equal to its bid multiplied by its rank, where the weakest hand gets rank 1, the second-weakest hand gets rank 2, and so on up to the strongest hand. Because there are five hands in this example, the strongest hand will have rank 5 and its bid will be multiplied by 5.


const mainFunction = (input) => {
    return
}