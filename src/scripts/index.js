import "../pages/index.css"; // добавьте импорт главного файла стилей
import { initialCards } from "./cards.js";
import { openModal, closeModal, } from "./modal.js";
import { createCard, deleteCard, likeCard } from "./card.js";

const cardsContainer = document.querySelector(".places__list");

// модалка редактирования профиля
const modalEditProfile = document.querySelector(".popup_type_edit");
// кнопка вызова модалки редактирования профиля
const buttonEditProfile = document.querySelector(".profile__edit-button");
buttonEditProfile.addEventListener("click", () => {
  openModal(modalEditProfile);
})

const popups = document.querySelectorAll('.popup');
popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup__close')) {
      closeModal(popup);
    }
  });
});

// Форма редактирования профиля
const formEditProfile = document.forms['edit-profile'];
const profileTitle = document.querySelector('.profile__title');
const nameProfileInput = formEditProfile.querySelector('.popup__input_type_name');
const profileDescription = document.querySelector('.profile__description');
nameProfileInput.value = profileTitle.textContent;
const inputDescriptionProfile = formEditProfile.querySelector('.popup__input_type_description');
inputDescriptionProfile.value = profileDescription.textContent;

function editProfileByForm(event) {
  event.preventDefault();
  profileTitle.textContent = nameProfileInput.value;
  profileDescription.textContent = inputDescriptionProfile.value;
  closeModal(modalEditProfile);
}

formEditProfile.addEventListener('submit', editProfileByForm);

// модалка добавления карточки
const modalAddCard = document.querySelector(".popup_type_new-card");
// кнопка вызова модалки добавления карточки
const buttonAddCard = document.querySelector(".profile__add-button");
buttonAddCard.addEventListener("click", () => {
  openModal(modalAddCard);
})

// Форма добавления карточки
const formAddCard = document.forms['new-place'];
const inputNameCard = formAddCard.querySelector('.popup__input_type_card-name');
const inputLinkCard = formAddCard.querySelector('.popup__input_type_url');

function addCardByForm(event) {
  event.preventDefault();
  const newCard = createCard(
    {
      name: inputNameCard.value,
      link: inputLinkCard.value
    },
    deleteCard,
    likeCard,
    modalImageclick
  );
  cardsContainer.prepend(newCard);
  formAddCard.reset();
  closeModal(modalAddCard);
}

formAddCard.addEventListener('submit', addCardByForm);

const popupImageType = document.querySelector(".popup_type_image");
const popupCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup__image");

function modalImageclick(data) {
  popupCaption.textContent = data.name;
  popupImage.src = data.link;
  popupImage.alt = data.name;
  openModal(popupImageType);
}

initialCards.forEach(function (cardData) {
  const card = createCard(cardData, deleteCard, likeCard, modalImageclick);
  cardsContainer.append(card);
});