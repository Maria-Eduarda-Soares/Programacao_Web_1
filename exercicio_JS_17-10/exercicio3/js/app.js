let idade = Number(prompt("Digite a sua idade"))

if(idade <18){
    alert(`Menor de idade - Acesso bloqueado`)
}else{
    let plano = Number(prompt("Qual plano você deseja assinar? \nBásico - 1; \n Pro - 2; \n VIP - 3"))
    switch (plano){
        case 1:
            alert(`O plano escolhido foi o básico - Seus beneficos são: \n Acesso aos cursos básicos; \n Materias de apoio em PDF; \n Acesso ao curso enquanto a assinatura estiver ativa; \n Videoaulas gravadas`)
            break
        case 2:
            alert(`O plano escolhido foi o Pro - Seus beneficios são: \n Todods os beneficios do basico; \n Acesso a todods os cursos da plataforma;\n Suporte de professores/alunos; \n Relatorio de desempenho; \n Trilhas de aprendizagem personalizadas`)   
            break
        case 3:
            alert(` O plano escolhido foi o VIP - Seus beneficos são: \n Todos os beneficos do Pro; \n Mentoria individual com profissionais; \n Materiais e bônus especiais; \n Orientação profissional e de carreira; \n Atendimento prioritario; \n Desafios e projetos exclusivos.`) 
            break   
        default:
            alert(`Opção inserida invalida, digite novamente o plano desejado de 1 a 3`)        
    }
}