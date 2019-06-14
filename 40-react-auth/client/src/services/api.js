const baseUrl = 'http://localhost:3001'
const signinUrl = baseUrl + '/signin'

export function signin (username, password) {
	return fetch(signinUrl, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(resp => resp.json())
}

export function validate () {
    return fetch('http://localhost:3001/validate', {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export function getInventory () {
    return fetch('http://localhost:3001/inventory', {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export default { signin, validate, getInventory }
