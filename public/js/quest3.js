const a = Number(prompt('Digite o valor de A:'));
const b = Number(prompt('Digite o valor de B:'));
const c = Number(prompt('Digite o valor de C:'));

if (a < b + c && b < a + c && c < b + a) {
  // isósceles

  if (a === b && b === c) {
    console.log('Triângulo equilátero');
  } else if (a === b || b === c || c === a) {
    console.log('Triângulo isósceles');
  } else if (a !== b && b !== c && c !== a) {
    console.log('Triângulo escaleno');
  }
} else {
  alert('Os valores informados não formam um triângulo');
}