class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}


function compararpessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem mesma idade`);
    }
}

const pedro = new Pessoa('pedro', 20);
const carlos = new Pessoa('carlos', 22);


compararpessoas(pedro, carlos);
