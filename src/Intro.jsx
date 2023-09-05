
// let 
// const
function filtra(x){
    if(x<12)
        return true
    else 
        return false
}

let a=10
a="ciao"

console.log(a)

const array=[10,11,12]
console.log(array)

array.filter(filtra)
array.filter(x=>x<12)

array.map((x) => x.toString())

const bb = {
    bella: "ciao",
    c: {
        a: 1
    }
}
<stampa x={bb.bella}> 

console.log(bb.bella)

function stampa(testo){
    console.log(testo.bella)
}
