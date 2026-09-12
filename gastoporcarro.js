class Carro {
    marca;
    cor;
    gastomedioporkm;

    constructor (marca, cor, gastomedioporkm){
        this.marca = marca
        this.cor = cor
        this.gastomedioporkm = gastomedioporkm;
    }

    calculargastodepercurso(distancia,precocombustivel,gastomedioporkm){
        return distancia * this.gastomedioporkm * precocombustivel;
    } 
}

const uno = new Carro('fiat', 'azul', 1/12);
console.log(uno.calculargastodepercurso(70, 5));
const celta = new Carro('celta', 'cinza', 1,16);
console.log(celta.calculargastodepercurso(70, 5))
