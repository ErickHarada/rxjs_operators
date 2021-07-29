const { of } = require('rxjs');
const { scan } = require('rxjs/operators');

const num = of(1, 2, 3, 4, 5);

/* Primeiro Scan
    Começa com zero, soma os valores,
    retorna o valor de cada operação
    Resultado Esperado: 1
    Resultado Esperado: 3
    Resultado Esperado: 6
    Resultado Esperado: 10
    Resultado Esperado: 15 */
num.pipe(
    scan((acc, curr) => acc + curr, 0)
).subscribe(r => console.log('Primeiro Scan: ', r));


/* Segundo Scan
    Começa com 10, soma os valores,
    retorna o valor de cada operação
    Resultado Esperado: 11
    Resultado Esperado: 13
    Resultado Esperado: 16
    Resultado Esperado: 20
    Resultado Esperado: 25 */
num.pipe(
    scan((acc, curr) => acc + curr, 10)
).subscribe(r => console.log('Segundo Scan: ', r));


const arrayL = of(['a', 'b'], ['c', 'd']);

/* Terceiro Scan 
    Começa com [a, b], concatena os valores
    retorna o array de cada concatenação
    Resultado Esperado: [a, b, a, b]
    Resultado Esperado: [a, b, a, b, c, d] */
arrayL.pipe(
    scan((acc, curr) => acc.concat(curr), ['a', 'b'])
).subscribe(r => console.log('Terceiro Scan: ', r));


const arrayN = of([1, 2], [3, 4], [5]);

/* Quarto Scan 
    Começa com [0], concatena os valores
    retorna o array de cada concatenação
    Resultado Esperado: [0, 1, 2]
    Resultado Esperado: [0, 1, 2, 3, 4]
    Resultado Esperado: [0, 1, 2, 3, 4, 5] */
arrayN.pipe(
    scan((acc, curr) => acc.concat(curr), [0])
).subscribe(r => console.log('Quarto Scan: ', r));