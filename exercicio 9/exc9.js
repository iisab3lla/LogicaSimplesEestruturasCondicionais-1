let macas = prompt("Quantidade de maças compradas: ");
let menorQue12 = 0.30;
let maiorQue12 = 0.25;

if (macas > 12) {
    alert("Total da compra de R$0,30: R$" + macas * menorQue12)
} else {
    alert ("Total da compra de R$0,25: R$" + macas * maiorQue12)
};