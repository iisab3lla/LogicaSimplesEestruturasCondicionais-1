let a = 10;
let b = 20;

document.write(`O valor de A é igual à ${a}` + "<br> <br>");
document.write(`O valor de B é igual à ${b}` + "<br> <br>");
 
a = b;

document.write(`Agora o valor de A é igual à ${a = b}` + "<br> <br>");
document.write(`Agora o valor de B é igual à ${b = 10}`);