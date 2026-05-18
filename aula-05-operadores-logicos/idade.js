// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// Pede para o usuário digitar a idade do visitante
let idade = parseInt(prompt("Informe a idade do visitante: "));
console.log("");

// Verifica se a idade é menor que 5
// OU se a idade é maior ou igual a 65
if (idade < 5 || idade >= 65) {
    console.log("Entrada gratuita!");
} else {
    // Se nenhuma condição for verdadeira, o visitante paga ingresso
    console.log("Visitante paga ingresso!");
}