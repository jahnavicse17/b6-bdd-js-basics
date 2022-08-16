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



