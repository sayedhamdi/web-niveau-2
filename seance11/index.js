/*const a = "hello" // String
const y = 'b' //String

const b = 8 //int 
const v = `b :  ${a}`
let valeurab= "valeur a : "+a +" valeur b : "+b
console.log(valeurab)
const c = 3.14 // float double
let isBlue = true // boolean
let t = [] //table 
let obj = { //liste 
}
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(isBlue))
console.log(typeof(t))
console.log(typeof(obj))*/
/*
let a = null

console.log(typeof(a))
*/
/*
let a = {"name" : "ahmed",'age':16}
let b = {"name" : "aziz",x:2}
let c = {"name" : "Chaker",y:"9"}
let person = {
    ...a,
    ...b,
    ...c
}

console.log(person)

let s =6
let n = 6
if (Number(s)==n && typeof(s)==typeof(n)){
    console.log(true)
}else {
    console.log(false)
}

if (1){
    console.log("truthy")
}else{
    console.log("falsy")

}
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
function hello(a){
    console.log("hello !")
}

console.log(hello)
// arrow function
let sayHello  = ()=>{
    console.log("Hello ! ")
}
hello()
sayHello()
let t = [1,2,3]
t.map(e=>console.log(e*2))

function findNumber(t,n){
    for (let i=0;i<t.length;i++){
        if(t[i]==n){
            return true
        }
    }
    return false
}


console.log(findNumber([1,2,3,4,8],8)) //true
console.log(findNumber([1,2,3,4,8],9))// false
console.log(findNumber([1,2,3,4,8],1)) //true



function add(x,y){
    return x + y
}
function mult(x,y){
    return x*y
}
function calculate(x,y,callback){
    const result = callback(x,y)

    console.log("result is : "+result)
}

calculate(5,6,mult)
console.log(t.filter(function(element){
    if (element==3){
        return true
    }else {
        return false
    }
}))
let t = [1,2,3]

console.log(t.filter(n=>n==9))
let newT = t.map((element)=>element*2)
console.log(newT)

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
*/

let user= {
    first:"ahmed",
    last:"jbeli",
    email:'ahmed.jbeli@gmail.com',
    age : 19,
    isActive : false
}
/*
let first = user.first
let last = user.last
let age = user.age
let email = user.email*/
//object destructuring ES6
let {email,...userDetails}=user
console.log(email,userDetails)
let t = [1,2,3]
let firstElement  = t[0]
let secondElement  = t[1]
let thirdElement  = t[2]
let [one,...other] = t
let t1 = [1,2,3]
let t2 = [...t1]
t2[0]=5
console.log(t1,t2)
console.log(one,other)

function addToList(){
    console.log(others)
    
}
addToList(t,1,2,3,[1,2,3])