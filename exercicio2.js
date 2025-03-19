let dia = String(prompt("Insira um número referente ao dia da semana atual. Sendo 1 para Domingo ate o 7 que é Sábado."))

function mensagemDia(dia) {
    switch (dia) {
        case "1":
            console.log("Domingo: Dia de ficar na paz.")
            break;
        case "2":
            console.log("Segunda: Inicio da semana.")
            break;
        case "3":
            console.log("Terça: Já quero que acabe!")
            break;
        case "4":
            console.log("Quarta: Meio da semana.")
            break;
        case "5":
            console.log("Quinta: Só mais um pouco!")
            break;
        case "6":
            console.log("Sexta: Aguente firme!")
            break;
        case "7":
            console.log("Sábado: Já pode relaxar!")
            break;
        default:
            console.log("Dia inválido, insira um valor de 1 a 7.")
    }
}
mensagemDia(dia)