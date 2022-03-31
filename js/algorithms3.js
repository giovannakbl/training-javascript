// Exercise 01

// let minLimit;
// let maxLimit;
// let validMinLimit = false;
// let validMaxLimit = false;
// alert("Let's generate some random numbers! In order to do that, I need you to inform me an interval of numbers. Let's go!");
// while (!validMinLimit) {
//     minLimit = prompt("Please inform a number that will represent the minimum limit for the interval.");
//     if (minLimit.includes(",")) {
//         minLimit = minLimit.replace(",", ".");
//     }
//     if (isNaN(minLimit) || minLimit == "") {
//         alert("Sorry, but that is not a valid number")
//     } else {
//         validMinLimit = true;
//     }
// }
// while (!validMaxLimit) {
//     maxLimit = prompt("Please inform a number that will represent the maximum limit for the interval.");
//     if (maxLimit.includes(",")) {
//         maxLimit = maxLimit.replace(",", ".");
//     }
//     if (isNaN(maxLimit) || maxLimit == "") {
//         alert("Sorry, but that is not a valid number")
//     } else {
//         validMaxLimit = true;
//     }
// }
// if (minLimit > maxLimit) {
//     alert(`Yucks! ${minLimit} is actually greater than ${maxLimit}. But that's fine! I get what you meant!`);
// }
// // The function numberInterval returns an integer number included in a given interval
// // The function requires two numbers as parameters. They can be positive or negative and can either be integers or decimal numbers
// // The order in which the parameters are informed is not important
// // The random number generated will be an integer equal or greater than the smallest informed value and equal or smaller than the biggest informed value 
// function numberInInterval(minNumber, maxNumber) {
//     if (minNumber > maxNumber) {
//         let tempValue = minNumber;
//         minNumber = maxNumber;
//         maxNumber = tempValue;
//     }
// return Math.round(Math.random() * (Math.floor(maxNumber) - Math.ceil(minNumber))) + Math.ceil(minNumber);
// }
// let quantityOfNumbers = 20;
// let generatedNumbers = [];
// let listOfGeneratedNumbers = "";
// for (let i = 0;i < quantityOfNumbers; i++) {
//     generatedNumbers[i] = numberInInterval(minLimit, maxLimit);
//     if (i < quantityOfNumbers - 1) {
//         listOfGeneratedNumbers += `${generatedNumbers[i]}, `;
//     } else {
//         listOfGeneratedNumbers += `${generatedNumbers[i]}`;
//     }
// }
// function findMaxInArray(givenArray) {
//     let max = givenArray[0];
//     for (let i = 1;i < givenArray.length; i++) {
//         if (givenArray[i] > max) {
//             max = givenArray[i];
//         }
//     }
//     return max;
// }
// function findMinInArray(givenArray) {
//     let min = givenArray[0];
//     for (let i = 1;i < givenArray.length; i++) {
//         if (givenArray[i] < min) {
//             min = givenArray[i];
//         }
//     }
//     return min;
// }
// let minValue = findMinInArray(generatedNumbers);
// let maxValue = findMaxInArray(generatedNumbers);
// console.log(`The generated numbers in the interval of ${minLimit} and ${maxLimit} were: ${listOfGeneratedNumbers}`);
// console.log(`min value: ${minValue}`);
// console.log(`max value: ${maxValue}`);
