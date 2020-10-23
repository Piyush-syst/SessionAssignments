"use strict";
// x=10;
let x=10;
function scop(){
    let x=2;
    console.log(x);
}
scop();
console.log(x);