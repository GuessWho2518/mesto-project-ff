/**
 * Токен: 806a3e23-dd82-4545-a496-6ff755848ded
 * Идентификатор группы: wff-cohort-12
 */
const config = {
    URL: "https://nomoreparties.co/v1/",
    cohort: "wff-cohort-12",
    headers: {
        authorization: "806a3e23-dd82-4545-a496-6ff755848ded",
        "Content-Type": "application/json",
    },
};

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
}
// получение данных о пользователе
export const getUserData = () => {
    return fetch(`${config.URL}${config.cohort}/users/me`, {
        headers: config.headers,
    }).then(checkResponse);
};

// получение данных о карточках
export const getCardsData = () => {
    return fetch(`${config.URL}${config.cohort}/cards`, {
        headers: config.headers,
    }).then(checkResponse)
}

// обновление данных о пользователе
export const updateProfileData = (data) => {
    return fetch(`${config.URL}${config.cohort}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: data.name,
            about: data.about
        })
    }).then(checkResponse)
}

// обновление данных о карточках
export const updateCardData = (data) => {
    return fetch(`${config.URL}${config.cohort}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    })
        .then(checkResponse)
}