export const cardsContainer = document.querySelector(".places__list");
export const modalEditProfile = document.querySelector(".popup_type_edit");
export const buttonEditProfile = document.querySelector(".profile__edit-button");
export const popups = document.querySelectorAll('.popup');
// Форма редактирования профиля
export const formEditProfile = document.forms['edit-profile'];
export const profileTitle = document.querySelector('.profile__title');
export const nameProfileInput = formEditProfile.querySelector('.popup__input_type_name');
export const profileDescription = document.querySelector('.profile__description');
export const descriptionProfileInput = formEditProfile.querySelector('.popup__input_type_description');
export const modalAddCard = document.querySelector(".popup_type_new-card");
export const buttonAddCard = document.querySelector(".profile__add-button");
// Форма добавления карточки
export const formAddCard = document.forms['new-place'];
export const inputNameCard = formAddCard.querySelector('.popup__input_type_card-name');
export const inputLinkCard = formAddCard.querySelector('.popup__input_type_url');
export const popupImageType = document.querySelector(".popup_type_image");
export const popupCaption = document.querySelector(".popup__caption");
export const popupImage = document.querySelector(".popup__image");
