// Importação da biblioteca para rodar
const readline = require('prompt-sync')();

console.log('--- Vetores com loop ---');
console.log('Digite o nome de 5 filmes abaixo:');
console.log('');

// Criando um vetor para armazenar os valores
const filmes = [];

// Estrutura de repetição para coletar o nome dos 5 filmes
for (let i = 0; i < 5; i++) {
    filmes[i] = prompt('Digite o nome do ${i + 1}º filme: ');
}

// Exibindo os filmes digitados
console.log('________________________________');
console.log('')

for (let i = 0; i <5; i++) {
    console.log('Nome do ${i + 1}º filme digitado: ${filmes[i]}');
}