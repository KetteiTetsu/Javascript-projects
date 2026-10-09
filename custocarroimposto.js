const salarioanual = 35000;

const blocos = Math.floor(salarioanual / 2000);
const imposto = 0.1 + (blocos * 0.05);  

class carros {
    constructor(marca, modelo, ano, preço) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preço = preço;
    }
}

const carro1 = new carros("Toyota", "Corolla", 2020, 20000);
const carro2 = new carros("Honda", "Civic", 2019, 18000);
const carro3 = new carros("Ford", "Mustang", 2021, 30000);

function conseguecomprarocarro(salarioanual, carro) {
    carro.preço * imposto <= salarioanual ? console.log(`Você pode comprar o carro ${carro.marca} ${carro.modelo} do ano ${carro.ano}`) : console.log(`Você não pode comprar o carro ${carro.marca} ${carro.modelo}`);
}

conseguecomprarocarro(salarioanual, carro1);
conseguecomprarocarro(salarioanual, carro2);
conseguecomprarocarro(salarioanual, carro3);
