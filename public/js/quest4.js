let anoAtual = Number(prompt('Digite o ano atual?'));
 //let anoAtual = new Date().getFullYear();//função nativa para pegar a hora corrente do browser
let anoNascimento = Number(prompt('Digite o ano que você nasceu?'));
let idade = anoAtual - anoNascimento;

if (idade >= 16) {
  alert('Você tem ' + idade + ' anos e poderá votar esse ano');
} else {
  alert('Você tem ' + idade + ' anos e NÃO poderá votar esse ano');
}