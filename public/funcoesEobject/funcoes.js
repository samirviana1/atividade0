/*1. Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”.*/



function acessoAoSite() {
    alert('Bem vindo ao site');
}

acessoAoSite();

//******************************************* */

/*2. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens.*/

const nomeAplicacao ='vivendo e aprendendo'
function mostrarMensagem() {
    console.log('Acesso à aplicação: ', nomeAplicacao)
    alert('Bem vindo à aplicação', nomeAplicacao)
}
mostrarMensagem()
/*3. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”*/
function mostrarDobro(numero) {
   return numero 
}

let dobro = mostrarDobro(10)
 const calculo = dobro * 2

alert('O dobro do número ' +dobro + ' é ' + calculo)

/*4. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.*/

function calcularMedia(nota1, nota2, nota3, nome) {
    
}