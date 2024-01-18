
// creating a regular Expression

// let re1 = new RegExp("abc");
// let re2 = /abc/;

// let eighteenPlus = /eighteen\+/;

// console.log(re2.test("Abcde"))

let re1 = new RegExp("abc");
let re2 = /abc/;
let passPattern = /^[A-Za-z0-9]*$/;
let enteredPass = "mmmbihj34SS";

let eighteenPlus = /eighteen\+/;
console.log(re2.test("abcde2"));

// scenerio where password minimum length is required
if (enteredPass.length > 8){
    console.log(passPattern.test(enteredPass));
}

let numPass =  /^(\\+234[789][01]\\d{8}|0[789][01]\\d{8})$/
let enterNum = "07013164184";

if (enterNum == numPass) {
    console.log("working");
}