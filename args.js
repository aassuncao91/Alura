// parametros da função 


/*console.log(soma(2, 2)) //recebendo dois argumentos

//os parâmetros vão seguir a ordem

/*function nomeIdade (nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade('Alex', 32))*/

// boa prática passar poucos argumentos para função
// Arrow function com mais de uma linha
function soma (numero1, numero2){
    return numero1 + numero2
}

function multiplica(numero1 = 1, numero2 = 1) { // definindo valor padrão no argumento -1 
    return numero1 * numero2 
}

//somou os numeros e depois multiplicou = 54
console.log(multiplica(soma(4,5)))


// qualquer número x1 é igual a ele mesmo (=1)