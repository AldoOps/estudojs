const notas = [10, 6.5, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {

    somaDasNotas += notas[1];

}

console.log(somaDasNotas);


const media = somaDasNotas / notas.length;

console.log(`A media das notas é ${media}.`);