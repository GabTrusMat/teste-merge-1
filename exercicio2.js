<<<<<<< HEAD
// 2.1 Crie um objeto com seus dados
let pessoa = {
    nome: "Gabriel",
    idade: 19,
    cidade: "São Paulo",
    hobbies: "Ler, jogar e programar",
    temPet: true
};

// 2.2 Mostre as informações de diferentes formas
console.log(pessoa);
console.log("Nome:", pessoa.nome);
console.log("Cidade:", pessoa.cidade);

// 2.3 Adicione uma nova informação ao objeto
pessoa.profissao = "Estudante";
console.log("Pessoa atualizada:", pessoa);
=======
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
>>>>>>> second-repo/main
