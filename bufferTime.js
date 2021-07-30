const { interval } = require('rxjs');
const { bufferTime, take } = require('rxjs/operators');

const source = interval(1000);

/* 
    Primeiro BufferTime
    Retorna um array dos valores dentro
    do periodo de tempo estipulado e repete
    o processo.
    Resultado Esperado: 0
    Resultado Esperado: 1, 2
    Resultado Esperado: 3, 4
*/

source.pipe(
    take(5),
    bufferTime(2000)
).subscribe(val => console.log('Primeiro BufferTime:', val));