/*
8. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

    À vista ..................... desconto de 2,5% sobre o preço de tabela;
    De 2 até 5 vezes ............ preço de tabela, sem desconto ou acréscimo;
    De 6 até 10 vezes ........... juros de 6% sobre o preço de tabela;
    De 11 até 15 vezes .......... juros de 13% sobre o preço de tabela.

Escreva um algoritmo que armazene o preço de tabela e o número de
vezes em que o pagamento será feito. Calcule o valor de cada parcela e o
preço total da compra e imprima no console.
*/

let qtdParcela = 10;
let precoTabela = 100;
let valorParcela;
let total;

if (qtdParcela <= 0 || qtdParcela > 15) {
  alert('Número de parcelas inválido!');
} else if (qtdParcela === 1) {
  total = precoTabela - precoTabela * (2.5 / 100);
  alert(
    'Preço de tabela: R$ ' +
      precoTabela +
      '\n Número de parcelas:' +
      qtdParcela +
      '\n Compra a vista 2,5% desconto.\n Total - R$ ' +
      total
  );
} else if (qtdParcela <= 5) {
  total = precoTabela;
  valorParcela = total / qtdParcela;

  alert(
    'Preço de tabela: R$ ' +
      precoTabela +
      '\n Número de parcelas:' +
      qtdParcela +
      '\n Compra a prazo com o valor de cada parcela ' +
      valorParcela +
      ' \n do total de - R$ ' +
      total
  );
} else if (qtdParcela <= 10) {
  total = precoTabela + precoTabela * (6 / 100);
  valorParcela = total / qtdParcela;

  alert(
    'Preço de tabela: R$ ' +
      precoTabela +
      '\n Número de parcelas:' +
      qtdParcela +
      '\n Compra a prazo com acréscimo 6% no valor de cada parcela ' +
      valorParcela +
      ' \n do total de - R$ ' +
      total
  );
} else if (qtdParcela <= 15) {
  total = precoTabela + precoTabela * (13 / 100);
  valorParcela = total / qtdParcela;

  alert(
    'Preço de tabela: R$ ' +
      precoTabela +
      '\n Número de parcelas:' +
      qtdParcela +
      '\n Compra a prazo com acréscimo 13% no valor de cada parcela ' +
      valorParcela +
      ' \n do total de - R$ ' +
      total
  );
}
