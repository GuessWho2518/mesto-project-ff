export const openModal = (modalWindow) => {
    modalWindow.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeModalWhenClickingEsc);
    modalWindow.addEventListener("click", closeModalWhenClickingOverlay);
}

export const closeModal = (modalWindow) => {
    modalWindow.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeModalWhenClickingEsc);
    modalWindow.removeEventListener("click", closeModalWhenClickingOverlay);
}

export const closeModalWhenClickingEsc = (event) => {
    if (event.key === "Escape") {
        const openedPopup = document.querySelector(".popup_is-opened");
        closeModal(openedPopup);
    }
}

export const closeModalWhenClickingOverlay = (event) => {
    if (event.currentTarget === event.target) {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}
