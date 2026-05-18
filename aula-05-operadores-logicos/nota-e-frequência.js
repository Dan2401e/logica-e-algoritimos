// importar módulo
const prompt = require('prompt-sync')();

// Leitura da nota e da frequência do aluno
let nota = parseFloat(prompt("Informe a nota do aluno: "));
let frequencia = parseFloat(prompt("Informe a frequência do aluno (%): "));
console.log(""); // Linha em branco

// Verificação das condições
if (nota >= 7.0 && frequencia >= 75) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}