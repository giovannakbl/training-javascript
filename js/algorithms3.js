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

// Exercise 02

// let actualDate = new Date;
// // Function that checks if a number is an integer and if it is smaller than 10
// // If true, returns the number in a 2 digit format (with a 0 in front)
// // If false, returns the number unchanged
// function twoDigitsInteger(intValue) {
//     if (Number.isInteger(intValue) && intValue <= 9 && intValue >= -9)
//     {
//         if (intValue >=0) {
//             intValue = `0${intValue}`;
//         } else {
//             intValue = `-0${intValue * (-1)}`;
//         }
//     }
//     return intValue;
// }
// let actualTime = `${twoDigitsInteger(actualDate.getHours())}:${twoDigitsInteger(actualDate.getMinutes())}:${twoDigitsInteger(actualDate.getSeconds())}`;
// if (actualTime >= "06:00:00" && actualTime < "12:00:00") {
//     alert(`¡Buenos días!\n Son las ${actualTime}`);
// } else if (actualTime >= "12:00:00" && actualTime < "21:00:00") {
//     alert(`¡Buenas tardes!\nSon las ${actualTime}`);
// } else {
//     alert(`¡Buenas noches!\n Son las ${actualTime}`);
// }

// Exercise 3

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

// // Function that generates a random hexadecimal color
// function genHexadecimalColor () {
//     let genColor ="";
//     for (let i = 0;i < 6; i++) {
//         genNumber = numberInInterval(0, 15);
//         switch (true) {
//             case (genNumber <= 9):
//                 genColor += genNumber;
//                 break;
//             case (genNumber > 9):
//                 genColor += String.fromCharCode(65 + genNumber - 10);
//                 break;
//             default:
//                 genColor += 0;
//                 break;
//         }
//     }
//     return genColor;
// }
// numOfRepetitions = 10;
// textToRepeat = "Hello World!";
// let colorsList = new Array();
// for (let i = 0; i < numOfRepetitions; i++){
//     colorsList[i] = genHexadecimalColor();
//     console.log(`%c ${textToRepeat}`, `color:#${colorsList[i]};`);
// }

