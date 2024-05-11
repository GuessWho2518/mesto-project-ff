const myDataApi = {
    cohort: "wff-cohort-12",
    TOKEN: "806a3e23-dd82-4545-a496-6ff755848ded",
    baseUrl: "https://mesto.nomoreparties.co/v1/"
}
const config = {
    cardsUrl: `${myDataApi.baseUrl}${myDataApi.cohort}/cards`,
    userUrl: `${myDataApi.baseUrl}${myDataApi.cohort}/users/me`,
    headers: {
        authorization: `${myDataApi.TOKEN}`,
        "Content-Type": "application/json",
    },
    patch: 'PATCH',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
};

const handleResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
}

export const getCardsData = () => {
    return fetch(config.cardsUrl, {
        headers: config.headers
    })
        .then(res => {
            return handleResponse(res);
        })
}

export const createCardData = (name, url) => {
    return fetch(config.cardsUrl, {
        method: config.post,
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: url
        })
    })
        .then(res => {
            return handleResponse(res);
        })
}

export const deleteCardData = (id) => {
    return fetch(`${config.cardsUrl}/${id}`, {
        method: config.delete,
        headers: config.headers,
    })
        .then(res => {
            return handleResponse(res);
        });
}

export const addLike = (id) => {
    return fetch(`${config.cardsUrl}/likes/${id}`, {
        method: config.put,
        headers: config.headers
    })
        .then(res => {
            return handleResponse(res);
        });
}

export const removeLike = (id) => {
    return fetch(`${config.cardsUrl}/likes/${id}`, {
        method: config.delete,
        headers: config.headers
    })
        .then(res => {
            return handleResponse(res);
        });
}

export const getProfileData = () => {
    return fetch(config.userUrl, {
        headers: config.headers
    })
        .then(res => {
            return handleResponse(res);
        })
}

export const updateProfileData = (name, job) => {
    return fetch(config.userUrl, {
        method: config.patch,
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: job
        })
    })
        .then(res => {
            return handleResponse(res);
        })
}

export const updateAvatar = (url) => {
    return fetch(`${config.userUrl}/avatar`, {
        method: config.patch,
        headers: config.headers,
        body: JSON.stringify({
            avatar: url
        })
    })
        .then(res => {
            return handleResponse(res);
        });
}
