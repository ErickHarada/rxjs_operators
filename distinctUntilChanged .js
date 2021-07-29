const { of } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

const num = of(1, 1, 2, 3, 3, 4);

/* Primeiro DistinctUntilChanged
    Emit o valor se não for igual ao anterior
    Resultado Esperado: 1
    Resultado Esperado: 2
    Resultado Esperado: 3
    Resultado Esperado: 4 */
num.pipe(
    distinctUntilChanged()
).subscribe(val => console.log('Primeiro DistinctUntilChanged: ', val));


const letter = of('a', 'a', 'a', 'b', 'c', 'c', 'b');

/* Segundo DistinctUntilChanged
    Emit o valor se não for igual ao anterior
    Resultado Esperado: a
    Resultado Esperado: b
    Resultado Esperado: c
    Resultado Esperado: b */
letter.pipe(
    distinctUntilChanged()
).subscribe(val => console.log('Segundo DistinctUntilChanged: ', val));

