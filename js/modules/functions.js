/** @param { Film } film */
export function createFilmTemplate(film) {
    const DIV = document.createElement('div');
    DIV.classList.add('card');

    const HEADING = document.createElement('h2');
    HEADING.textContent = film.name;

    const PARAGRAPH = document.createElement('p');
    PARAGRAPH.textContent = film.description;

    DIV.append(HEADING, PARAGRAPH);

    return DIV;
}