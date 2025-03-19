// Crie um "cadastro" que combine diferentes tipos de dados
let cadastroUsuario = {
    dadosPessoais: {
        nome: "Gabriel",
        idade: 28,
        ativa: true
    },
    enderecos: [
        {
            rua: "Rua das Flores",
            numero: 123,
            cidade: "Rio de Janeiro"
        },
        {
            rua: "Av Principal",
            numero: 456,
            cidade: "São Paulo"
        }
    ],
    telefones: ["21999887766", "11999887766"],
    interesses: ["tecnologia", "música", "viagens"]
};

// Mostre diferentes informações do cadastro
console.log("Nome do usuário:", cadastroUsuario.dadosPessoais.nome);
console.log("Primeiro endereço:", cadastroUsuario.enderecos[0]);
console.log("Telefones para contato:", cadastroUsuario.telefones);