const clientes = require("./cliente02.json");

function encontar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontar(clientes, "nome", "Kirby");

const encotrado02 = encontar(clientes, "telefone", "6804913737");

console.log(encotrado02);
