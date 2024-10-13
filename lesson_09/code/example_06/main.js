const arrOfNumbers = [2, 4, 6, 10, 15];
const arrOfNumbersMod = [];
for(let i = 0; i < arrOfNumbers.length; i++){
  const result = Math.pow(arrOfNumbers[i], 2);
  console.log(result);
  arrOfNumbersMod.push(result);
}
