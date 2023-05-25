// > Coerção (CONVERSÃO DE TIPOS

// - 1. Coerção Explícita (Manual)
const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('123456'));
console.log(parseFloat('1234'));
console.log(parseInt('2323232'));
console.log(Boolean(1)); // acima de zero 0 é true verdadeiro
console.log(Boolean(0)); // abaixo de zero é false falso.

// - 2. Coerção Implícita (Automática)

console.log('10' + 1); // concatena => 11
console.log('10' -1); // subtrai => 10
console.log(10 * '3'); // Multiplica => 30
console.log(10 - 'asasas'); // exibe NaN => 'asasas' Não é um numero

// Outros Exemplos

// Qual será a saída desse código?
let n = 1 + "1"; // => "11"

n = n - 1; // => 10

console.log(n);

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); // => 95

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); // => 5234

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5"); // => 15 

