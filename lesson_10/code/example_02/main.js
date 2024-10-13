const numberOfSymbolsArrow = (text) => {
    const result = (typeof text === "string") ? text.length : "Not a line";
    return result;
}
console.log(numberOfSymbolsArrow("Hello, World!"));

const countSymbols = text => (typeof text === "string") ? text.length: "Not a line";

const squareNumberOfArray = (arr) => {
const result = [];
for (let index = 0; index < arr.length; index++) {
    result.push(arr[index]*arr[index]);
}
return result;
}
const b = [3, 5, 7, 9];
console.log(squareNumberOfArray(b));