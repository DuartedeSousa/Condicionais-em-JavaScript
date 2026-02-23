// Desafio
let media = 8;
let faltas = 4;

if (media < 5 || faltas > 20) {
    console.log("Você foi reprovado");
} else if (7 > media && media >= 5){
    console.log("Recuperação");
} else if (media > 9 && faltas < 5){
    console.log("Aprovado com excelência");
} else if (media >= 7) {
    console.log("Aprovado");
}