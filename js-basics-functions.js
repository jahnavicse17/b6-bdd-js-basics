//Adding 2 numbers using function and reusing it, Function can be reused multiple times and returns some value by performing an operation
function add(a, b) {
    return (a + b);
}
function loop1() {
    for (let a = 0; a <= 5; a++) {
        console.log("a: " + a);
    }
}

console.log("Addition of 2 numbers using function: " + add(2, 3));
console.log("Addition of 2 numbers using function: " + add(5, 5));
loop1();

