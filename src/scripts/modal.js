export function openModal(modalWindow) {
    modalWindow.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeModalWhenClickingEsc);
    modalWindow.addEventListener("click", closeModalWhenClickingOverlay);
}

export function closeModal(modalWindow) {
    modalWindow.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeModalWhenClickingEsc);
    modalWindow.removeEventListener("click", closeModalWhenClickingOverlay);
}

export function closeModalWhenClickingEsc(event) {
    if (event.key === "Escape") {
        const openedPopup = document.querySelector(".popup_is-opened");
        closeModal(openedPopup);
    }
}

export function closeModalWhenClickingOverlay(event) {
    if (event.currentTarget === event.target) {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}
