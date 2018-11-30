
"use strict"

console.log("-scopes-");

/*

    ------------------------------------------------------------------
    scope / execution-context
    ------------------------------------------------------------------

    memory/stack-frame which contains arg & local variables
    to execute function

    phase-1: creation/push
    ----------------------
    
    imp-note:

    =>  variable declared with 'var' keyword any-where in that scope, 
        always get hoisted with default value ( undefined )

    phase-2: execution/pop
    ----------------------

    => instructions will execute in seq.


    -------------------------------------------------
    ==>every javascript has one 'global-scope' default  
    -------------------------------------------------
    ==> every function invocation also create new-scope,
        which is child of in-which scope that function has declared/created
    -------------------------------------------------

*/

// -------------------------------------------------
// Quiz-1
// -------------------------------------------------


// var v=12
// console.log(v);   



// -------------------------------------------------
//Quiz-2
// -------------------------------------------------


// var v=12;
// function f1(){ 
//     console.log(v);  
//     var v=13;
// }
// f1() //  f1-scope  <-- global-scope



// -------------------------------------------------
//Quiz-4
// -------------------------------------------------

var v = 12
function f1() {
    function f2() {
        console.log(v);
    }
    f2();  // f2-scope <--- f1-scope
    var v = 13;
} 
f1();  // f1-scope <--- global-scope
 

// -------------------------------------------------
// Quiz-5
// -------------------------------------------------







// -------------------------------------------------
// Quiz-6
// -------------------------------------------------









// -------------------------------------------------
// problems 'var' keyword :
// -------------------------------------------------

/*
 
    => always get hoist
    => can re-declare same variable whithin scope
    => No block-scope 
 
    Soln:
    
    => use 'let' & 'const' keywords ( from es6 )

*/

// -------------------------------------------------







// -------------------------------------------------







// -------------------------------------------------








// -------------------------------------------------






// -------------------------------------------------
// Quiz-7
// -------------------------------------------------








// -------------------------------------------------


// -------------------------------------------------

// summary :
/*
    ==> use 'let' keyword, for mutable reference variable
    ==> use 'const' keyword, for immutable reference variables

    ==> try to avoid 'var' keyword, for better code
*/

// -------------------------------------------------
// Quiz-8
// -------------------------------------------------










// ----------------------------------------------------------------

