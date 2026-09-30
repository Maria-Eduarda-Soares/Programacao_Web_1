/*
Operadores Logicos

&&  -> (and/E) logico
||  -> (or/OU) logico
!  ->  (NOT/NÃo) logico
*/

//exemplos simples

let num1 = 10
let num2 = 15
let num3 = 2

console.log("Condiçoes simples")

if(num1 >= num2){
    console.log("Entrou no IF")
}else{
    console.log("(FALSO!) NÃO ENTROU NO IF")
}

//exemplo composto 
console.log("Condiçoes Compostas")

if((num1 >= num2) && (num1 != num3)){
    console.log("Entrou no IF")
}else{
    console.log("(FALSO!) NÃO ENTROU NO IF")
}

//exemplo com 3 condições 
console.log("Condiçoes com 3 situações")

if(((num1 >= num2) && (num1 != num3)) || (num1 != num3)){
    console.log("Entrou no IF")
}else{
    console.log("(FALSO!) NÃO ENTROU NO IF")
}


//exemplo simples negada
console.log("Condiçoes simples negada")
if(!(num1 >= num2)){
    console.log("Entrou no IF")
}else{
    console.log("(FALSO!) NÃO ENTROU NO IF")
}