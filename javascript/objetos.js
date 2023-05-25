// Objetos

// Como criar um objeto no JavaScript
   
let pessoa = {
    'nome-da-pessoa': 'Iarlei',
    nome: 'Carlos',
    idade: 26,
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa['nome']);
    console.log(pessoa.idade);

//Como adicionar um par chave-valor?
pessoa.altura = 1.77
console.log(pessoa)
//Como remover um par chave-valor?
delete pessoa.altura
console.log(pessoa);

// Como percorrer?
console.clear();

for (let chave in pessoa) {
    console.log(chave);
}