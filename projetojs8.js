function Dardesconto(valor, desconto){
        return(valor - (valor * desconto / 100))       
}

function aplicarjuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const preço = 100;
const formapagamento = 4;

if (formapagamento === 1) {
    console.log(Dardesconto(preço, 10))
} else if (formapagamento === 2){
    console.log(Dardesconto(preço, 15))
} else if (formapagamento === 3){
    console.log(preço)
} else {
    console.log(aplicarjuros(preço, 10))
}
