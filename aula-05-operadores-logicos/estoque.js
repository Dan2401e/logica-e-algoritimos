// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// Pergunta ao usuário se o produto está esgotado
// O usuário deve responder com "s" para sim ou "n" para não
let estoque = prompt("O produto está esgotado? (s/n): ");
console.log("");

// Verifica se o produto NÃO está esgotado
if (estoque === "n") {
    // Mensagem informando que o produto pode ser vendido
    console.log("Produto disponível para venda");

    // Código de venda executa apenas se houver produto no estoque
    console.log("Venda realizada com sucesso!");
} else {
    // Caso o produto esteja esgotado
    console.log("Por favor, reabasteça o estoque");
}