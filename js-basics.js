
console.log("Hello World!")

let a = 20;
let b = 20;
a=30;
console.log("Addition of (a,b) is : "+(a+b));

let c = "123";
let d = 123;
if (c == d) {
    console.log("True");
}
else {
    console.log("False");
}

for (let e = 1; e <= 10; e++) {
    console.log(e);
}

let f = 20;
let g = 30;
console.log((a + f) * g);

const data=['abc','def','efg']; //constant data, which we can declare an array.

let person = {
    name: 'Janu',
    age: 20,
    email: 'Janu@google.com',
address: {
    address1: 'Asylum',
        address2: 'Broadway',
        address3: {
            address4: 'hooland'
        },
            city: 'Hartford',
                zipcode: 123456
},
isStudent: true,
    interests: ['sports', 'reading', 'travel', 'cooking'],
        favNumbers: [6, 8, 3, 9]
}

console.log("The person age is: "+person.age);
//To print nested objects along with all values, we can use JSON.stringify by passing object and attribute(i.e. another object)
//JSON(Java script object notation) which have key(Only String"") and values(string, number, object , array or bolean etc). 
//IN JSON, website sends data to middle ware(web server) from browser in JSON format. JSON object contains an array of obejcts.
console.log("The person address is: "+JSON.stringify(person.address));
//To print value of the particular nested object, we can use object following attribute(i.e. another object) with ['attribute name'].
console.log("The person address1 is: "+person.address['address1']);
//To print value of the particular nested object, we can use object following attribute(i.e. another object) with following attribute(i.e one more nested object) then with ['attribute name'].
console.log("The person address4 is: "+person.address.address3['address4']);
console.log("The person interests are: "+person.interests[0]);
// Array Length and Printing array values
//Array is a group of related data items that share a common variable name.
//Object contains set of properties which we can access of its values using object following .operator
for(let a=0;a<person.favNumbers.length;a++)
{
    console.log("The person favNumbers are: "+person.favNumbers[a]);
}



//Mapping JSON file to .js file and accessing the values with key.
var myJSONFile = require("./person.json");
console.log("Person Name...: "+myJSONFile.name);
console.log("Person Address...: "+myJSONFile.address.address3.address4);

//JSON object literal is not a JSON object. JSON is not an object, it is a string format, converting Javascript object to JSON string.
var myJSONObj = JSON.stringify(myJSONFile);
//JSON string - inside it JSON object literal is there and after parsing JSON string, we can create a javascript object.
var myJSONObjPar = JSON.parse(myJSONObj);
console.log("JSON File Object: "+myJSONObj);
console.log("Person Name: "+myJSONObjPar.name);
console.log("Person Age: "+myJSONObjPar.age);
console.log("Person Interests: "+myJSONObjPar.interests);
for(let i=0;i<myJSONFile.employees.length;i++)
{
    console.log("Employee Number: "+i);
    console.log("Employee First Name: "+myJSONFile.employees[i].firstName);
    console.log("Employee Second Name: "+myJSONFile.employees[i].lastName);
    console.log("Employee Age : "+myJSONFile.employees[i].age);
}
console.log("Person Address1:  "+myJSONObjPar.address.address1);
console.log("Person Address2:  "+myJSONObjPar.address['address2']);
//Getting all address object details including nested object
var fulladdres=JSON.stringify(myJSONObjPar.address);
console.log("Person Full Address:  "+fulladdres);