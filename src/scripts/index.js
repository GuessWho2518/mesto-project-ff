import "../pages/index.css"; // добавьте импорт главного файла стилей
import { initialCards } from "./cards.js";
import { openModal, closeModal, } from "./modal.js";
import { createCard, deleteCard, likeCard } from "./card.js";
import {
  cardsContainer,
  modalEditProfile,
  buttonEditProfile,
  popups,
  formEditProfile,
  profileTitle,
  nameProfileInput,
  profileDescription,
  descriptionProfileInput,
  modalAddCard,
  buttonAddCard,
  formAddCard,
  inputNameCard,
  inputLinkCard,
  popupImageType,
  popupCaption,
  popupImage
} from "./variables.js";
import { fetcher } from "./api.js";

buttonEditProfile.addEventListener("click", () => {
  openModal(modalEditProfile);
})

popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup__close')) {
      closeModal(popup);
    }
  });
});


nameProfileInput.value = profileTitle.textContent;
descriptionProfileInput.value = profileDescription.textContent;

function editProfileByForm(event) {
  event.preventDefault();
  profileTitle.textContent = nameProfileInput.value;
  profileDescription.textContent = descriptionProfileInput.value;
  closeModal(modalEditProfile);
}

formEditProfile.addEventListener('submit', editProfileByForm);

buttonAddCard.addEventListener("click", () => {
  openModal(modalAddCard);
})



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

fetcher()