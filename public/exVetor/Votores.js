const data = [
    {
      nome: 'Roger Medeiros',
      sexo: 'M',
      salario: 3250,
    },
    {
      nome: 'Carolina Silva',
      sexo: 'F',
      salario: 1200,
    },
    {
      nome: 'Cristina Avila',
      sexo: 'F',
      salario: 8100,
    },
    {
      nome: 'Gustavo Hoffman',
      sexo: 'M',
      salario: 5200.35,
    },
    {
      nome: 'Eva Trindade',
      sexo: 'F',
      salario: 2501,
    },
    {
      nome: 'Andre Mathias',
      sexo: 'M',
      salario: 1750,
    },
    {
      nome: 'Joice Castro da Silva',
      sexo: 'F',
      salario: 3350.25,
    },
  ];
  
  // 1-Imprima no console a quantidade de pessoas Total.
  
  console.log(`O nº total de pessoas é igual a ${data.length}.`);
  
  // 2-Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
  
  console.log(`O nº de pessoas do sexo feminino é igual a ${data.filter((fem) => fem.sexo === "F").length}.`);
  
  // 3-Imprima no console a soma do salário de todas as pessoas.
  
  const total = data.reduce((atual, proximo) => atual + proximo.salario, 0)
  console.log(` O salário total é: ${total}`)
  
  // 4-Imprima no console a soma do salario de todos as pessoas do sexo Masculino
  
  const odete = data.filter((masc) => masc.sexo === "M").reduce((atual, proximo) => atual + proximo.salario, 0)
  console.log(`A soma do salário das pessoas de sexo masculino é: ${odete}`)
  
  /*5-Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000,
   imprima verdadeiro no console caso exista, caso contrário falso.*/
  const sheila = data.some(elemento => elemento.salario > 7000)
  console.log(`O salario é maior que 7000? ${sheila}`)
  
  // 6-Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
  
  const evinha = data.findIndex((valor) => valor.nome === 'Eva Trindade')
  console.log(`Indice de eva é: ${evinha}`);
  
  // 7-Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
  
  const silva = data.filter((sil) => sil.nome.indexOf(`Silva`) >= 0).map(m => console.log(m.nome))
  
  
  // 8-Imprima os nomes utilizando o MAP
  
  const nomes = data.map(item => console.log('Aqui está o nome --- ', item.nome))
  