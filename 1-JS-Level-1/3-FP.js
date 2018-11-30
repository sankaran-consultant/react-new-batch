"use strict"

console.log('-FP-');

//-----------------------------------------------------
//  Functional Programming ( FP )
//-----------------------------------------------------

/*
    

    How to create function in .js-language ?

    2 ways

    1  function-declaration

            ==> Named function
            ==> function-object will create at scope-creation-phase
            ==> always will hoist with function-obj

    2. function-expression

            ==> Anonymous function 
            ==> function-object will create at scope-execution-phase
            

*/

// -------------------------------------------------
// 1  function-declaration
// -------------------------------------------------









// -------------------------------------------------
// 2. function-expression
// -------------------------------------------------












//------------------------------------------------------
// function + parameters
//------------------------------------------------------









//------------------------------------------------------

// E.g









//------------------------------------------------------
// Quiz-1 : can we overload function .js-language ? 
//------------------------------------------------------









//------------------------------------------------------
// function with default-parameters  ( es6 )
//------------------------------------------------------








//------------------------------------------------------
// function with rest-parameter  ( es6 )
//------------------------------------------------------













//------------------------------------------------------
//  FP - Principles
//------------------------------------------------------

/*

// in FP-language, functions are first-class values/citizens

    - A function can be stored in a variable
    - A parameter of a function can be a function
    - The return value of a function can be a function

*/

//------------------------------------------------------
// #1 - A function can be stored in a variable 
//------------------------------------------------------







//------------------------------------------------------
// #2 - A parameter of a function can be a function
//------------------------------------------------------












//--------------------------------------
// e.g
//--------------------------------------












//------------------------------------------------------
// #3 - The return value of a function can be a function
//------------------------------------------------------











//------------------------------------------------------
// Function Closures
//------------------------------------------------------

/*

        A closure is a function having access to the parent scope, 
        even after the parent function has closed.

*/












//------------------------------------------------------
// where/why we need closures ?
//------------------------------------------------------

/*
==> to abstract public-behavior of any module
==> while executing func async, to access parent-scope's data
*/

// use1: ==> to abstract public-behav of any module

/*

e.g counter-module

        count=0;
        doCount()
        getCount()

*/















//------------------------------------------------------
// self-executable function  / IIFE  ==> module Pattern
//------------------------------------------------------

//








//------------------------------------------------------
// Quiz-1
//------------------------------------------------------








//------------------------------------------------------
// Quiz-2
//------------------------------------------------------








