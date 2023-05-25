// Funções

// Definição da função

/*

function saudacao() {
    console.log('Olá, seja bem vinda(o) ao nosso curso de JavaScript');
}
saudacao();
 */
/*
function saudacao(nome, curso) {
    console.log(`Olá, ${nome}! seja bem vinda(o) ao nosso curso de ${curso}`);
}
saudacao('Iarlei', 'HTML & CSS');

*/
/*
function soma(numero1, numero2) {
    console.log('Soma =', numero1 + numero2);
}
soma(10,20);
*/
/*
function soma(numero1, numero2) {
    console.log('Qualquer coisa');
    return numero1 + numero2;
}
const resultado = soma(10, 20);
console.log(resultado / 2);
*/
function maiorDoQue50(numero) {
    if (numero > 50) {
        console.log('Número maior do que 50. O número é:', numero);
        return true;
        
    }
    console.log('Número menor do que 50. O número é:', numero);
    return false;
   
}
maiorDoQue50(10);