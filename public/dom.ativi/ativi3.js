function pedirNome() {
    const nome = prompt('Qual o teu nome?');
    const texto = document.querySelector('#ex3');
    texto.innerText = `Opa ${nome}!  Você está deixando o seu site
    dinâmico!`;
  }