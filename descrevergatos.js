class Gato {
  constructor(nome, raca, idade, cor) {
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
    this.cor = cor;
  }
 
  miar() {
    return `${this.nome} diz: Miau!`;
  }
 
  dormir() {
    return `${this.nome} está dormindo, como fazem a maior parte do dia.`;
  }
 
  brincar() {
    return `${this.nome} está brincando com um novelo de lã.`;
  }
 
  descrever() {
    return `${this.nome} é um gato da raça ${this.raca}, tem ${this.idade} ano(s) e é da cor ${this.cor}.`;
  }
}
 
function criarGato(nome, raca, idade, cor) {
  return new Gato(nome, raca, idade, cor);
}
 
function apresentarGatos(gatos) {
  return gatos.map(gato => gato.descrever()).join("\n");
}
 
const felix = criarGato("Felix", "Siamês", 3, "branco e marrom");
const mimi = criarGato("Mimi", "Persa", 5, "cinza");
 
console.log(apresentarGatos([felix, mimi]));
console.log(felix.miar());
console.log(mimi.brincar());
console.log(felix.dormir());
