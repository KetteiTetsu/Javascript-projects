class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcularIMC();
    }

    descrever () {
        console.log(`${this.nome} possui ${this.peso}kg e ${this.altura}cm de altura e seu imc é de ${this.imc} cujo é ${this.classificarIMC()}`)
    }


    calcularIMC () {
        return this.imc = this.peso / (this.altura * this.altura)
    }

    classificarIMC () {
        if (this.imc < 18.5) {
            return "abaixo do peso"
        } else if (this.imc >= 18.5 && this.imc < 25) {
            return "peso normal"
        } else if (this.imc >= 25 && this.imc < 30) {
            return "acima do peso"
        } else if (this.imc >= 30 && this.imc < 40) {
            return "quase obesidade"
        } else if (this.imc >= 40) {
            return "obesidade"
        }
    }
}


const renan = new Pessoa('renan', 100, 1.70)
renan.descrever()
const victor = new Pessoa ('victor', 80, 1.90)
victor.descrever()
victor.classificarIMC()
