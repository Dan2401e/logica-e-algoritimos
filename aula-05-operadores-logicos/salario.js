// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// Pergunta o salário do cliente
let salario = parseFloat(prompt("Informe o salário do cliente: "));

// Pergunta se o cliente possui fiador
let fiador = prompt("Possui fiador? (s/n): ");

// Pergunta se o cliente tem nome sujo no Serasa
let serasa = prompt("Tem nome sujo no Serasa? (s/n): ");
console.log("");

// Verifica se:
// O salário é maior que 2000 OU possui fiador
// E também verifica se NÃO possui nome sujo
if ((salario > 2000 || fiador === "s") && !(serasa === "s")) {
    // Caso atenda às condições do empréstimo
    console.log("Empréstimo aprovado!");
} else {
    // Caso não atenda às condições
    console.log("Empréstimo negado!");
}