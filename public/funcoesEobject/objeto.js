//Atividades sobre objetos
/*1. Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.*/

const produto = {
    preco: 90,
    descricao: 'Mouse',
  };
  console.log(`Produto: ${produto.descricao}, Preço: ${produto.preco}`);
  
  //------------------------------------------------------------------------------------------
  /*2. Crie um objeto em JavaScript para colocar 5 atributos de um
  notebook. Atribua os seguintes atributos:
  Processador = i7
  Memória = 16GB
  Preço = 5000
  HD = 1TB
  SSD = 256GB
  Por fim, utilizando o laço for in, mostre o nome e valor de cada
  atributo no console.*/
  
  const notebook = {
    processador: 'i7',
    memoria: '16GB',
    preco: 5000,
    hd: '1TB',
    ssd: '256GB',
  };
  for (const key in notebook) {
    const element = notebook[key];
    console.log(`Descrição: ${key},valor :${element}.`);
  }
  
  //------------------------------------------------------------------------------------------
  /*3. Crie um objeto para colocar nome e duas notas. Atribua nome e
  duas notas para o primeiro objeto, que será nosso primeiro aluno.
  Agora crie mais um objeto para colocar informações do nosso
  segundo aluno. Mostre as informações de cada aluno no console.
  Mostre também a média do primeiro aluno e a média do segundo
  aluno. Por fim mostre a média desta turma de 2 alunos.*/
  
  const aluno1 = {
    nome: 'maria',
    notas: [8, 3],
  };
  
  const aluno2 = {
    nome: 'odette',
    notas: [6, 9],
  };
  
  const turma = [aluno1, aluno2];
  
  let somaNotasTurma = 0;
  
  turma.forEach((aluno) => {
    const media =
      aluno.notas.reduce((valorInicial, proximo) => valorInicial + proximo) / aluno.notas.length;
  
    console.log(`As notas de ${aluno.nome} são:${aluno.notas} e sua média é ${media}`);
  
    somaNotasTurma += media;
  });
  
  console.log(`A média da Turma ${somaNotasTurma / turma.length}`);
  
  //------------------------------------------------------------------------------------------
  /*4. Crie cinco objetos JavaScript dentro de um Array contendo
  nome(texto), idade(número), skills (array), ou seja um total de cinco
  alunos. Agora crie uma função que receba estes cinco objetos e
  mais um parâmetro skill. Dependendo da skill enviada mostrar no
  console.log(), quais alunos têm a skill enviada por parâmetro,
  mostrar todo o objeto.
  Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
  chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
  Pedro e qual mais se encaixa nessa skill.*/
  
  const candidatos = [
    {
      nome: 'Tia Márcia',
      idade: 68,
      skills: ['Python', 'C#', 'javascript'],
    },
    {
      nome: 'Dona Iolanda',
      idade: 89,
      skills: ['Fortran', 'Pascal', 'Cobol'],
    },
    {
      nome: 'Shirley',
      idade: 45,
      skills: ['html', 'css', 'Javascript', 'c++', 'java', 'PHP', 'VueJs'],
    },
    {
      nome: 'Lurdinha',
      idade: 50,
      skills: ['javascript', 'Typescript', 'c++', 'java'],
    },
    {
      nome: 'Dona Evinha',
      idade: 70,
      skills: ['typescript', 'c++', 'jaVa'],
    },
  ];
  
  function encontrarIdosas(array, skillDeclarada) {
    const selecionados = array.filter((candidato) => {
      return candidato.skills.some((skill) => {
        return skill.toLowerCase() === skillDeclarada.toLowerCase();
      });
    });
  
    console.log(selecionados);
  }
  
  encontrarIdosas(candidatos, 'typeScript');
  