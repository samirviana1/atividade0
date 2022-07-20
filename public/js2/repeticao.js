const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
for (let index =0; index <= 30; index+=2){
    document.write(index, '<br>')
}
//---------------------------------------------------------------
document.write('<br>')
for (let index =1; index <= 60; index++){
    if (index % 2 === 1) {
        document.write(index + '<br>')
    }
}
//-----------------------------------------------
document.write('<br>')
for(let i = 1; i <= 10; i++){
  let result = i * 5
   document.write(i+'*'+ '5 = ' + result + '<br>')
}
//-------------------------------------------------------------
let valor = 5000

while (valor <= 10000) {
    const salario=valor+valor*0.30
    console.log('salario parcial ----', salario)
    valor = salario
}

//-------------------------------------------------------------------

let contador = 11
let soma = 0

do {
    soma+=contador
    contador++
} while (contador < 100);

console.log(soma)