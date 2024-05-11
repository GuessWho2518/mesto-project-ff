import '../pages/index.css';
import {
  cardsContainer,
  cardTemplate,
  buttonEditProfile,
  modalEditProfile,
  closeModalEditProfile,
  profileFormElement,
  nameProfileInput,
  descriptionProfileInput,
  profileTitle,
  profileDescription,
  profileImage,
  modalEditAvatar,
  closeModalEditAvatar,
  avatarFormElement,
  avatarInput,
  buttonAddCard,
  modalAddCard,
  closeModalAddCard,
  cardFormElement,
  cardNameInput,
  cardUrlInput,
  popupImageType,
  modalImage,
  popupCaption,
  closeModalImage,
  modalDeleteCard,
  closeModalDeleteCard,
  cardDeletingFormElement,
  validationConfig,
  copyright,
} from './variables.js';

import { createCard, likeHandler } from './card.js';
import { openModal, closeModal } from './modal.js';
import { enableValidation, clearValidation } from './validation.js';
import {
  getCardsData,
  createCardData,
  deleteCardData,
  addLike,
  removeLike,
  getProfileData,
  updateProfileData,
  updateAvatar
} from './api.js';

function yearInFooter() {
  const currentYear = new Date().getFullYear();
  copyright.textContent = `© ${currentYear} Mesto Russia`;
}
yearInFooter()

enableValidation(validationConfig);

buttonEditProfile.addEventListener('click', () => {
  openModal(modalEditProfile, closeModalEditProfile);
  clearValidation(profileFormElement, validationConfig);
  nameProfileInput.value = profileTitle.textContent;
  descriptionProfileInput.value = profileDescription.textContent;
})

function handleClickImage(event) {

  const targetCard = event.target.closest('.card');

  const targetCardTitle = targetCard.querySelector('.card__title');

  modalImage.src = event.target.src;
  modalImage.alt = event.target.alt;

  popupCaption.textContent = targetCardTitle.textContent;

  openModal(popupImageType, closeModalImage);
}

buttonAddCard.addEventListener('click', () => {
  openModal(modalAddCard, closeModalAddCard);
  clearValidation(cardFormElement, validationConfig);
})

let userId;
Promise.all([getProfileData(), getCardsData()]).then(data => {
  const [userData, cardsData] = data;

  userId = userData._id;
  profileTitle.textContent = userData.name;
  profileDescription.textContent = userData.about;
  profileImage.style.backgroundImage = `url(${userData.avatar})`;

  const cards = Array.from(cardsData);
  cards.forEach(element => {
    cardsContainer.append(createCard(element, cardTemplate, likeHandler, handleClickImage, deleteHandler, userId, addLike, removeLike));
  });

  cardFormElement.addEventListener('submit', addCardByForm);
}).catch(error => console.log(error));

function editProfileByForm(event) {
  event.preventDefault();

  const button = event.target.querySelector('.button');
  button.textContent = 'Сохранение...';
  updateProfileData(nameProfileInput.value, descriptionProfileInput.value).then(userData => {

    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    closeModal(modalEditProfile, closeModalEditProfile);
  })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      button.textContent = 'Сохранить';
    });
}

profileFormElement.addEventListener('submit', editProfileByForm);

function addCardByForm(event) {
  event.preventDefault();

  const button = event.target.querySelector('.button');
  button.textContent = 'Сохранение...';
  createCardData(cardNameInput.value, cardUrlInput.value).then(cardData => {
    cardsContainer.prepend(createCard(cardData, cardTemplate, likeHandler, handleClickImage, deleteHandler, userId, addLike, removeLike));
    closeModal(modalAddCard, closeModalAddCard);
  })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      button.textContent = 'Сохранить';
    });
}

function deleteCardByForm(event) {
  event.preventDefault();
  const button = event.target.querySelector('.button');
  button.textContent = 'Удаление...';
  deleteCardData(modalDeleteCard.id).then(() => {
    const card = document.getElementById(modalDeleteCard.id);
    card.remove();
    modalDeleteCard.removeAttribute('id');
    button.textContent = 'Да';
    closeModal(modalDeleteCard, closeModalDeleteCard);
  })
    .catch(error => {
      console.log(error);
    });
}

cardDeletingFormElement.addEventListener('submit', deleteCardByForm)

function deleteHandler(event) {
  modalDeleteCard.setAttribute('id', event.target.closest('.card').id);
  openModal(modalDeleteCard, closeModalDeleteCard);
}

profileImage.addEventListener('click', () => {
  openModal(modalEditAvatar, closeModalEditAvatar);
  clearValidation(avatarFormElement, validationConfig);
})

avatarFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.target.querySelector('.button');
  button.textContent = 'Сохранение...';
  updateAvatar(avatarInput.value).then(userData => {
    console.log(userData.avatar);
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
    closeModal(modalEditAvatar, closeModalEditAvatar);
  })
    .finally(() => {
      button.textContent = 'Сохранить';
    });
})