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