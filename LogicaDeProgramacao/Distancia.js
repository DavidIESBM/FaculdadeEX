const prompt = require ('prompt-sync') ({sigint: true})

var n1 = parseInt(prompt("Digite um número: "))
var n2 = parseInt(prompt("Digite outro número: "))
var c ;

if ( isNaN(n1) || isNaN(n2)) {
    console.log("Digite um número válido!")
} else {
    c = n1 - n2;
    console.log(`A distância do número ${n1} até ${n2} é ${c}`)
}

