const { take, throttleTime, interval } = require('rxjs');

const obs = interval(1000);

/* Primeiro CombineLatest
    Emite os ultimos valores de cada observable.
    Ele so começará a emitir os valores quando
    cada observable tiver pelo menos um valor.
    Resultado Esperado: 0,
    Resultado Esperado: 3,
    Resultado Esperado: 6 */
obs.pipe(
    throttleTime(2000),
    take(3)
).subscribe(val => console.log('Primeiro ThrottleTime: ', val));
