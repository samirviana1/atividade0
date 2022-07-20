const temperaturaC = Number(prompt('Digite a temperatura em graus celsius?'));
const fahrenheit = (temperaturaC * 1.8 + 32).toFixed(2);

alert('A temperatura ' + temperaturaC + ' é correspondente à ' + fahrenheit + ' em Fahrenheit');
