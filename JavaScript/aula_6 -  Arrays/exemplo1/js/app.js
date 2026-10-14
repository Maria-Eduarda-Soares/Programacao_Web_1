/*
Arrays em JavaScript

Variavel armazena apenas 1 valor
enquanto o array armazena multiplos valores
ex01:


let frutas = ["Maçã","Banana", "Uva"]

console.log(frutas)
console.log(frutas[0])


let frutas = ["Maçã","Banana", "Uva"]

console.log(frutas)
console.log(frutas[0])
for (let i = 0; i < frutas.length; i++)
    console.log(frutas [i] + "\n")
}


//metodos dos arrays

push () - Adiciona um item
pop( ) - remove o item final
shift() - remove o inicio
unshift() - adicona no inico
lenght ()- Conta o tamanho do array
*/

let frutas = ["Maçã","Banana", "Uva"]

frutas.push("Morango")
frutas.unshift("Goiaba")
frutas.pop()

for (let i = 0; i < frutas.length; i++){
    console.log(frutas [i] + "\n")
}
