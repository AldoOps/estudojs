const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];


function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaDeAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaDeAluno}.`);
    } else {
        console.log("Aluno nao encotrado");
    }
}

exibeNomeENota("Ana");