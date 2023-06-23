/* Calcular e média de idade entre quatro pessoas
sendo que daqui a trinta anos, acima de 80 morre e abaixo vive. */

function mediaMorte (id1, id2, id3, id4) {
    const idadeMedia = (id1+id2+id3+id4)/4
    return idadeMedia
}

const id1 = 58
const id2 = 30
const id3 = 28
const id4 = 90
const media = mediaMorte (id1, id2, id3, id4)

console.log(media)

if (media <= 80 - 30) { 
    console.log("Todos vivem.")
} else {
    console.log("Todos morrem.")
}