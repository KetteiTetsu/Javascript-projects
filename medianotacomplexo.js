const entrada = [9];
let i = 0

function gets() {
  const valor = entrada[i];
  i++;
  return valor
}

function print(texto) {
  console.log(texto);
}

const media = gets();

if (media < 5 ){
    print("reprovado")
} else if (media >= 5 && media <= 7) {
    print("recuperação")
} else if (media > 7){
    print("aprovado")
} else {
    print("numero invalido")
}
