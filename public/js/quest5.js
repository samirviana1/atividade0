let a = 10;
let b = 20;

console.log('O valor de A é: ' + a);
console.log('O valor de B é: ' + b);

let auxiliar = a;
a = b;
b = auxiliar;

console.log('O valor atual de A é: ' + a);
console.log('O valor atual de B é: ' + b);