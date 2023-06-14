const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1154353455550"],
};



cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1232,
    apartamento: true,
    complmento: "ap 943",
}];

// console.log(cliente.enderecos);

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 403,
    apartamento: false,

});

// console.log(cliente.enderecos);




const listaApartementos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApartementos);