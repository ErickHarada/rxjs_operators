const { from } = require('rxjs');
const { map } = require('rxjs/operators');

const notas = [6.7, 6.1, 7.5, 4.9, 9.8, 7];

from(notas)
    .pipe(
        /* Mapeia a respota a partir do resultado recebido */
        map(n => n >= 7 ? 'Aprovado' : 'Reprovado'),
        map(status => status[0])
    ).subscribe(nota => {
        console.log(nota)
    });