import { createFilmTemplate } from "/js/modules/functions.js";
import { Film } from "/js/modules/classes/Film.js";

// créer une simulation de catalogue

/** @type { Film[] } */
const FILMS = [
    new Film('Star Wars', 'Un film de science fiction avec des sabres lasers'),
    new Film('Hitman', 'L\'asassin au crâne luisant vient réalise des assassinats pour le compte d\'une organisation secrète'),
];

// Générer le contenu du catalogue

FILMS.forEach((film) => {
    const TEMPLATE = createFilmTemplate(film);
    document.querySelector('#catalogue').appendChild(TEMPLATE);
});