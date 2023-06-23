

// var -> //O JS procura todas as variáveis do tipo e carrega priemiro
// pode usar ela antes de declarar
// var é meio solto

/* var altura = 5;
var comprimento = 7;

area = altura * comprimento;

 console.log(area)

 var area; */

 // let - o Javascript segue a ordem

/*  let forma = "retangulo";
 let altura = 5;
 let comprimento = 7;
 let area;

 if (forma === "retangulo"){
    area = altura * comprimento;
 } else {
    area = (altura * comprimento) / 2;
 }

  console.log(area) */

// const uma vez que coloca no programa nao consegue alterar

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area; //é um valor que vai ser alterado, então usar o let.
// sempre declarar o valor antes de ser utilizado.

if (forma === "quadrado"){
    area = altura * comprimento;
 } else {
    area = (altura * comprimento) / 2;
 }

console.log(area)

