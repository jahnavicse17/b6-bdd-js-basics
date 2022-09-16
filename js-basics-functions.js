//Adding 2 numbers using function and reusing it, Function can be reused multiple times and returns some value by performing an operation
function add(a, b) {

    return (a + b); //After return stmt, any stmt should not exist
}
add(1, 1); // If return stmt in function, it wont give o/p in console without calling it in console.log or if no console.log in function.
console.log("Addition of 2 numbers using function: " + add(2, 3));
//console.log("Addition of 2 numbers using function: " + add(5, 5)); //Re-using the function
function loop1() {
    for (let a = 0; a < 5; a++) {
        console.log("a: " + a);
    }
}
loop1();

/*callFunction("add(10,20)");
function callFunction(func) 
{
    try 
    {
        console.log("Function try called");
        eval(func);
        console.log("After Eval function execution");
    }
    catch (e) 
    {
        console.log("Function catch called");
    }
}
function add(a,b) 
{
    console.log("Function aaa before alert called");
    console.log(a+b);
    console.log("Function aaa after alert called");
}*/

/*<button onclick="myFunction()">Try it</button>
<script>
function myFunction() 
{
  alert("I am an alert box!");
}
</script>
*/

 function myFunction() 
{
    const ps=require("prompt-sync");
    const prompt=ps();

    var a = prompt("Enter your a: "); 
    var a1=parseInt(a);    
    var b = prompt("Enter your b: "); 
    var b1=parseInt(b);
    console.log(`The first number is: ${a}`);
    console.log(`The Second number is: ${b}`);
    var c=a1+b1;    
    console.log("The sum of "+a1+" and "+b1+" is: "+c);
}
myFunction(); 


/*function myFunction1() 
{
    const ps=require("prompt-sync");
    const prompt=ps();

    var a = window.prompt("Enter your a: "); 
    var a1= parseInt(a);    
    var b = window.prompt("Enter your b: "); 
    var b1=parseInt(b);
    console.log('The first number is: ${a}');
    var c=a1+b1;    
    alert("The sum of (a,b): "+c)
}
myFunction1();*/

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



