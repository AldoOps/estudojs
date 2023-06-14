const cliente = {
    nome: "Aldo",
    idade: 32,
    cpf: "1232423423",
    email: "aldo.santos@gmail.com",
};

console.log(cliente);
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email","altura)"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});

