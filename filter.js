const { of } = require('rxjs');
const { filter } = require('rxjs/operators');

const num = of(1, 2, 3, 4, 5, 6);

/*
    Primeiro Filter
    Retorna um observable com os valores
    que atenderem a condição.
    Resultado Esperado: 2
    Resultado Esperado: 4
    Resultado Esperado: 6
*/

num.pipe(
    filter(n => n % 2 === 0)
).subscribe(r => console.log('Primeiro Filter: ', r));



const letter = of('Casa', 'Batata', 'Dado', 'Ovo', 'Tartaruga');

/*
    Segundo Filter
    Retorna um observable com os valores
    que atenderem a condição.
    Resultado Esperado: Casa
    Resultado Esperado: Dado
    Resultado Esperado: Ovo
*/

letter.pipe(
    filter(n => n.length <= 4)
).subscribe(r => console.log('Segundo Filter: ', r));