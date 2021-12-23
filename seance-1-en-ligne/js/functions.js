function add(x,y){
   return x+y
}

const add1 = (x,y)=>x+y 

const add2 = (x,y)=>{
    console("add")
    return x+y
}

function multiply(x,y){
    return x*y
}


// theroy 

// callback function 
// c'est qu'on passe a une autre fonction qu'on execute dedans 

function calculate(x,y,callback){
    let resultat = callback(x,y)
    console.log(resultat)
}
calculate(6,9,add)

let users = [
    {name:"ahmed",lastname:"1"},
    {name:"khalil",lastname:"2"},
    {name:"aziz",lastname:"3"},
    {name:"aziz",lastname:"4"},
]
/*
const lesAzizs = users.map(user=>{
    let newUser = {...user}
    //spread
    newUser.name.toUpperCase()
    return newUser
})*/
const lesAzizs = users.filter(user=>user.name=="aziz")
// high order methods
/*
for (let i = 0;i<users.length;i++){
    if (users[i].name=="aziz"){
        lesAzizs.push(users[i])
    }
}*/
// procedure pas de valeur de retour

/*users.forEach(user=> {
    if (user.name=="aziz"){
        lesAzizs.push(user)
    }
})
*/
console.log(lesAzizs)
users.forEach(user=>{

    console.log(`Hello ${user.name}`)
})
// readability // syntax yecer ywali s3ib bech ttji tbadel wala ta9ra haja

// manipulation des donnés facilement.

for (let i = 0;i<users.length;i++){
    
    console.log(users[i].name)
}