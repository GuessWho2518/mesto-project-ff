const cardsListTemplate = document.querySelector("#card-template").content;

export function deleteCard(cardElement) {
    cardElement.remove();
}

export function likeCard(likeeButton) {
    likeeButton.classList.toggle('card__like-button_is-active');
}

export function createCard(data, deleteCard, likeCard, imageClick) {
    const cardElement = cardsListTemplate.querySelector(".places__item").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");

    cardImage.alt = data.name;
    cardImage.src = data.link;
    cardElement.querySelector(".card__title").textContent = data.name;;

    // обработчик удаления карты
    const cardDeleteButton = cardElement.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", () => deleteCard(cardElement));//добавить к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк

    // обработчик лайка карты
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    cardLikeButton.addEventListener("click", () => likeCard(cardLikeButton));

    cardImage.addEventListener("click", () => imageClick(data));

    return cardElement;
}
