const { interval, BehaviorSubject } = require('rxjs');
const { debounceTime, take, tap } = require('rxjs/operators');

const obs = new BehaviorSubject(1);

setTimeout(() => {
    obs.next(2);
}, 1000);

/*
    Primeiro DebounceTime
    Emite o ultimo valor do observable
    depois que ele respeitar o tempo do debounceTime
    sem adicionar novos valores.
    Resultado Esperado: 2
*/

obs.pipe(
    debounceTime(2000)
).subscribe(r => console.log('Primeiro DebounceTime: ', r));



const obs2 = new BehaviorSubject(1);

setTimeout(() => {
    obs2.next(2);
    obs2.next(3);
}, 1000);

setTimeout(() => {
    obs2.next(4);
}, 2000);

/*
    Segundo DebounceTime
    Emite o ultimo valor do observable
    depois que ele respeitar o tempo do debounceTime
    sem adicionar novos valores.
    Caso continue a chegar novos valores antes do tempo
    do intervalo acabar o debounceTime continua esperando.
    Resultado Esperado: 4
*/

obs2.pipe(
    debounceTime(2000)
).subscribe(r => console.log('Segundo DebounceTime: ', r));

