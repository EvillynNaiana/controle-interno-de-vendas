// usado metodo array fin - selecao
let pessoa = [3, 4, 7, 9];
console.log(pessoa.find(element => element > 5)); 
pessoa = [{
        name: 'Evillyn',
        altura: 1.73
    },
    {
        name: 'André',
        altura: 1.85
    },
    {
        name: 'Isadora',
        altura: 1.70
    }
];
//usado metodo array sort 
const result = pessoa.find(pessoa => pessoa.name === 'Evillyn');
console.log(result);

const pessoas = ['Evillyn', 'André', 'Isadora', 'Noah'];
pessoas.sort()
console.log(pessoas);
