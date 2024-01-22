// Promises
// 3 states of promises
// processing state also pending state
// fulfilled or resolved state
// Reject state

let myPromise = new Promise(function (resolve, reject){
    console.log("myPromise is here"); 
});

//const matchwon = true;
// let checkScore = new Promise((resolve, reject) => {
//     if(matchwon) {
//         resolve("Your team won");
//     }else{
//        reject("Your team lost the match");
//     }
// });
// console.log(checkScore);

// when resolved you go with "then()"
// .then()
// .catch()
// .finally()

let checkScore = new Promise((resolve, reject) => {
    reject("You lost");
    // resolve("We won");
});

// checkScore.then( function wonMatch(matchResult){
//     console.log(matchResult);
// }).then(function wonMatchB(){
//     console.log("we won the second leg");
// });
checkScore.then( function wonMatch(matchResult){
    console.log(matchResult);
}).catch(function errorTcket(lost){
    console.log(lost);
})
.finally(function done() {
    console.log("we are done with promises in pactical");
});

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then((response) => {
    if (response.ok) {
        return response.json();
    }else{
        throw new Error("NETWORK RESPONSE ERROR");
    }
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.error("FETCH ERROR:",error));