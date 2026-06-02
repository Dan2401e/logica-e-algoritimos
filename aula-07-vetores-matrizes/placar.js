const prompt = require('prompt-sync')();

let gols = [];
let maisDe3 = 0;
let ate3 = 0;

for (let i = 0; i < 5; i++) {
    gols[i] = parseInt(prompt(`Digite os gols do time ${i + 1}: `));
}

for (let i = 0; i < 5; i++) {
    if (gols[i] > 3) {
        maisDe3++;
    } else {
        ate3++;
    }
}

console.log(`\nTimes com mais de 3 gols: ${maisDe3}`);
console.log(`Times com 3 gols ou menos: ${ate3}`);