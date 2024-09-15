export async function loginUser(credentials) {
    return fetch('http://localhost:4000/auth/login/user', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export async function loginAdmin(credentials) {
    return fetch('http://localhost:4000/auth/login/admin', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}