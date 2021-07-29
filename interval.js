const { interval } = require('rxjs');

/* Emite um valor numérico após o 
    periodo de tempo determinado por parâmetro
    começa pelo numero 0 */
const $obs = interval(2000);

const sub1 = $obs.subscribe(console.log);

const sub2 = $obs.subscribe(num => console.log(num * 100));

setTimeout(() => {
    sub1.unsubscribe();
    sub2.unsubscribe();
}, 4000);