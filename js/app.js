import { createFilmTemplate } from "/js/modules/functions.js";
import { Film } from "/js/modules/classes/Film.js";

// créer une simulation de catalogue

/** @type { Film[] } */
const FILMS = [
    new Film('Star Wars', 'Un film de science fiction avec des sabres lasers'),
    new Film('Hitman', 'L\'asassin au crâne luisant vient réalise des assassinats pour le compte d\'une organisation secrète'),
    new Film('Inception', 'Le film dans le film dans le film'),
    new Film('Rambo 1', 'On pose son cerveau et on regarde les images. Un film réalisé en collaboration avec Michael Bay'),
];

// Générer le contenu du catalogue

FILMS.forEach((film) => {
    const TEMPLATE = createFilmTemplate(film);
    document.querySelector('#catalogue .movie-grid').appendChild(TEMPLATE);
});

const MOVIE_GRID_ELEMENT = document.querySelector('#catalogue .movie-grid');
const OPTIONS = {
    rootMargin : "0px",
    threshold : 0.5
};

const OBSERVER = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && entry.target === MOVIE_GRID_ELEMENT) {
            MOVIE_GRID_ELEMENT.style.opacity = '1';
            observer.unobserve(MOVIE_GRID_ELEMENT);
        }
    })
}, OPTIONS)

OBSERVER.observe(MOVIE_GRID_ELEMENT);