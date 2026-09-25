const entrada = [5, 3, 4, 1, 10, 8];

function print(texto) {
  console.log(texto);
}

const numerospares = entrada.filter(n => n % 2 === 0)
const numerosimpares = entrada.filter(n => n % 2 !== 0)

print(`entrada de numeros: ${entrada}`)
print(`numeros que são impares: ${numerosimpares}`)
print(`numeros que são pares: ${numerospares}`)

let menorimpar = numerosimpares[0]

for (let i = 1; i < numerosimpares.length; i++) {
    if (numerosimpares[i] < menorimpar) {
        menorimpar = numerosimpares[i]
    }    
}

print(`menor numero impar: ${menorimpar}`)

let maiorpar = numerospares[0]

for (let i = 1; i < numerospares.length; i++) {
    if (numerospares[i] > maiorpar) {
        maiorpar = numerospares[i]
    }
}

print(`menor numero impar: ${maiorpar}`)
