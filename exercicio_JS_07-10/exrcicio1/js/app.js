let nome = prompt("Digite o seu nome")
let num1 = Number(prompt("Digite a sua primeira nota"))
let num2 = Number(prompt("Digite a sua segunda nota"))
let md = (num1+num2)/2

if (md >= 6){
    alert (`O aluno ${nome} foi aprovado, parabens`)
}else{
    alert(`O aluno ${nome} foi reprovado`)
}