
//String index length starts from 1, but array index length starts from 0;
//Pgm1: Finding the Number of Characters in a string and return the length of it.
let str = ' ';
let count = 0;
function char_count() {
    const ps=require("prompt-sync");
    const prompt=ps();
    var str = prompt("Enter your String: "); 
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i)) {
            console.log(`Character at ${i}: `+ str.charAt(i));
            count++;
        }
    }
    return count;
}
char_count();
console.log("Total length of a String is: " + count);

//Pgm2: Function that accepts 2 numbers and return the largest No.
let numberOne, numberTwo, largest;
function largeNo() 
{
    const ps=require("prompt-sync");
    const prompt=ps();
    var a = prompt("Enter your First Number: "); 
    var numberOne=parseInt(a);    
    var b = prompt("Enter your Second Number: "); 
    var numberTwo=parseInt(b);    
    if (numberOne > numberTwo)
        largest = numberOne;
    else
        largest = numberTwo;
    return largest;
}
console.log("Largest Number is: " + largeNo());

//Pgm 3: Function to write that writtens boolean flag when it is in between 5000 and 9999.
let value, boolean;
function booleanflag() {
    const ps=require("prompt-sync");
    const prompt=ps();
    var a = prompt("Enter your Value: ");
    var value=parseInt(a);
    if ((value >= 5000 && value <= 9999)) {
        boolean = true;
    }
    else {
        boolean = false;
    }
    return boolean;
}
console.log("Boolean value for entered value : " + booleanflag());

//Pgm 4: Accepts the number and returns a cube root of the number.
let cuberoot;
function cuberootnumber() 
{
    const ps=require("prompt-sync");
    const prompt=ps();
    var a = prompt("Enter your Number to find Cuberoot: ");
    var cuberoot=parseInt(a);
    return +Math.cbrt(cuberoot);
}
console.log("Cube root of a number is: " + cuberootnumber());

//Pgm 5: Write a function that takes inches a parameter and returns to feet.
let inches, feet;
function inchToFeet() {
    const ps=require("prompt-sync"); 
    const prompt=ps();
    var a = prompt("Enter your Inches: ");
    var inches=parseInt(a);
    return (feet = inches / 12);
}
console.log("Inches to Feet is: " + inchToFeet() + " Feet");

//Pgm 6: Write a function that takes degrees a parameter and returns to Fahrenheit.
let degrees, fahrenheit;
function degreeToFahrenheit() {
    const ps=require("prompt-sync");
    const prompt=ps();
    var a = prompt("Enter your Degrees: ");
    var degrees=parseInt(a);
    return (fahrenheit = ((degrees * 1.8) + 32));
}
console.log("Degrees to Fahrenheit is: " + degreeToFahrenheit() + " F");

//Pgm 7: Write a function that takes kilos a parameter and returns to pounds and vice-versa.
//Kilos to Pounds
let kilos, pounds;
function kilosToPounds() {
    const ps=require("prompt-sync");
    const prompt=ps();
    var a = prompt("Enter your Kilos: ");
    var kilos=parseInt(a);
    return pounds = (kilos * 2.20462262185);
}
console.log("Kilos to Pounds is: " + kilosToPounds() + " lbs");
//Pounds to Kilos
function poundsToKilos() {
    const ps=require("prompt-sync");
    const prompt=ps();
    var a = prompt("Enter your Pounds: ");
    var pounds=parseInt(a);
    return kilos = (pounds * 0.45359237);
}
console.log("Pounds to Kilos is: " + poundsToKilos() + " kg");

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
//const animalNames = ["cat", "elephant"];
function getLongestString() {
    const ps=require("prompt-sync");
    const prompt=ps();
    var str1 = prompt("Enter String1: ");
    var str2 = prompt("Enter String2: ");
    const animalNames = [str1,str2];
    let size = animalNames.length;
    let longestName = animalNames[0];
    for (let i = 0; i < size; i++) {
        if (animalNames[i].length > longestName.length) {
            longestName = animalNames[i];
        }
    }

    return longestName;
}
console.log("Longest String is: " +getLongestString());

//Pgm 11: Returns shortest string when 2 strings are passed.
//const animalNames1 = ["cat", "elephant"];
function getShortestString() {
    const ps=require("prompt-sync");
    const prompt=ps();
    var str1 = prompt("Enter String1: ");
    var str2 = prompt("Enter String2: ");
    const animalNames = [str1,str2];
    let size = animalNames.length;
    let shortestName = animalNames[0];
    for (let i = 0; i < size; i++) {
        if (animalNames[i].length < shortestName.length) {
            shortestName = animalNames[i];
        }
    }

    return shortestName;
}
console.log("Shortest String is: " +getShortestString());

