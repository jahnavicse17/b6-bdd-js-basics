const ps = require("prompt-sync");
const prompt = ps();

//String index length starts from 1, but array index length starts from 0;
//Pgm1: Finding the Number of Characters in a string and return the length of it.
/*let count = 0;
function char_count() {
    const ps = require("prompt-sync");
    const prompt = ps();
    var str = prompt("Enter your String: ");
    console.log("Length of the String: " + str.length);
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i)) {
            console.log(`Character at ${i}: ` + str.charAt(i));
            count++;
        }
    }
    return count;
}
char_count();
console.log("Number of characters in the string are: " + count);

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

//Pgm 4: Returns longest string when 2 strings are passed.
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

//Pgm 5: Returns shortest string when 2 strings are passed.
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

//Pgm 6: Returns longest integer when 2 integers are passed.
function getLargestNumber() {
    const ps = require("prompt-sync");
    const prompt = ps();
    var str1 = prompt("Enter a: ");
    let a =parseInt(str1);
    var str2 = prompt("Enter b: ");
    let b =parseInt(str2);
    var str3 = prompt("Enter c: ");
    let c =parseInt(str3);
    var str4 = prompt("Enter d: ");
    let d =parseInt(str4);
    const intv = [a, b];
    let size = intv.length;
    let largeNo = intv[0];
    for (let i = 0; i < size; i++) {
        if (intv[i] > largeNo) {
            largeNo = intv[i];
        }
    }
    return largeNo;
}
console.log("Largest Number is: " + getLargestNumber());

//Pgm 7: Find the duplicates in a string array
function duplicatesInString() {
    var arr = ["a", "a", "b", "c"];
    var arr1 = ["a", "b", "c"];
    function checkIfDuplicateExists(arr) {
        return new Set(arr).size !== arr.length
    }
    console.log(checkIfDuplicateExists(arr)); // true
    console.log(checkIfDuplicateExists(arr1)); // false
}
duplicatesInString(); 

//Pgm 8: Find the duplicates in a string 
function duplicatesInString() {
const str = "big black bug bit a big black dog on his big black nose and his neck";
const findDuplicateWords = str => {
   const strArr = str.split(" ");
   const res = [];
   for(let i = 0; i < strArr.length; i++){
      if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
        console.log("IndexOf: "+strArr.indexOf(strArr[i]));
        console.log("LastIndexOf: "+strArr.lastIndexOf(strArr[i]));
         if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
   };
   return res.join(" ");
};
console.log(findDuplicateWords(str));
} 
duplicatesInString(); 

// Pgm 9: program to check if the string is palindrome or not
function checkPalindrome(string) {
    const len = string.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last char are same
        if (string[i] !== string[len - 1 - i]) {// m!==m, a!==a, d!==d, a!==a, m!==m
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
// take input
const ps = require("prompt-sync");
const prompt = ps();
const string = prompt('Enter a string: ');
// call the function
const value = checkPalindrome(string);
console.log(value); 

// Pgm 10: program to check if the number is palindrome or not
function checkPalindrome(num) {
    var rem, temp, final = 0;
    var number = num;
    temp = number;
    while(number>0)
    {
        rem = number%10;
        console.log("Reminder: "+rem); //1, 2, 1
        number = parseInt(number/10);
        console.log("Quotient: "+number); //12 ,1, 0
        final = final*10+rem; //1, 12, 121
        console.log("Final value: "+final);
    }
    if(final==temp)
    {
        return "The inputed number is Palindrome";
    }
    else
    {
        return "The inputed number is not Palindrome";
    }
}
// take input
const ps = require("prompt-sync");
const prompt = ps();
const string = prompt('Enter a string: ');
const num = parseInt(string);
// call the function
const value = checkPalindrome(num);
console.log(value);   

// Pgm 11: program to check the factorial of a number
function factorial(n){
    //base case
    if (n<=1){
      return n;
    }
    //recursive case
    else{
        return n*factorial(n-1);
    }
    }  
  let n = 4;
  let answer = factorial(n);
  console.log(`Factorial of ${n} is: `+factorial(n));
  console.log("The factorial of " +n+ " is " +answer); 

// Pgm 12: program to find fibanocci series of a number
function fibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm;
    console.log('Fibonacci Series:');
    for (let i = 1; i <=n; i++) {
        console.log(n1); //0, 1, 1, 2, 3, 5, 8...
        nextTerm = n1 + n2; // 1, 2, 3, 5, 8, 13, 
        n1 = n2; 1, 1, 2, 3, 5, 8, 
        n2 = nextTerm; 1, 2, 3, 5, 8, 13
    }
}
let n = 10;
let answer = fibonacci(n); 

// Pgm 13: Program to check is prime number or not
function isPrime(number) {
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (number > 1) {
        let isPrime = true;
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) { 
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }
}
const number = parseInt(prompt("Enter a positive number: "));
isPrime(number); 

/*
// Pgm 14: Program to print prime numbers
function primeNumbers(lowerNumber, higherNumber) {
    // looping from lowerNumber to higherNumber
    for (let i = lowerNumber; i <= higherNumber; i++) { // (1<=7),(2<=7),(3<=7),(4<=7),(5<=7),(6<=7),(7<=7)
        let flag = true;
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) { //(1<2),(2<2),(2<3),(2<4),(2<5),(2<6),(2<7)
            if (i % j == 0) { // (3%2),(4%2==0),(5%2),(6%2==0),(7%2)
                flag = false;
                break;
            }
        }
        // if number greater than equal to 1 and not divisible by other numbers
        if (i >=1 && flag == true) { //1,2,3,5,7
            console.log(i); //1,2,3,5,7
        }
    }
}
// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
primeNumbers(lowerNumber, higherNumber); 

// Pgm 15: Program to print Even and odd numbers with out duplicates
function evenAndOdd() {
    let arr = [1, 2, 11, 13, 3, 3, 5, 4, 5, 6, 7, 8, 8, 9, 12, 10, 10, 50, 20, 20];
    let arr1 = [];
    console.log('Even numbers are');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (!arr1.includes(arr[i])) {
                arr1.push(arr[i]);
            }
        }
    }
    //arr1=arr1.sort((a, b) => a - b);
    arr1 = arr1.sort(function (a, b) {
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        return 0
    });
    console.log(arr1 + "");
    let arr2 = [];
    console.log('odd numbers are ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (!arr2.includes(arr[i])) {
                arr2.push(arr[i]);
            }
        }
    }
    arr2=arr2.sort((a, b) => a - b);
    console.log(arr2+ "");
}
evenAndOdd(); 

// Pgm 16: Pgm to check number is even or odd

function evenorodd(number)
{
//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}
}
//take input from the user
const number = prompt("Enter a number: ");
evenorodd(number); */

//Pgm 17: Find the duplicates in a string array
function duplicatesInString() {
    const strArr = ["Janu","Jyothi","Dog","Janu","Jyothi"];
    function findDuplicateWords(strArr){
       const res = [];
       for(let i = 0; i < strArr.length; i++){
          if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){//Janu, Jyothi, Janu, Jyothi
             if(res.includes(strArr[i])==false){ //false, false, true, true
                res.push(strArr[i]);
                console.log("Push: "+res); //Janu, Jyothi
             };
             console.log("Res Array: "+res); //empty, Janu, Jyothi
          };
       };
       return res.join(" ");
    };
    console.log("Duplicates in a String are: "+findDuplicateWords(strArr));
    } 
    duplicatesInString(); 



