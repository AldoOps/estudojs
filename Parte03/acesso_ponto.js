const cliente = {
    nome: "Aldo",
    idade: 32,
    cpf: "1232423423",
    email: "aldo.santos@gmail.com",
};

console.log(cliente);
console.log(`O cpf do cliente é ${cliente.cpf}.`);

console.log(`Os 3 primeiro digitos do CPF sao ${cliente.cpf.substring(0,3)}.`);