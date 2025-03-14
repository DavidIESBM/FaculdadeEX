const prompt = require ('prompt-sync') ({sigint: true})

var n1 = parseInt(prompt("Digite um número: "));
var n2 = parseInt(prompt("Digite outro número: "));
var n3 = parseInt(prompt("Digite mais um número: "));
var conta ;

conta = (n1 + n2 + n3) / 3 ;

console.log(`A média aritmética de ${n1}, ${n2}, ${n3} é`, conta.toFixed(2));