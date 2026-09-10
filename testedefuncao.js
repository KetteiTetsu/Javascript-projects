function escrevaseunome(nome) {
    return 'seu nome é ' + nome;
}

function verificaridade(idade) {
    if (idade >= 18) {
        console.log(escrevaseunome('tiago') + ', você é maior de idade')
    } else {
        console.log('é menor de idade')
    }
}

verificaridade(20)
