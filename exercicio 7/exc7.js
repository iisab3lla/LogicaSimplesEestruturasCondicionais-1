let votosBrancos = parseInt (prompt("Digite a quantidade de votos brancos:"));
let votosNulos = parseInt (prompt("Digite a quantidade de votos nulos:"));
let votosValidos = parseInt (prompt("Digite a quantidade de votos válidos:"));
let eleitores = votosBrancos + votosNulos + votosValidos;

let calculoVotosBrancos = (votosBrancos / eleitores) * 100;
let calculoVotosNulos = (votosNulos / eleitores) * 100;
let calculoVotosValidos = (votosValidos / eleitores) * 100;

document.write(`Total de eleitores: ${eleitores}` + "<br> <br>")
document.write(`A porcentagem de votos brancos é ${calculoVotosBrancos}%` + "<br> <br>");
document.write(`A porcentagem de votos nulos é ${calculoVotosNulos}%` + "<br> <br>");
document.write(`A porcentagem de votos válidos é ${calculoVotosValidos}%`);


