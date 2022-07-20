/*
Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;
*/

const valor = Number(prompt('Informe um valor inteiro positivo: '));

if (isNaN(valor) || valor <= 0) {
  alert('O valor informado não é um número válido.');
} else {
  if (valor % 2) {
    // se o resto for 1 é vedadeiro, se for 0 é falso- isto é uma validação binária
    alert('Número é impar!');
  } else {
    alert('Número é par!');
  }

  window.location.reload();
}
