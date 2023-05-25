// > Arrays - PARTE 2 - Métodos de arrays

const arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// Fatiamento: slice 

console.log(arr1.slice(0, 2)); // ele pega o indice de 0 a 2 não pega o indice 2
console.log(arr1.slice(2)); // ele pega o inicio e o fim, ele entende que como você não definiu o fim ele pega até o fim


// Adicionando elementos: push | unshift
console.log('Antes de adicionar:', arr2);

arr2.push(10, 20, 30);
arr2.push(40); // sempre joga os elementos no final do array
console.log('Depois de adicionar', arr2);

// incluir no inicio do array
console.log('Antes de adicionar com unshift', arr2);

arr2.unshift(0);
console.log('Depois de adicionar com unshift:', arr2);
console.clear();


// Removendo elementos: pop | shift
console.log('Antes de remover com o pop:', arr2);
arr2.pop();

console.log('Depois de remover com o pop:', arr2);
const elementoRemovido = arr2.pop();

console.log('Depois de remover com o pop:', arr2);
console.log('O elemento removido foi:', elementoRemovido);

console.log('Antes de remover com o shift:', arr2);
arr2.shift();

console.log('Depois de remover com o shift:', arr2);
// concatenando arrays: concat

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

// Buscando elementos: indexof | lastIndexOf
console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34);// se tiver mais de um indice igual ele pega sempre o primeiro
// se não existir o elemento no array o indice sera -1.

console.log(indiceDoElemento34);

let arr3 = [1, 2, 3, 3, 5, 3];

console.log(arr3.lastIndexOf(3)) // pega o ultimo elemento de tras pra frente

// Descobindo a existência de um elemento: includes

console.log(arr1);

console.log(arr1.includes(10));

console.clear();

// Invertendo arrays: reverse

console.log('arr1 normal:', arr1);

const arr1Invertido = arr1.reverse();
console.log('arr1 invertido:', arr1Invertido);