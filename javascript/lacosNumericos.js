// >> Laço Numérico: FOR

const input = require('readline-sync');

// O problema
/*
const nota1 = Number(input.question('Informe a nota 1: '));
const nota2 = Number(input.question('Informe a nota 2: '));
const nota3 = Number(input.question('Informe a nota 3: '));

let media = (nota1 + nota2 + nota3) / 3;
*/
// Acumulador
let acumulador = 0;

acumulador = acumulador + 10;

acumulador += 2;

acumulador++

console.log(acumulador);


// Estrutura for
let nota = 0;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Infrome a nota ${i} do aluno: `));

    soma = soma + nota;
}

console.log(`A média do aluno é ${soma / 3}`);
