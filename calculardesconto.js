/* se formapagamento for 1, o preço recebera 10% de desconto, 
caso 2 recebera 15% de desconto, se for 3 sera em duas vezes sem receber juros
 e por fim 4 sera preço normal porem com 10% de juro*/

const preço = 100;
const formapagamento = 2;

if (formapagamento === 1) {
    console.log(preço - (preço * 0.1))
} else if(formapagamento === 2) {
    console.log(preço - (preço * 0.15))
} else if(formapagamento === 3) {
    console.log(preço -(preço / 2))
} else if (formapagamento === 4)
    console.log(preço + (preço * 0.1))
