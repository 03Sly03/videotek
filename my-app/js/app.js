// créer une simulation de catalogue

const FILMS_CONTAINER = document.querySelector('.movie-grid');

/** @type { Films[] } */
let films = [];
async function afficherFilms() {
    const reponse = await fetch("http://example.com/films.json");
    films = await reponse.json();
    console.log(films);
  }

// Générer le contenu du catalogue

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