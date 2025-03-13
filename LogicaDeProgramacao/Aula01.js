const prompt = require('prompt-sync') ({sigint: true});
var nome = prompt("Digite seu nome: ")
var sobrenome = prompt("Digite seu sobrenome: ")

console.log(`Seu nome é ${nome}`);
console.log(`Seu sobrenome é ${sobrenome}`);
console.log(`Seu nome completo é ${nome} ${sobrenome}`);
