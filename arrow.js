/* function apresentarArrow (nome) {
    return `meu nome`
}

//arrow function - sempre vem com uma const e o nome da variável
const apresentarArrow = nome => `meu nome`;
const soma = (num1, num2) => num1 + num2;

//arrow function + de uma linha de instrução */

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'Somente números de 1 a 9'
    }   else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(5 , 9))