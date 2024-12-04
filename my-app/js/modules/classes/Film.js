export class Film {
    /** @type { string } */
    #title;

    /** @type { string } */
    #description;

    /** @type { string } */
    #imgSrc;

    /** @type { HTMLElement } */
    #container;

    /** 
     * @param { string } title
     * @param { string } descripton
     * @param { string|null } imgSrc
     * @param { HTMLElement } container
    */
    constructor(title, description, container, imgSrc = null) {
        this.#title = title;
        this.#description = description;
        this.#container = container;
        this.#imgSrc = imgSrc;
    }

    /** @return { string } */
    get title() {
        return this.#title;
    }

    /** @return { string } */
    get description() {
        return this.#description;
    }

    /** @return { HTMLDivElement } */
    #createTemplate() {
        const DIV = document.createElement('div');
        DIV.classList.add('movie');
    
        DIV.innerHTML = `
            <div class="movie__img">
                <img src="{ this.#imgSrc ?? '' }" alt="Affiche du film : { this.#title }">
            </div>
            <div class="movie__content">
                <h3 class="movie__title"></h3>
                <p class="movie__description"></p>
            </div>
        `;
    
        return DIV;
    }

    /** @return { void } */
    display() {
        const TEMPLATE = this.#createTemplate();

        TEMPLATE.querySelector('.movie__title').textContent = this.title;
        TEMPLATE.querySelector('.movie__description').textContent = this.description;

        this.#container.insertAdjacentElement('afterbegin', TEMPLATE);
    }
}