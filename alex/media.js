function media (nota1, nota2) {
    var media = (nota1+nota2)/2
    return media;
}

const nota1 = 10
const nota2 = 3
const mediafinal = media(nota1, nota2);
console.log(mediafinal)

if (mediafinal >= 7) {
    console.log("Aprovado")
}
else {
    console.log("Reprovado")
}

