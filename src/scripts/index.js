import "../pages/index.css"; // добавьте импорт главного файла стилей
import { openModal, closeModal, } from "./modal.js";
import { createCard, deleteCard, likeCard } from "./card.js";
import { getUserData, getCardsData, updateProfileData, updateCardData } from "./api.js";


const cardsContainer = document.querySelector(".places__list");
// модалка редактирования профиля
const modalEditProfile = document.querySelector(".popup_type_edit");
// кнопка вызова модалки редактирования профиля
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popups = document.querySelectorAll('.popup');
// Форма редактирования профиля
const formEditProfile = document.forms['edit-profile'];
const profileAvatar = document.querySelector('.profile__image')
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameProfileInput = formEditProfile.querySelector('.popup__input_type_name');
const inputDescriptionProfile = formEditProfile.querySelector('.popup__input_type_description');
// модалка добавления карточки
const modalAddCard = document.querySelector(".popup_type_new-card");
// кнопка вызова модалки добавления карточки
const buttonAddCard = document.querySelector(".profile__add-button");
// Форма добавления карточки
const formAddCard = document.forms['new-place'];
const inputNameCard = formAddCard.querySelector('.popup__input_type_card-name');
const inputLinkCard = formAddCard.querySelector('.popup__input_type_url');

const popupImageType = document.querySelector(".popup_type_image");
const popupCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup__image");

getUserData()
  .then((data) => {
    profileTitle.textContent = data.name;
    profileDescription.textContent = data.about;
    profileAvatar.style.backgroundImage = `url(${data.avatar})`
    nameProfileInput.value = profileTitle.textContent;
    inputDescriptionProfile.value = profileDescription.textContent;
  })
getCardsData()
  .then((data) => {
    data.forEach((cardData) => {
      const card = createCard(cardData, deleteCard, likeCard, modalImageclick);
      cardsContainer.append(card);
    })
  })

buttonEditProfile.addEventListener("click", () => {
  openModal(modalEditProfile);
})

popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__close')) {
      closeModal(popup);
    }
  });
});

const editProfileByForm = (event) => {
  event.preventDefault();
  updateProfileData({ name: nameProfileInput.value, about: inputDescriptionProfile.value })
    .then(() => {
      profileTitle.textContent = nameProfileInput.value;
      profileDescription.textContent = inputDescriptionProfile.value;
    })
  closeModal(modalEditProfile);
}

formEditProfile.addEventListener('submit', editProfileByForm);

buttonAddCard.addEventListener("click", () => {
  openModal(modalAddCard);
})

const addCardByForm = (event) => {
  event.preventDefault();
  const card = {
    name: inputNameCard.value,
    link: inputLinkCard.value,
  }

  updateCardData({ card })
    .then((card) => {
      const newCard = createCard(card, {
        deleteCard,
        likeCard,
        modalImageclick
      })
      cardsContainer.prepend(newCard);
    })
  formAddCard.reset();
  closeModal(modalAddCard);
}

formAddCard.addEventListener('submit', addCardByForm);

const modalImageclick = (data) => {
  popupCaption.textContent = data.name;
  popupImage.src = data.link;
  popupImage.alt = data.name;
  openModal(popupImageType);
}
getCardsData().then(res => { console.log(res) })