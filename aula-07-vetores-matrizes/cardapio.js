const prompt = require('prompt-sync')();

let pratos = [];
let precos = [];

for (let i = 0; i < 4; i++) {
    pratos[i] = prompt(`Digite o nome do prato ${i + 1}: `);
    precos[i] = parseFloat(prompt(`Digite o preço do prato ${i + 1}: `));
}

console.log("\n=== CARDÁPIO ===");

for (let i = 0; i < 4; i++) {
    console.log(`${i + 1}. ${pratos[i]} - R$ ${precos[i].toFixed(2)}`);
}

let opcao = parseInt(prompt("\nEscolha um prato (1 a 4): "));

if (opcao >= 1 && opcao <= 4) {
    console.log(`\nVocê escolheu: ${pratos[opcao - 1]}`);
    console.log(`Preço: R$ ${precos[opcao - 1].toFixed(2)}`);
} else {
    console.log("Opção inválida!");
}