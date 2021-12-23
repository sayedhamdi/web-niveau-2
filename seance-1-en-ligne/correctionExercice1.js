
// exercice 1 
break
function entierEnChaine(x){
    if (typeof(x) !="number"){
        console.log("Erreur conversion impossible")
    }else{
        let resultat = x+""
        console.log(typeof(resultat))
        console.log(resultat)
    }
}
// test Exercice 1

entierEnChaine(5)
entierEnChaine(9.4)
entierEnChaine(56) // résultat : “56”
entierEnChaine(500) // résultat : “500”
entierEnChaine({x:'15'}) // Erreur conversion impossible

// difference entre break et return 

function afficherDixPremiers(){
    for (let i=0;i<10;i++){
        if(i>7){
            return
        }
        console.log("i = "+i)
    }
    console.log("kamlana affichina kolchay")
}
for (let i =0;i<5;i++){
    return
}
afficherDixPremiers()
// map t3awedh el boucle for

