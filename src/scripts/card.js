// Функция создания карточки
export const createCard = (cardData, template, likeHandler, imageClickHandler, deleteHandler, userId, putLikeData, deleteLikeData) => {
    // Переменные
    const cardElement = template.content.cloneNode(true); // Объект карточки
    const card = cardElement.querySelector('.card');
    const cardImage = cardElement.querySelector('.card__image'); // Изображение карточки (также кнопка открытия модального окна)
    const cardTitle = cardElement.querySelector('.card__title'); // Заголовок карточки
    const likeButton = cardElement.querySelector('.card__like-button'); // Кнопка лайка
    const deleteButton = cardElement.querySelector('.card__delete-button'); // Кнопка удаления карточки
    const likeCounter = cardElement.querySelector('.card__like-counter') // Счётчик лайков
    const isLiked = cardData.likes.some(like => (like._id === userId) ? true : false);

    if (isLiked) {
        likeButton.classList.add('card__like-button_is-active');
    }

    card.id = cardData._id;

    //картинка
    cardImage.alt = cardData.name;
    cardImage.src = cardData.link;
    //название
    cardTitle.textContent = cardData.name;
    //количество лайков
    likeCounter.textContent = cardData.likes.length;

    //кнопка лайков
    likeButton.addEventListener("click", (event) => {
        likeHandler(event, cardData, putLikeData, deleteLikeData)
    })

    //кнопка удаления
    if (!(cardData.owner && (cardData.owner._id === userId))) {
        deleteButton.remove();
    } else {
        deleteButton.addEventListener('click', deleteHandler);
    }

    cardImage.addEventListener('click', imageClickHandler);

    return cardElement;
}

export const likeHandler = (evt, cardData, putLikeData, deleteLikeData) => {
    const likeCounter = evt.target.closest('.card__like-container').querySelector('.card__like-counter');
    const likeMethod = evt.target.classList.contains('card__like-button_is-active')
        ? deleteLikeData
        : putLikeData;
    likeMethod(cardData._id)
        .then(res => {
            likeCounter.textContent = res.likes.length;
            evt.target.classList.toggle('card__like-button_is-active');
        })
        .catch(error => {
            console.log(error);
        })
}