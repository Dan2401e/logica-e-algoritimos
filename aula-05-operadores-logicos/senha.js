// Introdução para poder rodar
// npm install prompt-sync

// importar módulo
const prompt = require ('prompt-sync')();

// Lógica
let nomeUsuario = prompt("Informe o nome do usuário: ");
let senha = prompt("Informe a senha: ");
console.log(""); // Linha em branco

// Referências
let loginBanco = "Daniel";
let senhaBanco = "2401";

// Condicional SE + E
if (nomeUsuario === loginBanco && senha === senhaBanco) {
    console.log("Acesso autoriza!");
} else {
    console.log("Acesso negado!");
}