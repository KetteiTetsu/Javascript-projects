// 0 = pedra
// 1 = papel
// 2 = tesoura
let escolhadojogador = 1
let escolhadocomputador = Math.floor(Math.random() * 2)

console.log("Voce escolheu: " + escolhadojogador);
console.log("Escolha do computador: " + escolhadocomputador);


switch (escolhadojogador) {
    case 0:
        // jogador escolheu pedra
        if (escolhadocomputador === 0) {
            console.log("Empate!");
        } else if (escolhadocomputador === 1) {
            console.log("Computador venceu!");
        } else {
            console.log("Jogador venceu!");
        }
        break;
    case 1:
        // jogador escolheu papel
        if (escolhadocomputador === 0) {
            console.log("Jogador venceu!");
        } else if (escolhadocomputador === 1) {
            console.log("Empate!");
        } else {
            console.log("Computador venceu!");
        }
        break;
    case 2:
        // jogador escolheu tesoura
        if (escolhadocomputador === 0) {
            console.log("Computador venceu!");
        } else if (escolhadocomputador === 1) {
            console.log("Jogador venceu!");
        } else {
            console.log("Empate!");
        }
        break;
}
