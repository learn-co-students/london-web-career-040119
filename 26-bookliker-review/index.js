const booksUrl = `http://localhost:3000/books`
const bookListElement = document.getElementById('list')
const bookDetailsElement = document.getElementById('show-panel')

// - Get a list of books & render them
const getBooksFromAPI = () => {
    // fetch
    // json?
    return fetch(booksUrl)
        .then(res => res.json())
}

const renderBooks = books => {
    books.forEach(renderBook)
}

const renderBook = book => {
    const bookLi = document.createElement('li')

    bookLi.innerText = book.title

    bookListElement.append(bookLi)

    bookLi.addEventListener('click', () => renderBookDetails(book))
}

//   `http://localhost:3000/books`
// - Be able to click on a book, you should see the book's thumbnail and description and a list of users who have liked the book.

const renderBookDetails = book => {
    console.log('clickled', book)

    const titleEl = document.createElement('h1')
    const descriptionEl = document.createElement('p')
    const imgEl = document.createElement('img')
    const usersListEl = document.createElement('ul')
    const likeButtonEl = document.createElement('button')

    titleEl.innerText = book.title
    descriptionEl.innerText = book.description
    imgEl.src = book.img_url

    descriptionEl.addEventListener('click', () => descriptionEl.contentEditable = true)
    descriptionEl.addEventListener('input', (event) => {
        book.description = event.target.innerText
        updateBookInBackend(book)
    })

    renderUsers(book.users, usersListEl)

    likeButtonEl.innerText = 'Like book'

    bookDetailsElement.innerHTML = ''
    bookDetailsElement.append(titleEl, descriptionEl, imgEl, usersListEl, likeButtonEl)

    likeButtonEl.addEventListener('click', () => likeBook(book, usersListEl, likeButtonEl))

}
// - You can like a book by clicking on a button. You are user 1 `{"id":1, "username":"pouros"}`, so to like a book send a `PATCH` request to `http://localhost:3000/books/:id` with an array of users who like the book. This array should be equal to the existing array of users that like the book, plus your user. For example, if the previous array was `"[{"id":2, "username":"auer"}, {"id":8, "username":"goodwin"}]`, you should send as the body of your PATCH request:

const currentUser = { "id": 1, "username": "pouros" }

const renderUsers = (users, usersListEl) => {
    usersListEl.innerHTML = ''
    users.forEach(user => {
        const userLi = document.createElement('li')
        userLi.innerText = user.username
        usersListEl.append(userLi)
    })
}

const likeBook = (book, usersListEl, likeButtonEl) => {
    console.log(book)
    if (book.users.find(user => user.id == currentUser.id)) {
        book.users = book.users.filter(user => user.id !== currentUser.id)
    } else {
        book.users.push(currentUser)
    }

    likeButtonEl.disabled = true
    updateBookInBackend(book)
        .then(book => renderUsers(book.users, usersListEl))
        .then(() => likeButtonEl.disabled = false)
}

const updateBookInBackend = book => {
    return fetch(booksUrl + '/' + book.id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
        .then(res => res.json())
}

// ```javascript
// {
//   "users": [
//     {"id":2, "username":"auer"},
//     {"id":8, "username":"goodwin"},
//     {"id":1, "username":"pouros"}
//   ]
// }
// ```
// - This route will respond with the updated book json including the list of users who have liked the book.
// - BONUS: Can you make it so a second patch request to the same book removes your user from the list of users? Can you toggle likes on and off?

document.addEventListener("DOMContentLoaded", function () {
    getBooksFromAPI()
        .then(renderBooks)
});
