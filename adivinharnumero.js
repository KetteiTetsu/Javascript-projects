numeroaleatorio = (59)
palpitedenumero = (10)

console.log("adivinhe um numero entre 1 e 100");

if (palpitedenumero < numeroaleatorio) {
    console.log("Escolha um numero menor");
} else if (palpitedenumero > numeroaleatorio) {
    console.log("Escolha um numero maior");
} else {
    console.log('parabens voce acerto o numero, o numero era' + numeroaleatorio);
}
