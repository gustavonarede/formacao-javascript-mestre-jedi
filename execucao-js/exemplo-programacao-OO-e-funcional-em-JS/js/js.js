//funcional
function sejaBemVindo(){
    console.log|("seja bem vindo a formação JavaScript Mestre Jedi!!");
}

console.log("Chamando a função seja bem vindo sejaBemVindo(): ");
sejaBemVindo();

//poo
var objAluno = {
    nome: "Desenvolvedor Gustavo",
    curso: "Formação JavaScript Mestre Jedi!!",
    aprenderCurso: function(){
        console.log("Aprendendo javaScript")
    }
};
console.log("objet Aluno");
console.log(objAluno);

console.log("acessando propriedades do objeto aluno objAluno.aprendeCurso()");
console.log(objAluno.nome);
console.log(objAluno.curso);




console.log("chamando o metodo objAluno.nome");
objAluno.aprenderCurso();