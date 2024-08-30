const dividir = require('./div');
const multiplicar = require('./mult');
const somar = require('./soma');
const subtrair = require('./sub');

const pergunta1 = 88;
const pergunta2 = 59;

console.log('De acordo com os numeros ecolhidos:' + pergunta1 + ' e ' + pergunta2 + ' seus resultados são: '
    + 'Divisão: ' + dividir(pergunta1, pergunta2)  + '. Multiplicação: ' +  multiplicar(pergunta1, pergunta2) + '. Adição: ' +  somar(pergunta1, pergunta2) + '. Subtração: ' +  subtrair(pergunta1, pergunta2) 
);