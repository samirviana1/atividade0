/*1-  Crie uma variável para armazenar o salário do usuário e atribua 
    um valor a essa variável. Crie a validação necessária: 
    -   Caso o salário seja MENOR que R$ 1.903,98,
        imprima no console "ISENTO DE IR";
    -   caso contrário imprima "TRIBUTADO NO IR".*/

//--------------------Descomente o trecho abaixo para executar----------------------


  const salario = 2400;
  if (salario < 1903.98) {
    console.log('Isento do Imposto de Renda');
  } else {
    console.log('TRIBUTADO NO IR');
  }
  

//-------------------------------fim do exercicio-------------------------------------

//2-  Informe um valor a uma variável e imprima no console se o número é
   // primo.*/

//--------------------Descomente o trecho abaixo para executar----------------------


const valor = 33;
 
  if (valor === 2 || valor === 3 || valor == 5 || valor == 7) {
    console.log(`${valor} é primo`);
  } else if (valor % 2 !== 0 && valor % 3 !== 0 && valor % 5 !== 0 && valor % 7 !== 0) {
    console.log(`${valor} é primo`);
  } else {
    console.log(`${valor} não é primo`);
  }


//-------------------------------fim do exercicio-------------------------------------

/*3-  Tendo como entrada a altura e o sexo (codificado da seguinte forma:
    1 para sexo feminino e 2 para sexo masculino) de uma pessoa, 
    construa um programa que calcule e imprima seu peso ideal, utilizando
    as seguintes fórmulas:
        - para homens: (72.7 * Altura) – 58
        - para mulheres: (62.1 * Altura) – 44.7
        Exemplo de dados:
        altura = 1.88
        sexo = 2*/

//--------------------Descomente o trecho abaixo para executar----------------------


  const altura = Number(prompt('Digite a altura'));
  const sexo = Number(prompt('Digite 1 para Feminino ou 2 para Masculino'));
  let peso;
  switch (sexo) {
    case 1:
      peso = (62.1 * altura - 44.7).toFixed(2);
      alert(`Seu peso ideal é ${peso}`);
      break;
    case 2:
      peso = (72.7 * altura - 58).toFixed(2);
      alert(`Seu peso ideal é ${peso}`);
      break;
    default:
      alert('erro: opção inválida');
      break;
  }
  

//-------------------------------fim do exercicio-------------------------------------

/*
4-  Utilizando Switch, faça um programa que pergunte em que turno você estuda.
    Peça para digitar “M” para matutino ou “V” para vespertino ou “N” para 
    noturno. Imprima a mensagem “Bom dia!” ou “Boa tarde” ou  “Boa Noite” ou 
    “Valor inválido”, conforme o caso. 
*/

//--------------------Descomente o trecho abaixo para executar----------------------


  const turno = prompt(
    ' Que turno vc estuda(digitar “M” para matutino ou “V” para vespertino ou “N”):'
  ).toLowerCase();
  switch (turno) {
    case 'm':
      alert('BOM DIA');
      break;
    case 'v':
      alert('BOM TARDE');
      break;
    case 'n':
      alert('BOM NOITE');
      break;
    default:
      alert('erro: opção inválida');
      break;
  }


//-------------------------------fim do exercicio-------------------------------------

/*
5-  Faça um programa que verifique (usando IF Ternário). Conforme a letra escrever:
    F – Feminino, caso contrário, imprimir Masculino.
*/
//--------------------Descomente o trecho abaixo para executar----------------------

 const genero = prompt('Digite ').toUpperCase();
  const result = genero === 'F' ? 'Feminino' : 'Masculino';
  alert(result); 

//-------------------------------fim do exercicio-------------------------------------

/*
    6-Para doar sangue é necessário ter entre 18 e 67 anos. Faça um programa que 
    armazene a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns
    dos operadores lógicos OU (||) e E (&&).
*/
//--------------------Descomente o trecho abaixo para executar------------------------

 const suaIdade = Number(prompt('Digite sua idade:'));

 if (isNaN(suaIdade) || !suaIdade) {
   alert('Ops dado inválido!! Tente novamente com numeros. ');

   window.location.reload();
 } else {
   const temHepatite = confirm(
     ' Se você teve hepatite ou realizou alguma cirugia gastro intestinal clique em Ok, senão em Cancelar!'
  );

   if (suaIdade < 18 || suaIdade > 67 || temHepatite) {
     alert('você não pode doar sangue');
   } else {
     alert('pode doar sangue');
   }
 }

//-------------------------------fim do exercicio-------------------------------------
/*
    7-  Faça um algoritmo que armazene um número e imprima os números ímpares entre 1 e o 
    número armazenado.
*/

//--------------------Descomente o trecho abaixo para executar------------------------

 const mandaUmNumero = Number(prompt('digite um numero'));

 if (isNaN(mandaUmNumero)) {
   console.log('Bah deu ruim! Não é um numero');
   window.location.reload();
 } else {
   for (let index = 2; index < mandaUmNumero; index++) {
    if (index % 2) {
      document.write(`${index} é impar <br>`);
     }
   }
}

//-------------------------------fim do exercicio-------------------------------------
/*
    8-  Ler um valor inteiro (aceitar somente valores  1 a 10) e   
    escrever a tabuada de 1 a 10 do valor lido.  
*/

//--------------------Descomente o trecho abaixo para executar------------------------

 const ehUmNumber = Number(prompt('Digite um numero de 1 a 10:'));

 if (isNaN(ehUmNumber)) {
   alert('Ops não é número,tente novamente!');

   window.location.reload();
 } else if (ehUmNumber < 1 || ehUmNumber > 10) {
   alert('Ops só numeros de 1 a 10,tente novamente!');

   window.location.reload();
 } else {
   for (let count = 1; count <= 10; count++) {
     const result = ehUmNumber * count;

     document.write(ehUmNumber + ' x ' + count + ' = ' + result + '<br>');
   }
 }

//-------------------------------fim do exercicio-------------------------------------
/*
9-  Escrever um algoritmo que calcule e mostre a média aritmética dos números lidos entre
     13 e 73. 
*/

//--------------------Descomente o trecho abaixo para executar------------------------

 let soma = 0;
 let divisor = 1;
 let media = 0;
 for (let num = 14; num < 73; num++) {
   soma += num;
  media = soma / divisor;
   console.log(`numero: ${num} soma: ${soma} divisor: ${divisor} e a media ${media}`);
   divisor++;
}

// document.write('A média entre os números 13 e 73 é ', media);

//-------------------------------fim do exercicio-------------------------------------
/*
10- Leia um número, utilizando WHILE multiplique este número por 3 enquanto a soma seja
     menor que 500.
*/

//--------------------Descomente o trecho abaixo para executar------------------------

let numberPlus = Number(prompt());
let somaOsNumber = 0;
while (somaOsNumber < 500) {
  somaOsNumber = somaOsNumber + numberPlus;

  console.log('é o numero atual --------->', numberPlus);
  console.log('é a soma --------->', somaOsNumber);
  numberPlus *= 3;
}

//-------------------------------fim do exercicio-------------------------------------