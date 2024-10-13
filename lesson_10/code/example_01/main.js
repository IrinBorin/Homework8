const randN = Math.random();
function doubleNumber(n){
    const result = n*2;
    return result;
}
const resultDouble10 = doubleNumber(10);
console.log(resultDouble10);


const doubleNumberExpression = function(n=1000){
    return n*2;
}
console.log(doubleNumberExpression(75));

const doubleNumberArrow = (n) => {
    return n*2;
}
console.log(doubleNumberArrow(275));



function displayedGreeting(name) {
    if (typeof name === "string"){
    const string = `Hi, ${name}`;
    return string;
}
else {return "This is incorrect"
}
}
console.log(displayedGreeting(4));

const greetingArrow = (name) => {
    if (typeof name === "string"){
        const string = `Hi, ${name}`;
        return string;
}
}
console.log(greetingArrow("Peter"));

function myName(name){ 
    console.log(`Hi, ${name}`);
}
myName("Brian");
