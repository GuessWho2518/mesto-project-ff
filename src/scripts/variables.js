export const cardsContainer = document.querySelector('.places__list'); // Список карточек
export const cardTemplate = document.querySelector('#card-template'); // Темплейт карточки

// модалка редактирования профиля
export const buttonEditProfile = document.querySelector('.profile__edit-button'); // Кнопка редактирвоания профиля
export const modalEditProfile = document.querySelector('.popup_type_edit'); // Модальное окно редактирования профиля
export const closeModalEditProfile = modalEditProfile.querySelector('.popup__close'); // Кнопка закрытия модального окна редактироваия профиля
// Форма редактирования профиля и поля ввода
export const profileFormElement = modalEditProfile.querySelector('.popup__form'); // Форма модального окна редактироваия профиля
export const nameProfileInput = profileFormElement.querySelector('.popup__input_type_name');
export const descriptionProfileInput = profileFormElement.querySelector('.popup__input_type_description');
//редактируемые элементы
export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

// модалка редактирования аватара
export const profileImage = document.querySelector('.profile__image');
export const modalEditAvatar = document.querySelector('.popup_type_edit-avatar');
export const closeModalEditAvatar = modalEditAvatar.querySelector('.popup__close');
// Форма редактирования аватара и поля ввода
export const avatarFormElement = modalEditAvatar.querySelector('.popup__form');
export const avatarInput = avatarFormElement.querySelector('.popup__input');

// модалка карточки
export const buttonAddCard = document.querySelector('.profile__add-button'); // Кнопка добавления карточки
export const modalAddCard = document.querySelector('.popup_type_new-card'); // Модальное окно добавления карточки
export const closeModalAddCard = modalAddCard.querySelector('.popup__close'); // Кнопка закрытия модального окна добавления карточки
// Форма редактирования карточки и поля ввода
export const cardFormElement = modalAddCard.querySelector('.popup__form'); // Форма модального окна добавления карточки
export const cardNameInput = cardFormElement.querySelector('.popup__input_type_card-name');
export const cardUrlInput = cardFormElement.querySelector('.popup__input_type_url');

// модалка картинки
export const popupImageType = document.querySelector('.popup_type_image'); // Модальное окно открытой карточки
export const closeModalImage = popupImageType.querySelector('.popup__close'); // Кнопка закрытия модального окна
export const modalImage = popupImageType.querySelector('.popup__image'); // Изображение модального окна
export const popupCaption = popupImageType.querySelector('.popup__caption'); // Описание модального окна

// модалка удаления карточки
export const modalDeleteCard = document.querySelector('.popup_type_delete-card');
export const closeModalDeleteCard = modalDeleteCard.querySelector('.popup__close');
export const cardDeletingFormElement = modalDeleteCard.querySelector('.popup__form');

// обновление текущего года
export const copyright = document.querySelector('.footer__copyright');

//конфиг валидации
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}