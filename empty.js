const { EMPTY } = require('rxjs');

/* Apenas emite o 'complete' do observable
    nada mais que isso */
EMPTY.subscribe({
    next: () => console.log('Meu valor'),
    complete: () => console.log('Observable Complete')
})