function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function averageThreeNumbers(a, b, c) {
    let sum = a + b + c; 
    let avg = sum / 3;   
    return avg;          
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}


let x = getRandomNum(20); 
let y = getRandomNum(10); 
let z = getRandomNum(15); 

let num1 = x, num2 = y, num3 = z; 
let avg = averageThreeNumbers(num1, num2, num3); 
let sentence = createSentence(avg, "squirrel"); 

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`z = ${z}`);
console.log(`avg = ${avg}`);
console.log(`sentence = "${sentence}"`);

