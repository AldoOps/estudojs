const clientes = require("./cliente02.json");

function ordenar(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);