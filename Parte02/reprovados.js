const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const meidas = [7, 4.5 , 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return meidas[indice] < 7;
});

console.log(reprovados);