export const openModal = (modalWindow, closeButtton) => {
    modalWindow.classList.add("popup_is-opened");
    modalWindow.addEventListener("click", closeModalWhenClickingOverlay);
    closeButtton.addEventListener("click", closeModalWhenClickingHandler);
    document.addEventListener("keydown", closeModalWhenClickingEsc);
}

export const closeModal = (modalWindow, closeButtton) => {
    modalWindow.classList.remove("popup_is-opened");
    modalWindow.removeEventListener("click", closeModalWhenClickingOverlay);
    closeButtton.removeEventListener("click", closeModalWhenClickingHandler);
    document.removeEventListener("keydown", closeModalWhenClickingEsc);
}

function closeModalWhenClickingEsc(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        const closeButton = openedPopup.querySelector('.popup__close');
        closeModal(openedPopup, closeButton);
    }
}

function closeModalWhenClickingOverlay(event) {
    if (event.target === event.currentTarget) {
        closeModal(event.target, event.target.querySelector('.popup__close'));
    }
}

function closeModalWhenClickingHandler(event) {
    const openedPopup = event.target.closest(".popup");
    closeModal(openedPopup, event.target);
}