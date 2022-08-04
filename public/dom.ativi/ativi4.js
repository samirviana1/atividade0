let contador = 0;

const paragrafo = document.getElementById('paragrafo');

function incrementar() {
  contador++; // contador= contador+1;

  if (contador === 1) {
    paragrafo.innerText = `O contador está com ${contador} clique.`;
  } else {
    paragrafo.innerText = `O contador está com ${contador} cliques.`;
  }
}

function zerar() {
  contador = 0;
  paragrafo.innerText = '';
}