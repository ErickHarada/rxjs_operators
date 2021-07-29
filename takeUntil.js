const { interval, timer, Subject } = require('rxjs');
const { takeUntil } = require('rxjs/operators');

const source = interval(1000);

/* Primeiro TakeUntil
    Emit valores até passar 5 segundos
    Resultado Esperado: 0
    Resultado Esperado: 1
    Resultado Esperado: 2
    Resultado Esperado: 3 */
source.pipe(
    takeUntil(timer(5000))
).subscribe(val => console.log('Primeiro TakeUntil: ', val));


const num = interval(500);

const aux = new Subject();
setTimeout(() => {
    aux.next('valor');
}, 2000);

/* Segundo TakeUntil
    Emit valores até o Subject aux receber valor
    Resultado Esperado: 0
    Resultado Esperado: 1
    Resultado Esperado: 2 */
num.pipe(
    takeUntil(aux)
).subscribe(val => console.log('Segundo TakeUntil: ', val));

