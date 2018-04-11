let aluno = {
    nome: "Huck",
    p1:10,
    p2:10,
    p3:10,
    trabalho:10,
    licao:8,
};


let total = aluno.p1 + aluno.p2 + aluno.p3 + aluno.trabalho + aluno.licao;
let resultado = total / 4;
let letra;



if(resultado  <5){
    letra("I");
} else if (resultado <7) {
    letra("R");
} else if(resultado <9){
    letra("B");    
}else if(resultado){
    letra = "MB";
}

if (letra == "I"){
    console.log("foi reprovado com a menção I")
} else {
    console.log(`${aluno.nome} foi aprovado com a menção ${letra} 
    e sua p1 foi ${aluno.p1} e sua nota geral foi ${resultado}`);
}