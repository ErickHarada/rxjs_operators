const { of } = require('rxjs');
const { take } = require('rxjs/operators');

const source = of(1, 2, 3, 4, 5);

/* Primeiro Take
    Emit somente um valor
    Resultado Esperado: 1 */
source.pipe(
    take(1)
).subscribe(val => console.log('Primeiro Take: ', val));

/* Segundo Take 
    Emit 5 valores
    Resultado Esperado: 1, 2, 3, 4, 5 */
source.pipe(
    take(5)
).subscribe(val => console.log('Segundo Take: ', val));
