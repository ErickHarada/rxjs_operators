const { of } = require('rxjs');
const { reduce } = require('rxjs/operators');

const num = of(1, 2, 3, 4, 5);

/* Primeiro Reduce
    Começa com zero, soma os valores
    Resultado Esperado: 15 */
num.pipe(
    reduce((acc, curr) => acc + curr, 0)
).subscribe(r => console.log('Primeiro Reduce: ', r));


/* Segundo Reduce
    Começa com 10, soma os valores
    Resultado Esperado: 10 */
num.pipe(
    reduce((acc, curr) => acc + curr, 10)
).subscribe(r => console.log('Segundo Reduce: ', r));


const arrayL = of(['a', 'b', 'c', 'd']);

/* Terceiro Reduce 
    Começa com [a, b], concatena os valores
    Resultado Esperado: [a, b, a, b, c, d] */
arrayL.pipe(
    reduce((acc, curr) => acc.concat(curr), ['a', 'b'])
).subscribe(r => console.log('Terceiro Reduce: ', r));


const arrayN = of([1, 2, 3, 4, 5]);

/* Quarto Reduce 
    Começa com [0], concatena os valores
    Resultado Esperado: [0, 1, 2, 3, 4, 5] */
arrayN.pipe(
    reduce((acc, curr) => acc.concat(curr), [0])
).subscribe(r => console.log('Quarto Reduce: ', r));