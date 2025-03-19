<<<<<<< HEAD
// 3.1 Crie um array com suas comidas favoritas
let comidasFavoritas = ["Pizza", "Hambúrguer", "Sorvete", "Sushi"];

// 3.2 Mostre a lista e alguns elementos específicos
console.log("Todas as comidas:", comidasFavoritas);
console.log("Primeira comida:", comidasFavoritas[0]);
console.log("Última comida:", comidasFavoritas[3]);

// 3.3 Adicione uma nova comida à lista
comidasFavoritas.push("Lasanha");
console.log("Lista atualizada:", comidasFavoritas);
=======
let num = parseInt(prompt("Digite um numero positivo qualquer: "))

function contarAte(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}
if (!isNaN(num) && num >= 0) {
    contarAte(num);
} else {
    console.log("Insira um valor válido.")
}
>>>>>>> second-repo/main
