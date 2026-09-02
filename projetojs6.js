function juros(valor, porcentjuros) {
    const valornovo = (porcentjuros / 100) * valor
    return valor + valornovo
}

console.log(juros(20, 10))
console.log(juros(20, 15))
console.log(juros(20, 50))
