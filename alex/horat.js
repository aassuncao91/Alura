

function Horatra(salariomensal, horasSem, qtsemana) {
    const resultado = salariomensal/(horasSem*qtsemana)
    return resultado;
}

const salariomensal = 2500
const horasSem = 40
const qtsemana = 4
const valorhora = Horatra(salariomensal, horasSem, qtsemana)

console.log(valorhora)
console.log(typeof(valorhora))