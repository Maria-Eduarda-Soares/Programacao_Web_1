alert("Bem-Vindo a aula de Switch Case")
let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

let escolha = Number(prompt("Digite 1 para soma e 2 para multiplicação"))

switch(escolha){
    case 1:
        let soma = num1 + num2
        console.log(`Você escolheu soma. O valor da soma é: ${soma}`) //com interpolação
        break
    case 2: 
        let multi = num1 * num2
        console.log(`Você escolheu multiplicação. O valor do produto é: ${multi}`) //com interpolação
        break 
    default:
         console.log("ERRO! Escolha invalida")    
}
