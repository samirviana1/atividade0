/*
    7. Escreva um algoritmo que armazene o número total de eleitores de
    um município, o número de votos brancos, nulos e válidos. Calcular
    e escrever o percentual que cada um representa em relação ao
    total de eleitores. O algoritmo deve fazer uma validação para que as
    porcentagens dos votos armazenados (brancos, nulos e válidos)
    respeitem o limite do número total de eleitores, ou seja, garantir que
    a soma dos votos brancos, nulos e válidos não seja maior que o
    número total de eleitores.
*/

let totalEleitores = 100,
  brancos = 30,
  nulos = 50,
  validos = 20,
  percentual = 0,
  controleVotos = 0;

if (brancos > totalEleitores) {
  alert('ERRO, voce informou um valor excedente ao numero total de eleitores!');
} else {
  controleVotos += brancos;

  if (nulos > totalEleitores || controleVotos + nulos > totalEleitores) {
    alert('ERRO, voce informou um valor excedente ao numero total de eleitores!');
  } else {
    controleVotos += nulos;

    if (validos > totalEleitores || controleVotos + validos > totalEleitores) {
      alert('ERRO, voce informou um valor excedente ao numero total de eleitores!');
    } else {
      controleVotos += validos;

      if (totalEleitores == controleVotos) {
        //calcula e armazena % dos votos em branco
        percentual = (brancos * 100) / totalEleitores;
        console.log(percentual + '% de votos em branco.');

        //calcula e armazena % dos votos em nulos
        percentual = (nulos * 100) / totalEleitores;
        console.log(percentual + '% de votos em branco.');

        //calcula e armazena % dos votos validos
        percentual = (validos * 100) / totalEleitores;
        console.log(percentual + '% de votos em branco.');
      } else {
        alert('ERRO, Nao foi possivel calcular o percentual preciso sobre os votos!');
      }
    }
  }
}
