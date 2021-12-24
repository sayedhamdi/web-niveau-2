const s = "hello" // String

const c = 'b' //String

const pi = 3.14 // number

const a = 8 // number 


let isBlue = true // boolean

let t = [] //table  ou liste (in reality this is an object)

let obj = { 
    key:'valeur',
    number:5,
    string:'chaine',
    boolean:true,
    object : null,
}

let chiffre // undefined




// in javascript we have 
console.log(typeof(s)) // String
console.log(typeof(c)) // String 
console.log(typeof(a)) // number
console.log(typeof(pi)) // number

console.log(typeof(isBlue)) // boolean
console.log(typeof(t)) // object
console.log(typeof(obj)) // object

let obj = null

console.log(typeof(a)) // undefined


/*
    Strings 
*/

// we can concat numbers with strings but 

const valeurSEtPi= "valeur a : "+s +" valeur b : "+pi

// formatted string is better

const formattedString= `a :  ${a}`



// Spread operator  

let a = {"name" : "ahmed",'age':16}
let b = {"name" : "aziz",x:2}
let c = {"name" : "Chaker",y:"9"}

let person = {
    ...a,
    ...b,
    ...c
}

// comparing with type and value
let s = 6
let n = 6
if (Number(s)==n && typeof(s)==typeof(n)){
    console.log(true)
}else {
    console.log(false)
}
// falsy values are (0, null, undefined, '' )
if (1){
    console.log("truthy")
}else{
    console.log("falsy")
}


// classes in javascript
// coupling variables and their behaviour
class Person {
    constructor(n){
        this.name = n
    }
    sayHello() {
        console.log(`Hello my name is ${this.name}`)
    }
}

let p1= new Person("ahmed")
p1.sayHello()





//function 
function hello(){
    console.log("hello !")
}



// arrow function
let sayHello  = ()=>{
    console.log("Hello ! ")
}


//function  with parameter
function helloWithName(name){
    console.log(`hello ${name}!`)
}



// arrow function with parameter
let sayHelloWithName  = (name)=>{
    console.log(`Hello ${name}!`)
}




// arrays

// in javascript arrays are 0 indexed


let t = [1,2,3]
// length of an array 
let n = t.length // length is 3

// get the first element 
let first = t[0] // first = 1

//print the whole array in javascript

for (let i=0;i<n;i++){
    console.log(t[i])
}


// we can also use the forEach high order method
t.forEach(tableElement=>console.log(tableElement))


// example of a function exerice to use for loops with arrays
function findNumber(t,n){
    for (let i=0;i<t.length;i++){
        if(t[i]==n){
            return true
        }
    }
    return false
}

// testing if the function works well
console.log(findNumber([1,2,3,4,8],8)) //true
console.log(findNumber([1,2,3,4,8],9)) //false
console.log(findNumber([1,2,3,4,8],1)) //true


/* Callback functions example */

function add(x,y){
    return x + y
}

function mult(x,y){
    return x*y
}

function calculate(x,y,callback){

    /* here we used the callback function inside this function */
    const result = callback(x,y)

    console.log("result is : "+result)
}
// we called the function calculate passing a callback function mult
calculate(5,6,mult)
// the result is the multiplication of the two numbers 5 and 6

// another high order method filter 
t.filter(function(element){
    if (element==3){
        return true
    }else {
        return false
    }
})

let filtedT = t.filter(n=>n==9)
// filtredT = []

let filtedT1 = t.filter(n=>n==2)
// filtredT = [2]

let doubleT = t.map((element)=>element*2)

// doubleT = [2,4,6]


// check for parameters passed
const findNumber = (t,n)=>{
    if (t == undefined || n == undefined){
        console.log("error in function")
        return false
    }
    return t.filter(el=>el==n).length >= 1
}


console.log(findNumber([1,2,3,4,8],8)) //true
console.log(findNumber([1,2,3,4,8],9))// false
console.log(findNumber([1,2,3,4,8],1)) //true
console.log(findNumber([1,9,13,4,8,1],1))  //true
console.log(findNumber([1,2,3]))  //true

const persons = [
    {name:"ahmed"},
    {name:"khalil"},
    {name:"aziz"},
    {name:"Mohamed"},
]

function findName(t,p){
    for (let i =0;i<t.length;i++){
        if (t[i].name.toUpperCase()==p.name.toUpperCase()){
            return true
        }
    }
    return false
}

console.log(findName(persons,{name:"amir"}))
console.log(findName(persons,{name:"Mohamed"}))
console.log(findName(persons,{name:"mohamed"}))





// exemple of object destructuring


let user= {
    first:"ahmed",
    last:"jbeli",
    email:'ahmed.jbeli@gmail.com',
    age : 19,
    isActive : false
}


// this is bad we are writing a lot of lines
let first = user.first
let last = user.last
let age = user.age
let email = user.email

//object destructuring ES6

// way better
let {email,...userDetails}=user



console.log(email,userDetails)

// it works also in Arrays , we can do Array destructuring
let t = [1,2,3]
// this is the old way
let firstElement  = t[0]
let secondElement  = t[1]
let thirdElement  = t[2]

// the new way with ES6 syntax
let [one,...other] = t
let t1 = [1,2,3]


let t2 = [...t1]

t2[0]=5


