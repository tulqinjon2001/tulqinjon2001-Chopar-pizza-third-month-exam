//  First problem Word Reverse.

function wordReverse(word) {  
  let wordSplit = word.split(""); 

  let arrayReverse = wordSplit.reverse();

  let arrayJoin = arrayReverse.join("");

  return arrayJoin;
}
wordReverse("tulqinjon");

//  Second Problem numbers play

let arrayDefoult = [2, 3, 4, 5, 9, 7, 8];
let arrayResult = [];

function numbersFunc() {
//   let checkIntegrity = Math.pow(array[i], 1/2) % 1;
//   let rootExtraction = Math.pow(array[i], 1/2);
//   let increaseToLevel = Math.pow(array[i], 2);
  
  for (let i = 0; i < arrayDefoult.length; i++) {
    if ((Math.sqrt(arrayDefoult[i]) % 1) == 0) {
      arrayResult.push (Math.sqrt(arrayDefoult[i]));
    } else {
      arrayResult.push(Math.pow(arrayDefoult[i], 2));
    }
  }
}
numbersFunc();

console.log(arrayResult);

//  Third problem dauble letter

let arrayWordsDefoult = [];
let arrayWordsResult = [];

function wordsDouble(word) {
  arrayWordsDefoult = word.split('');

  for (let i = 0; i < arrayWordsDefoult.length; i++) {
    arrayWordsResult.push(arrayWordsDefoult[i], arrayWordsDefoult[i]);
  }

  let resultWord = arrayWordsResult.join('');
  
  return resultWord;
}
wordsDouble("salom");

console.log(resultWord);