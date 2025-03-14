const prompt = require('prompt-sync') ({sigint: true})

var n = parseInt(prompt("Digite um número: "))

if ( n > 0 ) {
    console.log(`O número ${n} é POSITIVO`)

} else if (n < 0) {
    console.log(`O número ${n} é NEGATIVO`)

} else {
    console.log(`O número ${n} é ZERO`)
}