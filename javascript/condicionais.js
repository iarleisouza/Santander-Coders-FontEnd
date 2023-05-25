// > Estruturas Condicionais 

const idade = 20;

if (idade >= 18) {
    console.log('Você é maior de idade!');
    } else {
        console.log('Você é menor de idade!');
    }

    /* 
        Se media >= 7, aprovado
        Se media < 7 e media >= 5, recuperação
        Se media < 5 , reprovado

        */
       console.clear(); // Limpando as saidas anteriores

       let media = 10;

       if (media >= 7) {
        console.log('Aprovada(o)');
       } else if (media >= 5) {
        console.log('Recuperação');
       } else {
        console.log('Reprovada(o)')
       }