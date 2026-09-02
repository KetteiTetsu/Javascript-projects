const nota1 = 3
const nota2 = 3
const nota3 = 3
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5){
    console.log("reprovação")
} else if (media > 5 && media < 7) {
    console.log("Recuperação")    
} else if (media > 7){
    console.log("aprovado")
}
