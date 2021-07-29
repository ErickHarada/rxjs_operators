const { Observable } = require('rxjs');

const $obs = new Observable(subscribe => {
    subscribe.next('Rxjs');
    subscribe.complete();
});
$obs.subscribe(console.log);