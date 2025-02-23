"use strict" //treat all JS code as newer version
// we cant use alert(3 + 3) // we are using node js not browser
// documentation we ar egouing to use are ; 1. MDN docs ; 2. tc39.es

let name = "anmol" //string datatype
let age = 18  // number datatpye  =>2 to power 53
let isLoggedIn = true //boolean => true/false
let state = null // null => standalone value
let temp; // undefindedd => value not assigned 


//SOME MORE DATATYPES
// bigint for bigger values 
// typeof null = Object (flaw) ... Interview question
// typeof undefined = undefined 

console.table([typeof state, typeof temp])


// JS is  dynamically typed language 

// Primitive 
// 7 types : String , NUmber , Boolean, null , undefined, Symbol, BigINt 

//Referrence (Non Primitive)

// Array, Ojects, functions