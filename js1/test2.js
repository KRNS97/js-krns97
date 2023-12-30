let score = "23"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let islogedIn = 1

let booleabIslogedIn = Boolean(islogedIn)
console.log(booleabIslogedIn)

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID);

const bigNumber = 3456374937236482548n

const heros = ["ironman", "moonknight", "loki"]

let MyObj = {
    name:"karan",
    age: 21,
}

const MyFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
console.log(typeof bigNumber);
console.log(typeof MyObj);
console.log(typeof MyFunction);