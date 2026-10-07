let codigo = Number(prompt("Digite o código do combo desejado"))

switch (codigo){
    case 1:
        alert(` O combo escolhido foi: 1 \n Combo Bug (Hambúrguer + Refri) - R$20,99 `)
        break
    case 2:
        alert(` O combo escolhido foi: 2 \n Combo Deploy (Pizza + Suco) - R$18,99`)    
        break
    case 3:
        alert(`O combo escolhido foi: 3 \n Combo Sênior (Salada + Água) - R$19,90 `)    
        break
    default:
        alert("ERRO - Opção inserida invalida")
}