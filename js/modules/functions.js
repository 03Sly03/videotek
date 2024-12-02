/**
 * @param { Film } film 
 * */
export function createFilmTemplate(film) {
    const DIV = document.createElement('div');
    DIV.classList.add('movie');

    const HEADING = document.createElement('h3');
    HEADING.classList.add('movie__title');
    HEADING.textContent = film.title;

    const PARAGRAPH = document.createElement('p');
    PARAGRAPH.classList.add('movie__description');
    PARAGRAPH.textContent = film.description;

    DIV.append(HEADING, PARAGRAPH);

    return DIV;
}