"use strict"

console.log('-index.js-');

const greetMod = require('dec-greet')
greetMod.greet('en')
greetMod.greet('es')


let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]

var lodash = require('lodash');

let diff = lodash.difference(arr1, arr2);
console.log(diff);  