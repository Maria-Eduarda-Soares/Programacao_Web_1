/*
A diferença do While e Do While
1- While
    1.1 - While verifica a condição antes de entar no loop
    1.2 - tem um contador e variavel de escape do loop
2- Do While
    2.1 -  primeiro executa o loop, depois testa
    2.2 - Usado quando se precisa executar o loop pelo menos 1 vez
    2.3 - escapa do loop apenas se a variavel ateneder a condição 
*/

/*While
let num1 =0
while(num1 <= 5){
    console.log(`${(num1 +1)}° rodada`)
    num1++
}
 */

//exemplo 2 Tabuada
let num1 = 0
let numFixo = Number(prompt("Digite a tabuada que deseja saber o resultado"))
while(num1 <= 10){
    console.log(`${numFixo} X ${num1} = ${(numFixo*num1)}` )
    num1++
}