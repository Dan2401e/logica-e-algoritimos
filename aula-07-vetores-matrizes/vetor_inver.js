const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt(`Digite o número ${i + 1}: `));
}

console.log("\nNúmeros na ordem inversa:");

for (let i = 4; i >= 0; i--) {
    console.log(numeros[i]);
}