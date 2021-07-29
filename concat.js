const { EMPTY, startWith, concat } = require('rxjs');

const obsConcat1 = EMPTY.pipe(startWith(1));
const obsConcat2 = EMPTY.pipe(startWith(2));
const obsConcat3 = EMPTY.pipe(startWith(3));

/* Primeiro Concat
    Concatena o valor dos observables
    SOMENTE depois que forem sendo COMPLETADOS.
    O operador só pula para o próximo observables
    quando o anterior emitir o 'COMPLETE'.
    Resultado Esperado: 1
    Resultado Esperado: 2
    Resultado Esperado: 3 */
concat(
    obsConcat1,
    obsConcat2,
    obsConcat3,
).subscribe(val => console.log(val));
