const randNumber = Math.random();
console.log(randNumber);
const roundedNumber = Math.round(4.67);
console.log(roundedNumber);
console.log(Math.round(Math.random()*10));
const roundedNumberFloor = Math.floor(4.99);
console.log(roundedNumberFloor);
const roundedNumberCeil = Math.ceil(8.01);
console.log(roundedNumberCeil);
const pow = Math.pow(2, 3);
console.log(pow);
const maxNumber = Math.max(124, 6788, 0, 67);
console.log(maxNumber);
const minNumber = Math.min(124, 6788, 0, 67);
console.log(minNumber);
const g = [];
for (let j = 0; j < 15; j++) {
g.push(Math.round(Math.random()*10));
}
console.log(g);