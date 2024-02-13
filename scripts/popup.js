const page = document.querySelector('.page');
const popupNewCard = page.querySelector('.popup_type_new-card'); // popup create card
const popupEditProfile = page.querySelector('.popup_type_edit');// popup edit profile
const addCardButton = page.querySelector('.profile__add-button');// button for add card
const closePopupButtons = page.querySelectorAll('.popup__close');// button for close popup
const editProfileButton = page.querySelector('.profile__edit-button');// button edit profile

// 1. функция открытия карточки
function togglePopup(popupElement) {
    popupElement.classList.toggle('popup_is-opened');
    closePopupButtons.forEach((button) => {
        button.addEventListener('click', () => {
            togglePopup(button.closest('.popup'));
        });
    });
}
//1. open popup create card on click addCardButton
addCardButton.addEventListener('click', () =>
    togglePopup(popupNewCard)
);
//2. open popup edit profile on click addCardButton
editProfileButton.addEventListener('click', () =>
    togglePopup(popupEditProfile)
);