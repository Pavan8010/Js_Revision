// primitive
// string,number,null,undefined,boolean,BigInt,Symbol
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Although you gave the same value it will be different 
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n


// non-primitive(Reference)
// Object , Array , Function

let fn = function(){
    console.log("d");
}
fn();