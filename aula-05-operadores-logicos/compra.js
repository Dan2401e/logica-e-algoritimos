// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// Pergunta o valor da compra
let valorCompra = parseFloat(prompt("Informe o valor da compra: "));

// Pergunta se o cliente é VIP
let vip = prompt("O cliente é VIP? (s/n): ");

// Pergunta se o cliente possui cupom de desconto
let cupom = prompt("Possui cupom? (s/n): ");

// Pergunta se o cliente possui parcelas atrasadas
let atrasadas = prompt("Possui parcelas atrasadas? (s/n): ");
console.log("");

// Verifica o Cenário A:
// Cliente VIP E compra maior que 500
// OU verifica o Cenário B:
// Possui cupom E NÃO possui parcelas atrasadas
if ((vip === "s" && valorCompra > 500) || 
    (cupom === "s" && !(atrasadas === "s"))) {
    // Caso uma das condições seja verdadeira
    console.log("Super Desconto aplicado!");
} else {
    // Caso nenhuma condição seja atendida
    console.log("Desconto negado!");
}