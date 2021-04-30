const winners = [
    {
        nome: 'Equipe Maravilinda',
        pais: 'Canadá',
    },
    {
        nome: 'Liga da Justiça',
        pais: 'EUA',
    },
    {
        nome: 'Mega Grupo',
        pais: 'Brasil',
    },
];

const vencedores = winners.map((equipe) => {
    return equipe.nome;
});

const paises = winners.map(function(local) {
    return local.pais;
});

console.log(vencedores);
console.log(paises);


/*
-------------------------Mostrando valores atuais do array-------------------------

const vencedores = winners.map((equipe) => {
    console.log(equipe);
});

const paises = winners.map(function (local) {
    console.log(local);
});
*/


