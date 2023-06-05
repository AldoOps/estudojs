

// paramentros de funcao


function soma(numero1,numero2){
    return numero1 + numero2;
}

// console.log(soma(1,3))


// paramentro x argumentos
// ordem dos paramentros


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40,"Aldo"))

function multiplica(numero1 = 1, numero2 = 2){
    return numero1 * numero2;
}

console.log(multiplica(soma(5,8)))