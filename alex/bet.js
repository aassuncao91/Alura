function aposta (valor, odd) {
    const resultado = valor * odd
    return resultado
}

const valor = 100
const odd = 1.6
const resultado = "S";
const profit = aposta(valor,odd)

console.log(profit)

if (resultado == "N") {
    console.log("Parabéns, você ganhou.")
}
else {
    console.log("Não foi dessa vez")
}
