/*
// Funções em JS

//Funcçoes são bloos de códigos reutilizaveis

//função simples
console.log("Funçaõ simples")
function saudacao(){
    console.log("Seja bem vindo")
}
saudacao()


//Função com parametro
let nomeUser = prompt("Qual é o seu nome?")
function saudacao2(nome){
    console.log(`Seja bem vindo ${nome}`)
}

saudacao2 (nomeUser)


//exemplo2 - função com parametro e retorno
function soma (num1, num2){
    return num1 + num2
}

console.log(`A soma dos numeros é: ${soma(5,3)}`)

*/
//Exemplo3 - Arrow Function

let soma = (num1, num2) =>{
    return num1 + num2
}

console.log(`A soma com arrow function é: ${soma(10,10)}`)