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
const editProfileForm = document.forms['edit-profile'];
const nameProfileInput = editProfileForm.querySelector('.popup__input_type_name');
nameProfileInput.value = document.querySelector('.profile__title').textContent;
const descriptionProfileInput = editProfileForm.querySelector('.popup__input_type_description');
descriptionProfileInput.value = document.querySelector('.profile__description').textContent;

function editProfileByForm(event) {
  event.preventDefault();
  document.querySelector('.profile__title').textContent = nameProfileInput.value;
  document.querySelector('.profile__description').textContent = descriptionProfileInput.value;
  closeModal(modalEditProfile);
}

editProfileForm.addEventListener('submit', editProfileByForm);

// модалка добавления карточки
const modalAddCard = document.querySelector(".popup_type_new-card");
// кнопка вызова модалки добавления карточки
const buttonAddCard = document.querySelector(".profile__add-button");
buttonAddCard.addEventListener("click", () => {
  openModal(modalAddCard);
})

// Форма добавления карточки
const addCardForm = document.forms['new-place'];
const nameCardInput = addCardForm.querySelector('.popup__input_type_card-name');
const linkCardInput = addCardForm.querySelector('.popup__input_type_url');

function addCardByForm(event) {
  event.preventDefault();
  const newCard = createCard(
    {
      name: nameCardInput.value,
      link: linkCardInput.value
    },
    deleteCard,
    likeCard,
    modalImageclick
  );
  cardsContainer.prepend(newCard);
  addCardForm.reset();
  closeModal(modalAddCard);
}

addCardForm.addEventListener('submit', addCardByForm);
const popupImageType = document.querySelector(".popup_type_image");

function modalImageclick(data) {
  popupImageType.querySelector('.popup__caption').textContent = data.name;
  popupImageType.querySelector('.popup__image').src = data.link;
  popupImageType.querySelector('.popup__image').alt = data.name;
  openModal(popupImageType);
}

initialCards.forEach(function (cardData) {
  const card = createCard(cardData, deleteCard, likeCard, modalImageclick);
  cardsContainer.append(card);
});