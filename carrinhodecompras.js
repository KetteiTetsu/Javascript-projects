class CarrinhoDeCompras {
  #itens = [];

  adicionarItem(nome, preco, quantidade = 1) {
    this.#itens.push({ nome, preco, quantidade });
    return this;
  }

  removerItem(nome) {
    this.#itens = this.#itens.filter(item => item.nome !== nome);
    return this;
  }

  get total() {
    return this.#itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  }

  get quantidadeDeItens() {
    return this.#itens.length;
  }
}

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem("Livro", 12.5).adicionarItem("Caneta", 1.2, 5).adicionarItem("Mochila", 30);

console.log(carrinho.quantidadeDeItens);
console.log(carrinho.total);

carrinho.removerItem("Caneta");
console.log(carrinho.total);

function somarTudo(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
console.log(somarTudo(1, 2, 3, 4));

function multiplicador(fator) {
  return (numero) => numero * fator;
}
const dobro = multiplicador(2);
console.log(dobro(7));
