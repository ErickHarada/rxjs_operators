const { of, merge, interval, take } = require('rxjs');

const obs1 = of(1, 2, 3);
const obs2 = of(1, 2, 3);

/* Primeiro Merge
    Agrupa os valores dos dois observables
    Resultado Esperado: 1
    Resultado Esperado: 2
    Resultado Esperado: 3
    Resultado Esperado: 1
    Resultado Esperado: 2
    Resultado Esperado: 3 */
merge(
    obs1,
    obs2,
).subscribe(val => console.log('Primeiro Merge: ', val));


const interv1 = interval(1000);
const interv2 = interval(3000);

/* Segundo Merge
    Agrupa os valores dos dois observables
    Resultado Esperado: 0
    Resultado Esperado: 1
    Resultado Esperado: 0
    Resultado Esperado: 2
    Resultado Esperado: 3
    Resultado Esperado: 4
    Resultado Esperado: 1
    Resultado Esperado: 5 */
merge(
    interv1,
    interv2,
).pipe(take(8)).subscribe(val => console.log('Segundo Merge: ', val));
