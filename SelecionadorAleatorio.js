function escolheritensaleatorios(items) {
    if (items.length === 0) return undefined;
    return items[Math.floor(Math.random() * items.length)];
}

const cores = ["azul", "verde", "laranja"];
console.log(`Cor aleatoria do dia: ${escolheritensaleatorios(cores)}`);
