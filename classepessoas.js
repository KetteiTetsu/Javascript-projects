
class pessoas {
    nome;
    idade;

    descrever () {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const caio = new pessoas();
caio.nome = 'caio';
caio.idade = '10'

const renan = new pessoas();
renan.nome = 'renan';
renan.idade = '12'

renan.descrever();
caio.descrever();
