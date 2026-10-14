console.log("Bem vindo a nossa tabuada")
/*
//estrutura do loop for

Se divide em tres partes
1º parte - variavel contadora
2º parte - condição
3º parte - incremento

for (let i =1; i<=5; i++){
    console.log(`${i}º volta do loop for`)
}

console.log(`Calculadora`)


alert ("Bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o número da sua tabuada"))
for(let i = 0; i<=10; i++){
    alert(`${escolha} x ${i} = ${escolha*i}\n`)

}


//Controles de Loops

//Break para o loop quando atender um acondição
alert ("Bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o número da sua tabuada"))
for(let i = 0; i<=10; i++){
    if(i == 5){
        break
    }
    console.log(`${escolha} x ${i} = ${escolha*i}\n`)
}

*/

// Continue - serve para pulara a proxima instrução mas mantem o loop

alert ("Bem vindo a nossa tabuada")
let escolha = Number(prompt("Escolha o número da sua tabuada"))
for(let i = 0; i<=10; i++){
    if(i == 5){
        continue
    }
    console.log(`${escolha} x ${i} = ${escolha*i}\n`)

}