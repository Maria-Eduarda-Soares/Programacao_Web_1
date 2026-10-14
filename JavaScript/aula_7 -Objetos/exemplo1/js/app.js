/*
Objetos armazenam dados organizados ex: prorpiedade e valor
ex01:
*/

let aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno.nome)

for(let chave in aluno){
    console.log(`${chave}: ${aluno[chave]}`)
}