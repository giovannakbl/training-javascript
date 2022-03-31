// Exercise 01

const exercise1 = () => {
let minLimit;
let maxLimit;
let validMinLimit = false;
let validMaxLimit = false;
alert("Let's generate some random numbers! In order to do that, I need you to inform me an interval of numbers. Let's go!");
while (!validMinLimit) {
    minLimit = prompt("Please inform a number that will represent the minimum limit for the interval.");
    if (minLimit.includes(",")) {
        minLimit = minLimit.replace(",", ".");
    }
    if (isNaN(minLimit) || minLimit == "") {
        alert("Sorry, but that is not a valid number")
    } else {
        validMinLimit = true;
    }
}
while (!validMaxLimit) {
    maxLimit = prompt("Please inform a number that will represent the maximum limit for the interval.");
    if (maxLimit.includes(",")) {
        maxLimit = maxLimit.replace(",", ".");
    }
    if (isNaN(maxLimit) || maxLimit == "") {
        alert("Sorry, but that is not a valid number")
    } else {
        validMaxLimit = true;
    }
}
if (minLimit > maxLimit) {
    alert(`Yucks! ${minLimit} is actually greater than ${maxLimit}. But that's fine! I get what you meant!`);
}
// The function numberInterval returns an integer number included in a given interval
// The function requires two numbers as parameters. They can be positive or negative and can either be integers or decimal numbers
// The order in which the parameters are informed is not important
// The random number generated will be an integer equal or greater than the smallest informed value and equal or smaller than the biggest informed value 
function numberInInterval(minNumber, maxNumber) {
    if (minNumber > maxNumber) {
        let tempValue = minNumber;
        minNumber = maxNumber;
        maxNumber = tempValue;
    }
return Math.round(Math.random() * (Math.floor(maxNumber) - Math.ceil(minNumber))) + Math.ceil(minNumber);
}
let quantityOfNumbers = 20;
let generatedNumbers = [];
let listOfGeneratedNumbers = "";
for (let i = 0;i < quantityOfNumbers; i++) {
    generatedNumbers[i] = numberInInterval(minLimit, maxLimit);
    if (i < quantityOfNumbers - 1) {
        listOfGeneratedNumbers += `${generatedNumbers[i]}, `;
    } else {
        listOfGeneratedNumbers += `${generatedNumbers[i]}`;
    }
}
function findMaxInArray(givenArray) {
    let max = givenArray[0];
    for (let i = 1;i < givenArray.length; i++) {
        if (givenArray[i] > max) {
            max = givenArray[i];
        }
    }
    return max;
}
function findMinInArray(givenArray) {
    let min = givenArray[0];
    for (let i = 1;i < givenArray.length; i++) {
        if (givenArray[i] < min) {
            min = givenArray[i];
        }
    }
    return min;
}
let minValue = findMinInArray(generatedNumbers);
let maxValue = findMaxInArray(generatedNumbers);
console.log(`The generated numbers in the interval of ${minLimit} and ${maxLimit} were: ${listOfGeneratedNumbers}`);
console.log(`min value: ${minValue}`);
console.log(`max value: ${maxValue}`);
}

// exercise1();

// Exercise 02

const exercise2 = () => {
let actualDate = new Date;
// Function that checks if a number is an integer and if it is smaller than 10
// If true, returns the number in a 2 digit format (with a 0 in front)
// If false, returns the number unchanged
function twoDigitsInteger(intValue) {
    if (Number.isInteger(intValue) && intValue <= 9 && intValue >= -9)
    {
        if (intValue >=0) {
            intValue = `0${intValue}`;
        } else {
            intValue = `-0${intValue * (-1)}`;
        }
    }
    return intValue;
}
let actualTime = `${twoDigitsInteger(actualDate.getHours())}:${twoDigitsInteger(actualDate.getMinutes())}:${twoDigitsInteger(actualDate.getSeconds())}`;
if (actualTime >= "06:00:00" && actualTime < "12:00:00") {
    alert(`¡Buenos días!\n Son las ${actualTime}`);
} else if (actualTime >= "12:00:00" && actualTime < "21:00:00") {
    alert(`¡Buenas tardes!\nSon las ${actualTime}`);
} else {
    alert(`¡Buenas noches!\n Son las ${actualTime}`);
}
}

// exercise2();

// Exercise 3

const exercise3 = () => {
// The function numberInterval returns an integer number included in a given interval
// The function requires two numbers as parameters. They can be positive or negative and can either be integers or decimal numbers
// The order in which the parameters are informed is not important
// The random number generated will be an integer equal or greater than the smallest informed value and equal or smaller than the biggest informed value 
function numberInInterval(minNumber, maxNumber) {
    if (minNumber > maxNumber) {
        let tempValue = minNumber;
        minNumber = maxNumber;
        maxNumber = tempValue;
    }
return Math.round(Math.random() * (Math.floor(maxNumber) - Math.ceil(minNumber))) + Math.ceil(minNumber);
}

// Function that generates a random hexadecimal color
function genHexadecimalColor () {
    let genColor ="";
    for (let i = 0;i < 6; i++) {
        genNumber = numberInInterval(0, 15);
        switch (true) {
            case (genNumber <= 9):
                genColor += genNumber;
                break;
            case (genNumber > 9):
                genColor += String.fromCharCode(65 + genNumber - 10);
                break;
            default:
                genColor += 0;
                break;
        }
    }
    return genColor;
}
numOfRepetitions = 10;
textToRepeat = "Hello World!";
let colorsList = new Array();
for (let i = 0; i < numOfRepetitions; i++){
    colorsList[i] = genHexadecimalColor();
    console.log(`%c ${textToRepeat}`, `color:#${colorsList[i]};`);
}
}

// exercise3();

// Exercise 4

const exercise4 = () => {
// This function removes characters from a given string
// The function expects as parameters: the string that wil be altered and a string containing the characters that need to be removed
// The function then returns the new string after the removal of the unwanted characters
function removeCharsString(originalString, charsToBeRemoved) {
    let newString = "";
    [...originalString].forEach((letter) => {
        if (!charsToBeRemoved.includes(letter)) {
            newString += letter;
        }
    }
    )
    return newString;
}

// Function that checks if a DNI is valid
function checkDNI(numberOfDNI) {
    let validDNI = false;
    let validationLetters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let expectedIndex = numberOfDNI.slice(0, (numberOfDNI.length - 1)) % 23;
    let expectedLastChar = validationLetters[expectedIndex];
    return validDNI = (numberOfDNI.length === 9 && (expectedLastChar == numberOfDNI.charAt(numberOfDNI.length - 1)));    
}

let informedDNI = prompt("Let's verify the DNI. Please input a DNI Number");
informedDNI = removeCharsString(informedDNI, ".,- ");
let lastDNIChar = informedDNI.charAt(informedDNI.length -1);
informedDNI = informedDNI.slice(0, (informedDNI.length -1)) + lastDNIChar.toUpperCase();
if (checkDNI(informedDNI)) {
    alert(`Nice! ${informedDNI} is a valid DNI.`);
} else {
    alert(`Sorry! ${informedDNI} is not a valid DNI. The data entered is wrong.`);
}
}

// exercise4();

const exercise4b = () => {
// Exercise 4 Bonus

// The function numberInterval returns an integer number included in a given interval
// The function requires two numbers as parameters. They can be positive or negative and can either be integers or decimal numbers
// The order in which the parameters are informed is not important
// The random number generated will be an integer equal or greater than the smallest informed value and equal or smaller than the biggest informed value 
function numberInInterval(minNumber, maxNumber) {
    if (minNumber > maxNumber) {
        let tempValue = minNumber;
        minNumber = maxNumber;
        maxNumber = tempValue;
    }
return Math.round(Math.random() * (Math.floor(maxNumber) - Math.ceil(minNumber))) + Math.ceil(minNumber);
}

// Function that generates a random DNI
function generateDNI() {
    let randomDNI = "";
    for (let i = 0; i < 8; i++){
        randomDNI += `${numberInInterval(0, 9)}`;
    }
    let validationLetters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let lastDNIChar = validationLetters[(randomDNI % 23)];
    randomDNI += lastDNIChar;
    return randomDNI;    
}
console.log(`Here you have a valid DNI: ${generateDNI()}`);
}

// exercise4b();