const { of } = require('rxjs');
const { startWith } = require('rxjs/operators');

const num = of(1, 2, 3);

/* Primeiro StartWith
    Coloca um valor na posição inicial, antes de
    todos os outros que virão do observable
    Resultado Esperado: 0
    Resultado Esperado: 1
    Resultado Esperado: 2
    Resultado Esperado: 3 */
num.pipe(
    startWith(0)
).subscribe(val => console.log('Primeiro StartWith: ', val));


const letter = of('a', 'b', 'c');

/* Segundo StartWith
    Coloca um valor na posição inicial, antes de
    todos os outros que virão do observable
    Resultado Esperado: z
    Resultado Esperado: a
    Resultado Esperado: b
    Resultado Esperado: c */
letter.pipe(
    startWith('z')
).subscribe(val => console.log('Segundo StartWith: ', val));


