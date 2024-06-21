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


//++++++++++++++++++ Memory Management +++++++++++

// Stack(Primitive) || Heap(Non-Primitive)

// Primitive(Copy will Create)
let naav = "Pavan"
let anotherNaav = naav 
anotherNaav = "Pabitwar" 

// console.log(naav); // Pavan
// console.log(anotherNaav); //Pabitwar
/*
it will creata a copy, if we made changes then it will affect in copy original remains same
*/

//Non-Primitive(gets the reference of original copy)

let user1 = function(){
    n = "Pavan",
    age = 22
}
let user2 = user1
user2.n="Pabitwar"
// console.log(user1.n); // Pabitwar 
// console.log(user2.n); // Pabitwar
/*
it passes the reference of original, if we made changes then it will affect in original both values will changes as reference is passed 
*/
