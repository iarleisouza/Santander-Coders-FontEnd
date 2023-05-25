// > LAÇOS CONDICIONAIS
// instalar biblioteca para interção do usuário no javascript
// npm install readline-sync (instala apenas no diretório do projeto)
// Instação em todo o S.O para funcionar em qualquer projeto usa-se o -g
// npm install -g readline-sync
const input = require('readline-sync'); // importando biblioteca.

const numero_sorteado = 5;

let numero = Number( input.question('Qual numero voce escolhe? '));

while (numero !== numero_sorteado) {
    console.log('Você errou o número. Tente novamente...');

    numero = Number (input.question('Qual numero voce escolhe? '))
}
console.log('Você acertou!!');