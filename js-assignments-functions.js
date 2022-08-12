
//String index length starts from 1, but array index length starts from 0;
//Pgm1: Finding the Number of Characters in a string and return the length of it.
let str = ' ';
let count = 0;
function char_count(str) {
    console.log("Total String Length:" + str.length);
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i)) {
            console.log("Character is: " + str.charAt(i));
            count++;
        }
    }
    return count;
}
char_count(' w3 resource.com ');
console.log("Total String characters length: " + count);

//Pgm2: Function that accepts 2 numbers and return the largest No.
let numberOne, numberTwo, largest;
function largeNo(numberOne, numberTwo) {
    if (numberOne > numberTwo)
        largest = numberOne;
    else
        largest = numberTwo;
    return largest;
}
console.log("Largest Number is: " + largeNo(10000, 2000));

//Pgm 3: Function to write that writtens boolean flag when it is in between 5000 and 9999.
let value, boolean;
function booleanflag(value) {
    if ((value >= 5000 && value <= 9999)) {
        boolean = true;
    }
    else {
        boolean = false;
    }
    return boolean;
}
console.log("Boolean value for entered value : " + booleanflag(8000));

//Pgm 4: Accepts the number and returns a cube root of the number.

let cuberoot;
function cuberootnumber(cuberoot) {
    return +Math.cbrt(cuberoot);
}
console.log("Cube root of a number is: " + cuberootnumber(125));
console.log("Cube root of a number is: " + cuberootnumber(10));

//Pgm 5: Write a function that takes inches a parameter and returns to feet.
let inches, feet;
function inchToFeet(inches) {
    return (feet = inches / 12);
}
console.log("Inches to Feet is: " + inchToFeet(60) + " Feet");

//Pgm 6: Write a function that takes degrees a parameter and returns to Fahrenheit.
let degrees, fahrenheit;
function degreeToFahrenheit(degrees) {
    return (fahrenheit = ((degrees * 1.8) + 32));
}
console.log("Degrees to Fahrenheit is: " + degreeToFahrenheit(1) + " F");

//Pgm 7: Write a function that takes kilos a parameter and returns to pounds and vice-versa.
let kilos, pounds;
function kilosToPounds(kilos) {
    return pounds = (kilos * 2.20462262185);
}
console.log("Kilos to Pounds is: " + kilosToPounds(52) + " lbs");
function poundsToKilos(pounds) {
    return kilos = (pounds * 0.45359237);
}
console.log("Pounds to Kilos is: " + poundsToKilos(72) + " kg");
function poundsToKilos(pounds) {
    return kilos = (pounds * 0.453592);
}
console.log("Pounds to Kilos is: " + poundsToKilos(2.2) + " kg");

//Pgm 8: List of 10 states in USA by using JSON file.
var statesInUSAObj = require("./statesinusa.json");
console.log("Length of States: " + statesInUSAObj.statesInUSA.length);
console.log("Ten-States in USA: " + statesInUSAObj.statesInUSA);
console.log("Index of a state: " + statesInUSAObj.statesInUSA.indexOf('New Jersey'));
console.log("Last Index of a state: " + statesInUSAObj.statesInUSA.lastIndexOf('New Jersey'));

//Pgm 9: List of Cricket teams and players by using JSON file.
var criteam = require("./cricketteam.json");
for (let k = 0; k < criteam.CriTeam1.length; k++) {
    console.log("Team 1 details: ")
    console.log("Team 1 First Name: " + criteam.CriTeam1[k].firstName);
    console.log("Team 1 Last Name: " + criteam.CriTeam1[k].lastName);
    console.log("Team 1 Age: " + criteam.CriTeam1[k].age);
    console.log("Team 1 Height: " + criteam.CriTeam1[k].height);
    console.log("Team 1 Weight: " + criteam.CriTeam1[k].weight);
}
for (let k = 0; k < criteam.CriTeam2.length; k++) {
    console.log("Team 2 details: ")
    console.log("Team 2 First Name: " + criteam.CriTeam2[k].firstName);
    console.log("Team 2 Last Name: " + criteam.CriTeam2[k].lastName);
    console.log("Team 2 Age: " + criteam.CriTeam2[k].age);
    console.log("Team 2 Height: " + criteam.CriTeam2[k].height);
    console.log("Team 2 Weight: " + criteam.CriTeam2[k].weight);
}

//Pgm 10: Returns longest string when 2 strings are passed.
const animalNames = ["cat", "chicken", "horse", "elephant"];
function getLongestString(animalNames) {
    let size = animalNames.length;
    let longestName = animalNames[0];
    for (let i = 0; i < size; i++) {
        if (animalNames[i].length > longestName.length) {
            longestName = animalNames[i];
        }
    }

    return longestName;
}
console.log("Longest String is: " +getLongestString(animalNames));

//Pgm 10: Returns shortest string when 2 strings are passed.
const animalNames1 = ["cat", "chicken", "horse", "elephant"];
function getShortestString(animalNames1) {
    let size = animalNames1.length;
    let shortestName = animalNames1[0];
    for (let i = 0; i < size; i++) {
        if (animalNames1[i].length < shortestName.length) {
            shortestName = animalNames1[i];
        }
    }

    return shortestName;
}
console.log("Shortest String is: " +getShortestString(animalNames1));

