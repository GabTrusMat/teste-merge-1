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