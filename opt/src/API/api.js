const API = 'https://6776676812a55a9a7d0b9792.mockapi.io/orders';

const getUsers = () => {
    return fetch(API)
    .then(res => res.json())
}

const createUsers = (value) => {
    const options = {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
            "Content-Type": "application/json",
        },
    }
    return fetch(API, options).then(res => res.json())
}

const removeUser = (id) => {
    const options = {
        method: "DELETE",
    }

    return fetch(`${API}/${id}`, options).then(res => res.json())
}

export {
    getUsers, 
    createUsers,
    removeUser
}