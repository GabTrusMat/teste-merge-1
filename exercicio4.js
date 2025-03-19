<<<<<<< HEAD
// 4.1 Use variáveis para criar frases
let nome = "Gabriel";
let idade = 19;
let cidade = "São Paulo";

// 4.2 Crie uma frase usando template literals
let apresentacao = `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
console.log(apresentacao);

// 4.3 Crie uma frase mais complexa usando array e objeto
let hobbies = ["ler", "cozinhar", "jogar"];
let info = {
    profissao: "desenvolvedora",
    empresa: "TechCorp"
};

let biografiaCompleta = `
    ${nome} é ${info.profissao} na ${info.empresa}.
    Ela tem ${idade} anos, mora em ${cidade} e
    adora ${hobbies.join(", ")}.
`;
console.log(biografiaCompleta);
=======
let limite = parseInt(prompt("Escolha um número positivo qualquer: "))

function listarPares(limite) {
    for (let i = 0; i <= limite; i++) {
        if ((i % 2) == 0) {
            console.log(i)
        }
    }
}
if (!isNaN(limite) && limite >= 0) {
    listarPares(limite);
} else {
    console.log("Insira um valor válido.")
}
>>>>>>> second-repo/main
