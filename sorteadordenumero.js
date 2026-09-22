const entrada = [5, 50, 10, 98, 23];
let i = 0;

function gets () {
    const valor = entrada[i];
    i = i + 1
    return valor;
}

const numerossorteados = []

for (let i = 0; i < 5; i++) {
    const numerossorteado = gets()
    numerossorteados.push(numerossorteado);
}

let maiorvalor = 0;

for (let i = 0; i < numerossorteados.length; i++) {
    const numerosorteado = numerossorteados[i];
    if (numerosorteado > maiorvalor) {
        maiorvalor = numerosorteado;
    }
}

console.log(maiorvalor);
