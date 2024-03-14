let totalCompra = parseFloat (prompt("Digite o valor da compra!"));
let quantidadeParcelas = parseInt (prompt("Digite a quantidade de parcelas!"));
let valorParcela = (totalCompra / quantidadeParcelas);

document.write(`O valor total da compra foi de R$ ${totalCompra} <br> <br>`)
document.write(`O valor pago em cada parcela é: R$ ${valorParcela}`)