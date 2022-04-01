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

// Exercise 5

const exercise5 = () => {
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

function randomCarPlate() {
    let quantityOfNum = 4;
    let quantityOfLetters = 3;
    let genPlate = "";
    let possibleNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let possibleLetters = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Y", "Z"];
    for (let i = 0; i < quantityOfNum; i++) {
        genPlate += possibleNum[numberInInterval(0, possibleNum.length -1)];
    }
    genPlate += " ";
    for (let j = 0; j < quantityOfLetters; j++) {
        genPlate += possibleLetters[numberInInterval(0, possibleLetters.length -1)];
    }
    return genPlate;
}
// console.log(randomCarPlate());

let validQuantity = false;
let platesQuantity;
while (!validQuantity) {
    platesQuantity = prompt("How many plates would you like to generate?");
    if (platesQuantity.includes(",")) {
       platesQuantity = platesQuantity.replace(",", ".");
    }
    platesQuantity = Number(platesQuantity);
    if (Number.isInteger(platesQuantity) && platesQuantity > 0){
        validQuantity = true;
    } else {
        alert(`Sorry, but that is not a valid quantity. You need to inform an integer value greater than 0.`);
    }
}
let listOfPlates = "";
for (let i = 0; i < platesQuantity; i++) {
    listOfPlates += `\n${randomCarPlate()}`;   
}
alert(`The ${platesQuantity} plates you requested are the following: ${listOfPlates}`);
}

// exercise5();

// Exercise 6

const exercise6 = () => {

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

// Function that returns a random array index of a given array
function randomArrayIndex(givenArray) {
    let randomIndex = numberInInterval(0, (givenArray.length - 1));
    return randomIndex;
}

// Function that returns a random element of a given array
// function randomArrayElement(givenArray) {
//     let randomElement = givenArray[randomArrayIndex(givenArray)];
//     return randomElement;
// }

// Function that creates a shuffled array mixing the positions of an existing array
function shuffleArray(givenArray) {
    let shuffledArray = [];
    let randomIndex = 0;
    for (let remainingElements = givenArray; remainingElements.length > 0; ) {
        randomIndex = randomArrayIndex(remainingElements);
        shuffledArray.push(remainingElements[randomIndex]);
        remainingElements.splice(randomIndex,1);
    }
    return shuffledArray;
}

// Function that shows a message in console
function showMessage(messageContent) {
    console.log(messageContent);
}

// Function that shows a message in console with a given delay
function showDelayedMessage(messageContent, delayInSeconds) {
    setTimeout(showMessage, (delayInSeconds * 1000), messageContent);
}

let citationsList = ["“Sugar is the next tobacco, without a doubt, and that industry should be scared. It should be taxed just like tobacco and anything else that can, frankly, destroy lives.”", "“Real food doesn't have ingredients, real food is ingredients.”", "“When you are trying to move mountains, you want-and need-people on your side who want to move them with you.”", "“Give your kids a bloody knife and fork and let me put some fresh food in front of them they can eat.”", "“The whole idea is to earn the flavor. No one gives it to you.”", "“Many kids can tell you about drugs but do not know what celery or courgettes taste like.”", "“I profoundly believe that the power of food has a primal place in our homes, that binds us to the best bits of life.”", "“Food is one of life's greatest joys yet we've reached this really sad point where we're turning food into the enemy, and something to be afraid of”", "“My first outdoor cooking memories are full of erratic British summers, Dad swearing at a barbecue that he couldn't put together, and eventually eating charred sausages, feeling brilliant.”", "“I wouldn't say that processed food, ready meals and even takeaways aren't relevant to modern life, it's just that over the past 40 years there are three generations of people who have come out of school and gone through their home life without ever being shown how to cook properly.”", "“The future is about a plant-based diet.”", "“Pick a destination, go there, be open-minded and talk to the locals. Eat the things they eat and go where they go. You don't need to be fluent, just as long as you've got a smile on your face- people will be jumping over themselves to show you the stuff they're proud of.”", "“I'm probably a bit romantic about it, but I think we humans miss having contact with fire. We need it.”", "“Maybe God has a bigger plan for me than I have for myself.”", "“Cooking is the ultimate giving!”", "“Homicide is 0.8% of deaths. Diet-related disease is over 60%. But no one talks about it.”", "“The world is blessed most by men who do things, not by those who merely talk about them.”", "“From quite an early age I realised the effect that good food can have on others.”", "“The kitchen oven is reliable, but it`s made us lazy.”", "“If Obama wanted to make radical changes to America`s health long-term, all he has to do is treble the price of sugar and salt.”"];
let unpublishedCitations = shuffleArray(Array.from(citationsList));
let delay = 10;
let newDelay = delay;
let timeLimit = 120;
for (let i = 0; (i < unpublishedCitations.length - 1 && newDelay <= timeLimit); i++, newDelay += delay) {
    showDelayedMessage(unpublishedCitations[i], newDelay);
}
}

// exercise6();

// Exercise 7

const exercise7 = () => {

// Function that orders the numbers in an array
function orderNumbersArray(givenArray) {
    let newArray = Array.from(givenArray);
    for (let j = newArray.length -1; j > 0; j--) {
    for (let i = 0, tempValue = ""; i < j; i++) {
        if (newArray[i] > newArray[i + 1]) {
            tempValue = newArray[i];
            newArray[i] = newArray[i + 1];
            newArray[i + 1] = tempValue;
        }  
    }
}
return newArray;
}

// Function that returns if a number is even
function isEven(numericValue) {
    return numericValue % 2 === 0;
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

// Function that generates an array with diferent random numbers within a range
function randomNumericArray(lengthOfArray, minValue, maxValue) {
    let numericArray = [];
    let randomElement;
    for (let i = 0; i < lengthOfArray; i++) {
        randomElement = numberInInterval(minValue, maxValue);
        while (numericArray.includes(randomElement)) {
            randomElement = numberInInterval(minValue, maxValue);
        }
        numericArray[i] = randomElement;
    }
    return numericArray;
}

// let listOfNumbers = [1, 5, 4, 6, 8, 7, 9, 3, 2, 8];
// console.log(listOfNumbers);
// console.log(orderNumbersArray(listOfNumbers));
// console.log(isEven(-1));
// let listOfEvenNumbers = Array.from(listOfNumbers);
// listOfEvenNumbers = listOfEvenNumbers.filter(isEven);
// console.log(listOfEvenNumbers);
// listOfEvenNumbers = orderNumbersArray(listOfEvenNumbers);
// console.log(listOfEvenNumbers);
// let testArray = randomNumericArray(10, 1, 10);
// console.log(testArray);

let quantityOfNumbers = 100;
let minLimit = 0;
let maxLimit = 500;
let listOfGenNumbers = randomNumericArray(quantityOfNumbers, minLimit, maxLimit);
console.log(`Here we have a list of ${quantityOfNumbers} numbers within the interval of ${minLimit} and ${maxLimit}:\n ${listOfGenNumbers}`);
let listOfEvenNumbers = Array.from(listOfGenNumbers).filter(isEven);
console.log(`The list contains ${listOfEvenNumbers.length} even numbers, which are the following:\n ${listOfEvenNumbers}`);
listOfEvenNumbers = orderNumbersArray(listOfEvenNumbers);
console.log(`If we order the even numbers we have:\n\n${listOfEvenNumbers}`);


}

// exercise7();

// Exercise 8

const exercise8 = () => {

}

// exercise8();

