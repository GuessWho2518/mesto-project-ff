const placesList = document.querySelector(".places__list");
const cardsListTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(data, callbackDelete) {
  const cardElement = cardsListTemplate.cloneNode(true); //клонировать шаблон

  cardElement.querySelector(".card__title").textContent = data.name; //установить значения вложенных элементов
  cardElement.querySelector(".card__image").src = data.link; //установить значения вложенных элементов

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function () {
      callbackDelete(cardElement);
    }); //добавить к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк
  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

function renderCards() {
  initialCards.forEach(function (cardData) {
    const card = createCard(cardData, deleteCard);
    placesList.append(card);
  });
}

renderCards();
