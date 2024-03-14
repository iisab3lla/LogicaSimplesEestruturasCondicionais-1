let nome = String (prompt("Digite o nome de um aluno!"));
let nota1 = parseFloat (prompt("Digite a primeira nota!"));
let nota2 = parseFloat (prompt("Digite a segunda nota!"));
let nota3 = parseFloat (prompt("Digite a terceira nota!"));

let media = (nota1 + nota2 + nota3) / 3;

document.write(`O(a) aluno(a) ${nome} ficou com média ${media}!`)

