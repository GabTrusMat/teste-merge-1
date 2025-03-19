<<<<<<< HEAD
// 1.1 Crie uma variável para cada tipo de dado e mostre no console
let meuTexto = "Olá, mundo!";
let minhaIdade = 28;
let estudante = true;

console.log("Texto:", meuTexto);
console.log("Idade:", minhaIdade);
console.log("É estudante?", estudante);

// 1.2 Use typeof para descobrir o tipo de cada variável
console.log("Tipo do texto:", typeof meuTexto);
console.log("Tipo da idade:", typeof minhaIdade);
console.log("Tipo de estudante:", typeof estudante);
=======
let idade = parseInt(prompt("Qual a sua idade? "));

function verificarIdade(idade) {

    if (idade < 0) {
        console.log("Idade Inexistente!");
    }
    else if (idade < 12) {
        console.log("Você é uma criança!");
    }
    else if (idade < 18) {
        console.log("Você é um adolescente!");
    }
    else if (idade >= 18 && idade < 60) {
        console.log("Você é um adulto!");
    }
    else if (idade >= 60) {
        console.log("Você é um idoso!");
    }
    else {
        console.log("Insira um valor válido.");
    }
}
verificarIdade(idade);
>>>>>>> second-repo/main
