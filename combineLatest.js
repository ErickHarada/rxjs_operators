const { combineLatest, timer, take } = require('rxjs');

const obsConcat1 = timer(1000, 4000);
const obsConcat2 = timer(2000, 4000);
const obsConcat3 = timer(3000, 4000);

/* Primeiro CombineLatest
    Emite os ultimos valores de cada observable.
    Ele so começará a emitir os valores quando
    cada observable tiver pelo menos um valor.
    Resultado Esperado: 0, 0, 0
    Resultado Esperado: 1, 0, 0
    Resultado Esperado: 1, 1, 0
    Resultado Esperado: 1, 1, 1
    Resultado Esperado: 2, 1, 1
    Resultado Esperado: 2, 2, 1
    Resultado Esperado: 2, 2, 2 */
combineLatest([
    obsConcat1,
    obsConcat2,
    obsConcat3,
]).pipe(take(7)).subscribe(val => console.log('valor1:', val[0], 'valor2:', val[1], 'valor3:', val[2]));
