// > Operadores Booleanos

//Igualdade:      == (ou ===)
//Desigualdade:   != (ou !==)
//Maior que :     >
//Maior ou igual: >=
//Menor que:      <
//Menor ou igual: <=

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log( numero == 10);
console.log(10 == '10');
console.log(10 === '10')// recomendação de sempre usar os 3 iguais (===) para não dar bug

console.clear();// limpa console

console.log(1 != 10);
console.log(10 != '10');
console.log(10 !== '10');//recomendação de sempre usar o exclamação e 2 iguais (!==) para não dar bug

// - Conjuções /lógicas

// AND => &&

let idade = 10;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log('Posso dirigir?', possoDirigir);

// OR => || 
 idade = 40;
  const votoFacultativo = idade < 18 || idade >= 70;

  // NOT ==> !

  const estouGostandoDoCurso = false;
  console.log(!estouGostandoDoCurso);