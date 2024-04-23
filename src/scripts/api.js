/**
 * Токен: 806a3e23-dd82-4545-a496-6ff755848ded
 * Идентификатор группы: wff-cohort-12
 */
const config = {
    url: 'https://mesto.nomoreparties.co/v1/wff-cohort-12',
    headers: {
        authorization: '',
        'Content-type': 'application/json'
    }
}

export const getInitialCard = () => {
    return fetch(`${config.url}/cards`, {
        headers: {
            authorization: '806a3e23-dd82-4545-a496-6ff755848ded'
        }
    })
        .then(res => res.json())
}

export const getUserInfo = () => {
    return fetch(`${config.url}/users/me`, {
        headers: {
            authorization: '806a3e23-dd82-4545-a496-6ff755848ded'
        }
    })
        .then(res => res.json())
}