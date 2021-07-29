const { interval } = require('rxjs');
const { withLatestFrom, take } = require('rxjs/operators');

const source = interval(3000);
const secondSource = interval(1000);


/* Primeiro WithLatestFrom
    Emite o valor do primeiro observable
    junto com o ultimo valor do segundo observable
    Resultado Esperado: 0, 1
    Resultado Esperado: 1, 4
    Resultado Esperado: 2, 7 */

source.pipe(
    withLatestFrom(secondSource),
    take(3),
).subscribe(val => console.log(`First Source (5s): ${val[0]} Second Source (1s): ${val[1]}`));