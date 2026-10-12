let contadorLogs = 0;

function contarlog(mensagem) {
    contadorLogs++;
    console.log(`Número de logs: ${contadorLogs} | ${mensagem}`);
}

contarlog("teste1");
contarlog("teste2");
contarlog("teste3");
