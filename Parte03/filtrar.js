const cliente = require("./cliente02.json");


function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    })
}

const filtrador = filtrarApartamentoSemComplemento(cliente);

console.log(filtrador);