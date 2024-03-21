const profileEditingButton = document.querySelector(".profile__edit-button"); // кнопка редактирования профиля
const modalProfileEditing = document.querySelector(".popup_type_edit"); // всплывающее окно редактирования профиля

const creatingCardButton = document.querySelector(".profile__add-button"); // кнопка добавления карточки
const modalCreatingCard = document.querySelector(".popup_type_new-card"); // всплывающее окно создания карточки

modalFunction(modalProfileEditing, profileEditingButton);
modalFunction(modalCreatingCard, creatingCardButton);

export function modalFunction(popupElement, openedBbutton) {
  const modalCloseButtons = Array.from(
    document.querySelectorAll(".popup__close")
  ); // все кнопки закрытия

  function popupOpened(element) {
    element.classList.add("popup_is-opened");
  }

  function popupClosed(element) {
    element.classList.remove("popup_is-opened");
  }

  openedBbutton.addEventListener("click", function () {
    popupOpened(popupElement);
  });

  modalCloseButtons.forEach(function (item) {
    item.addEventListener("click", function () {
      popupClosed(popupElement);
    });
  });
}
