// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// Pergunta a idade do candidato
let idade = parseInt(prompt("Informe a idade do candidato: "));

// Pergunta se o candidato sabe JavaScript
let javascript = prompt("Sabe JavaScript? (s/n): ");

// Pergunta se o candidato sabe Python
let python = prompt("Sabe Python? (s/n): ");
console.log("");

// Verifica se o candidato possui 18 anos ou mais
// E também verifica se sabe JavaScript OU Python
if (idade >= 18 && (javascript === "s" || python === "s")) {
    // Caso todas as condições sejam verdadeiras
    console.log("Currículo aceito!");
} else {
    // Caso não atenda aos requisitos
    console.log("Currículo recusado!");
}