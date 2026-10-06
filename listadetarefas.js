const fs = require("fs");
const readline = require("readline");

const arquivoTarefas = "tarefas.json";
let tarefasAfazeres = [];

function carregarTarefas() {
    try {
        const dados = fs.readFileSync(arquivoTarefas, "utf8");
        tarefasAfazeres = JSON.parse(dados);
    } catch (erro) {
        tarefasAfazeres = [];
    }
}

function salvarTarefas() {
    fs.writeFileSync(arquivoTarefas, JSON.stringify(tarefasAfazeres, null, 2));
}

function adicionarTarefa(tarefa) {
    if (!tarefa.trim()) {
        console.log("Digite uma tarefa válida.");
        return;
    }

    tarefasAfazeres.push(tarefa);
    salvarTarefas();
    console.log(`Tarefa "${tarefa}" adicionada com sucesso!`);
}

function removerTarefa(indice) {
    if (indice < 0 || indice >= tarefasAfazeres.length) {
        console.log("Número de tarefa inválido.");
        return;
    }

    const tarefaRemovida = tarefasAfazeres.splice(indice, 1)[0];
    salvarTarefas();
    console.log(`Tarefa "${tarefaRemovida}" removida com sucesso!`);
}

function listarTarefas() {
    if (tarefasAfazeres.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    console.log("\nLista de tarefas:");
    tarefasAfazeres.forEach((tarefa, indice) => {
        console.log(`${indice + 1}. ${tarefa}`);
    });
}

function mostrarMenu() {
    console.log("\n=== Menu de tarefas ===");
    console.log("1. Adicionar tarefa");
    console.log("2. Listar tarefas");
    console.log("3. Remover tarefa");
    console.log("0. Sair");
}

function iniciarMenu() {
    carregarTarefas();
    const terminal = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function perguntarOpcao() {
        mostrarMenu();
        terminal.question("Escolha uma opção: ", (opcao) => {
            switch (opcao.trim()) {
                case "1":
                    terminal.question("Digite a tarefa: ", (tarefa) => {
                        adicionarTarefa(tarefa);
                        perguntarOpcao();
                    });
                    break;

                case "2":
                    listarTarefas();
                    perguntarOpcao();
                    break;

                case "3":
                    listarTarefas();
                    terminal.question("Digite o número da tarefa para remover: ", (indice) => {
                        removerTarefa(Number(indice) - 1);
                        perguntarOpcao();
                    });
                    break;

                case "0":
                    console.log("Até logo!");
                    terminal.close();
                    break;

                default:
                    console.log("Opção inválida.");
                    perguntarOpcao();
                    break;
            }
        });
    }

    perguntarOpcao();
}

iniciarMenu();
